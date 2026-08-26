import { NextResponse } from "next/server";
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
  try {
    const id = Number(params.id);
    if (!Number.isInteger(id) || id <= 0) {
      return NextResponse.json({ error: "잘못된 요청입니다." }, { status: 400 });
    }

    const body = await request.json();
    const name = sanitizeText(String(body.name ?? "")).trim();
    const content = sanitizeText(String(body.content ?? "")).trim();
    const editToken = String(body.editToken ?? "");

    if (!editToken) {
      return NextResponse.json({ error: "권한이 없습니다." }, { status: 403 });
    }
    if (!name || !content) {
      return NextResponse.json(
        { error: "이름과 메시지를 입력해주세요." },
        { status: 400 }
      );
    }
    if (charCount(name) > MAX_NAME || charCount(content) > MAX_CONTENT) {
      return NextResponse.json({ error: "글자 수를 확인해주세요." }, { status: 400 });
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
      return NextResponse.json(
        { error: "메시지를 찾을 수 없거나 권한이 없습니다." },
        { status: 404 }
      );
    }

    return NextResponse.json(toClient(rows[0]));
  } catch (error) {
    console.error("PATCH /api/messages/[id]", error);
    return NextResponse.json(
      { error: "메시지 수정에 실패했습니다." },
      { status: 500 }
    );
  }
}

export async function DELETE(request: Request, { params }: Params) {
  try {
    const id = Number(params.id);
    if (!Number.isInteger(id) || id <= 0) {
      return NextResponse.json({ error: "잘못된 요청입니다." }, { status: 400 });
    }

    const body = await request.json().catch(() => ({}));
    const editToken = String(body.editToken ?? "");

    if (!editToken) {
      return NextResponse.json({ error: "권한이 없습니다." }, { status: 403 });
    }

    const db = getDb();
    const { rowCount } = await db.sql`
      DELETE FROM birthday_messages
      WHERE id = ${id} AND edit_token = ${editToken}
    `;

    if (!rowCount) {
      return NextResponse.json(
        { error: "메시지를 찾을 수 없거나 권한이 없습니다." },
        { status: 404 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("DELETE /api/messages/[id]", error);
    return NextResponse.json(
      { error: "메시지 삭제에 실패했습니다." },
      { status: 500 }
    );
  }
}
