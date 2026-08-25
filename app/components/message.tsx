"use client";

import { FormEvent, useState } from "react";
import { FlowerArt } from "./svgs";
import {
  actions,
  author,
  card,
  capsule,
  counter,
  decoLeft,
  decoRight,
  deleteButton,
  editButton,
  empty,
  errorText,
  field,
  messageBody,
  messageCard,
  messageMeta,
  mySection,
  notice,
  sectionHint,
  sectionTitle,
  submit,
  textarea,
  textareaWrap,
  timestamp,
  wrap,
} from "./message.css";

const MAX_LENGTH = 200;

interface SavedMessage {
  id: number;
  name: string;
  body: string;
  at: string;
  editToken: string;
}

function formatKoreanDate(iso: string) {
  const date = new Date(iso);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hours = date.getHours();
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const period = hours < 12 ? "오전" : "오후";
  const hour12 = hours % 12 || 12;
  return `${year}년 ${month}월 ${day}일 ${period} ${hour12}:${minutes}`;
}

function PlaneIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M2.01 21 23 12 2.01 3 2 10l15 2-15 2z" />
    </svg>
  );
}

export default function Message() {
  const [name, setName] = useState("");
  const [body, setBody] = useState("");
  const [messages, setMessages] = useState<SavedMessage[]>([]);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState("");

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault();
    const trimmedName = name.trim();
    const trimmedBody = body.trim();
    if (!trimmedName || !trimmedBody || pending) return;

    setPending(true);
    setError("");

    try {
      if (editingId != null) {
        const current = messages.find((m) => m.id === editingId);
        if (!current) return;

        const res = await fetch(`/api/messages/${editingId}`, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: trimmedName,
            content: trimmedBody,
            editToken: current.editToken,
          }),
        });
        const data = await res.json();
        if (!res.ok) throw new Error(data.error || "수정 실패");

        setMessages((prev) =>
          prev.map((m) => (m.id === editingId ? data : m))
        );
        setEditingId(null);
      } else {
        const res = await fetch("/api/messages", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: trimmedName,
            content: trimmedBody,
          }),
        });
        const data = await res.json();
        if (!res.ok) throw new Error(data.error || "저장 실패");

        setMessages((prev) => [data, ...prev]);
      }

      setName("");
      setBody("");
    } catch (err) {
      setError(err instanceof Error ? err.message : "오류가 발생했습니다.");
    } finally {
      setPending(false);
    }
  };

  const onEdit = (message: SavedMessage) => {
    setEditingId(message.id);
    setName(message.name);
    setBody(message.body);
    setError("");
  };

  const onCancelEdit = () => {
    setEditingId(null);
    setName("");
    setBody("");
  };

  const onDelete = async (message: SavedMessage) => {
    if (!confirm("이 메시지를 삭제할까요?")) return;

    setPending(true);
    setError("");
    try {
      const res = await fetch(`/api/messages/${message.id}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ editToken: message.editToken }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "삭제 실패");

      setMessages((prev) => prev.filter((m) => m.id !== message.id));
      if (editingId === message.id) onCancelEdit();
    } catch (err) {
      setError(err instanceof Error ? err.message : "오류가 발생했습니다.");
    } finally {
      setPending(false);
    }
  };

  return (
    <section className={wrap}>
      <div className={decoLeft}>
        <FlowerArt />
      </div>
      <div className={decoRight}>
        <FlowerArt />
      </div>

      <form className={card} onSubmit={onSubmit}>
        <h2 className={sectionTitle}>
          {editingId != null ? "축하 메시지 수정하기 ❤️" : "생일 축하 메시지 남기기 ❤️"}
        </h2>
        <p className={capsule}>
          남겨주신 메시지는 루나와 루미가 성년이 되는 날,
          <br />
          타임캡슐처럼 전해질 거예요.
        </p>

        <input
          className={field}
          type="text"
          name="name"
          placeholder="이름을 입력해주세요"
          value={name}
          onChange={(e) => setName(e.target.value)}
          maxLength={20}
          required
        />

        <div className={textareaWrap}>
          <textarea
            className={textarea}
            name="message"
            placeholder="축하 메시지를 남겨주세요"
            value={body}
            onChange={(e) => setBody(e.target.value.slice(0, MAX_LENGTH))}
            maxLength={MAX_LENGTH}
            required
          />
          <span className={counter}>
            {body.length} / {MAX_LENGTH}
          </span>
        </div>

        <button
          className={submit}
          type="submit"
          disabled={pending || !name.trim() || !body.trim()}
        >
          {pending
            ? "저장 중..."
            : editingId != null
              ? "수정 완료"
              : "메시지 보내기"}
          {!pending && editingId == null && <PlaneIcon />}
        </button>

        {editingId != null && (
          <button
            className={editButton}
            type="button"
            onClick={onCancelEdit}
            style={{ alignSelf: "center" }}
          >
            수정 취소
          </button>
        )}

        {error && <p className={errorText}>{error}</p>}

        <p className={notice}>
          ⚠️ 이 화면을 벗어나거나 새로고침하면 작성한 메시지를 다시 볼 수 없어요.
          <br />
          다른 분에게는 보이지 않습니다.
        </p>
      </form>

      <div className={mySection}>
        <h2 className={sectionTitle}>나의 축하 메시지 🧡</h2>
        <p className={sectionHint}>이 방문에서 작성한 메시지만 확인할 수 있어요.</p>

        {messages.length === 0 ? (
          <p className={empty}>아직 남긴 메시지가 없어요.</p>
        ) : (
          messages.map((message) =>
            editingId === message.id ? null : (
              <article key={message.id} className={messageCard}>
                <div className={messageMeta}>
                  <span className={author}>{message.name}</span>
                  <time className={timestamp} dateTime={message.at}>
                    {formatKoreanDate(message.at)}
                  </time>
                </div>
                <p className={messageBody}>{message.body}</p>
                <div className={actions}>
                  <button
                    className={editButton}
                    type="button"
                    onClick={() => onEdit(message)}
                    disabled={pending}
                  >
                    수정하기
                  </button>
                  <button
                    className={deleteButton}
                    type="button"
                    onClick={() => onDelete(message)}
                    disabled={pending}
                  >
                    삭제하기
                  </button>
                </div>
              </article>
            )
          )
        )}
      </div>
    </section>
  );
}
