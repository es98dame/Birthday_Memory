import { NextResponse } from "next/server";
import { apiError, resolveLocale } from "@/app/i18n/api";
import { getDb } from "@/app/lib/db";
import { charCount, sanitizeText, MAX_CONTENT_CHARS, MAX_NAME_CHARS } from "@/app/lib/text";

const MAX_NAME = MAX_NAME_CHARS;
const MAX_CONTENT = MAX_CONTENT_CHARS;

interface MessageRow {
  id: number;
  author_name: string;
  content: string;
  edit_token: string;
  created_at: string | Date;
}

function toClient(row: MessageRow) {
  return {
    id: row.id,
    name: row.author_name,
    body: row.content,
    at: new Date(row.created_at).toISOString(),
    editToken: row.edit_token,
  };
}

type Params = { params: { id: string } };

export async function PATCH(request: Request, { params }: Params) {
  let locale = resolveLocale(undefined);
  try {
    const id = Number(params.id);
    const body = await request.json();
    locale = resolveLocale(body.locale);

    if (!Number.isInteger(id) || id <= 0) {
      return NextResponse.json({ error: apiError("badRequest", locale) }, { status: 400 });
    }

    const name = sanitizeText(String(body.name ?? "")).trim();
    const content = sanitizeText(String(body.content ?? "")).trim();
    const editToken = String(body.editToken ?? "");

    if (!editToken) {
      return NextResponse.json({ error: apiError("forbidden", locale) }, { status: 403 });
    }
    if (!name || !content) {
      return NextResponse.json({ error: apiError("required", locale) }, { status: 400 });
    }
    if (charCount(name) > MAX_NAME || charCount(content) > MAX_CONTENT) {
      return NextResponse.json({ error: apiError("length", locale) }, { status: 400 });
    }

    const db = getDb();
    const { rows } = await db.sql<MessageRow>`
      UPDATE birthday_messages
      SET author_name = ${name},
          content = ${content},
          updated_at = NOW()
      WHERE id = ${id} AND edit_token = ${editToken}
      RETURNING id, author_name, content, edit_token, created_at
    `;

    if (rows.length === 0) {
      return NextResponse.json({ error: apiError("notFound", locale) }, { status: 404 });
    }

    return NextResponse.json(toClient(rows[0]));
  } catch (error) {
    console.error("PATCH /api/messages/[id]", error);
    return NextResponse.json({ error: apiError("updateFailed", locale) }, { status: 500 });
  }
}

export async function DELETE(request: Request, { params }: Params) {
  let locale = resolveLocale(undefined);
  try {
    const id = Number(params.id);
    const body = await request.json().catch(() => ({}));
    locale = resolveLocale(body.locale);

    if (!Number.isInteger(id) || id <= 0) {
      return NextResponse.json({ error: apiError("badRequest", locale) }, { status: 400 });
    }

    const editToken = String(body.editToken ?? "");

    if (!editToken) {
      return NextResponse.json({ error: apiError("forbidden", locale) }, { status: 403 });
    }

    const db = getDb();
    const { rowCount } = await db.sql`
      DELETE FROM birthday_messages
      WHERE id = ${id} AND edit_token = ${editToken}
    `;

    if (!rowCount) {
      return NextResponse.json({ error: apiError("notFound", locale) }, { status: 404 });
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("DELETE /api/messages/[id]", error);
    return NextResponse.json({ error: apiError("deleteFailed", locale) }, { status: 500 });
  }
}
