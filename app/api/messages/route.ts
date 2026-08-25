import { randomBytes } from "crypto";
import { NextResponse } from "next/server";
import { getPool } from "@/app/lib/db";
import type { ResultSetHeader, RowDataPacket } from "mysql2";

const MAX_NAME = 20;
const MAX_CONTENT = 200;

export interface MessageRow extends RowDataPacket {
  id: number;
  author_name: string;
  content: string;
  edit_token: string;
  created_at: Date;
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
    const name = String(body.name ?? "").trim();
    const content = String(body.content ?? "").trim();

    if (!name || !content) {
      return NextResponse.json(
        { error: "이름과 메시지를 입력해주세요." },
        { status: 400 }
      );
    }
    if (name.length > MAX_NAME || content.length > MAX_CONTENT) {
      return NextResponse.json({ error: "글자 수를 확인해주세요." }, { status: 400 });
    }

    const editToken = randomBytes(32).toString("hex");
    const pool = getPool();
    const [result] = await pool.execute<ResultSetHeader>(
      `INSERT INTO birthday_messages (author_name, content, edit_token)
       VALUES (?, ?, ?)`,
      [name, content, editToken]
    );

    const [rows] = await pool.execute<MessageRow[]>(
      `SELECT id, author_name, content, edit_token, created_at
       FROM birthday_messages WHERE id = ?`,
      [result.insertId]
    );

    return NextResponse.json(toClient(rows[0]), { status: 201 });
  } catch (error) {
    console.error("POST /api/messages", error);
    return NextResponse.json(
      { error: "메시지 저장에 실패했습니다." },
      { status: 500 }
    );
  }
}
