import { randomBytes } from "crypto";
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

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const name = sanitizeText(String(body.name ?? "")).trim();
    const content = sanitizeText(String(body.content ?? "")).trim();

    if (!name || !content) {
      return NextResponse.json(
        { error: "이름과 메시지를 입력해주세요." },
        { status: 400 }
      );
    }
    if (charCount(name) > MAX_NAME || charCount(content) > MAX_CONTENT) {
      return NextResponse.json({ error: "글자 수를 확인해주세요." }, { status: 400 });
    }

    const editToken = randomBytes(32).toString("hex");
    const db = getDb();
    const { rows } = await db.sql<MessageRow>`
      INSERT INTO birthday_messages (author_name, content, edit_token)
      VALUES (${name}, ${content}, ${editToken})
      RETURNING id, author_name, content, edit_token, created_at
    `;

    return NextResponse.json(toClient(rows[0]), { status: 201 });
  } catch (error) {
    console.error("POST /api/messages", error);
    return NextResponse.json(
      { error: "메시지 저장에 실패했습니다." },
      { status: 500 }
    );
  }
}
