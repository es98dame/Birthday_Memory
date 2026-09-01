"use client";

import { FormEvent, useState } from "react";
import {
  formatMessageDate,
  getDictionary,
  type Locale,
} from "@/app/i18n/dictionary";
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
  deleteConfirmButton,
  deleteHint,
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
import { charCount, clipChars, MAX_CONTENT_CHARS, MAX_NAME_CHARS } from "@/app/lib/text";

const MAX_NAME = MAX_NAME_CHARS;
const MAX_LENGTH = MAX_CONTENT_CHARS;

interface SavedMessage {
  id: number;
  name: string;
  body: string;
  at: string;
  editToken: string;
}

function PlaneIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M2.01 21 23 12 2.01 3 2 10l15 2-15 2z" />
    </svg>
  );
}

export default function Message({ locale }: { locale: Locale }) {
  const t = getDictionary(locale).message;
  const [name, setName] = useState("");
  const [body, setBody] = useState("");
  const [messages, setMessages] = useState<SavedMessage[]>([]);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [confirmDeleteId, setConfirmDeleteId] = useState<number | null>(null);
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
            locale,
          }),
        });
        const data = await res.json();
        if (!res.ok) throw new Error(data.error || t.errorUpdate);

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
            locale,
          }),
        });
        const data = await res.json();
        if (!res.ok) throw new Error(data.error || t.errorSave);

        setMessages((prev) => [data, ...prev]);
      }

      setName("");
      setBody("");
    } catch (err) {
      setError(err instanceof Error ? err.message : t.errorGeneric);
    } finally {
      setPending(false);
    }
  };

  const onEdit = (message: SavedMessage) => {
    setEditingId(message.id);
    setConfirmDeleteId(null);
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
    if (confirmDeleteId !== message.id) {
      setConfirmDeleteId(message.id);
      return;
    }

    setPending(true);
    setError("");
    try {
      const res = await fetch(`/api/messages/${message.id}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ editToken: message.editToken, locale }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || t.errorDelete);

      setMessages((prev) => prev.filter((m) => m.id !== message.id));
      setConfirmDeleteId(null);
      if (editingId === message.id) onCancelEdit();
    } catch (err) {
      setError(err instanceof Error ? err.message : t.errorGeneric);
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
          {editingId != null ? t.titleEdit : t.titleNew}
        </h2>
        <p className={capsule}>
          {t.capsule[0]}
          <br />
          {t.capsule[1]}
        </p>

        <input
          className={field}
          type="text"
          name="name"
          placeholder={t.namePlaceholder}
          value={name}
          onChange={(e) => setName(clipChars(e.target.value, MAX_NAME))}
          required
        />

        <div className={textareaWrap}>
          <textarea
            className={textarea}
            name="message"
            placeholder={t.bodyPlaceholder}
            value={body}
            onChange={(e) => setBody(clipChars(e.target.value, MAX_LENGTH))}
            required
          />
          <span className={counter}>
            {charCount(body)} / {MAX_LENGTH}
          </span>
        </div>

        <button
          className={submit}
          type="submit"
          disabled={pending || !name.trim() || !body.trim()}
        >
          {pending
            ? t.submitting
            : editingId != null
              ? t.submitEdit
              : t.submitNew}
          {!pending && editingId == null && <PlaneIcon />}
        </button>

        {editingId != null && (
          <button
            className={editButton}
            type="button"
            onClick={onCancelEdit}
            style={{ alignSelf: "center" }}
          >
            {t.cancelEdit}
          </button>
        )}

        {error && <p className={errorText}>{error}</p>}

        <p className={notice}>
          {t.notice[0]}
          <br />
          {t.notice[1]}
        </p>
      </form>

      <div className={mySection}>
        <h2 className={sectionTitle}>{t.myTitle}</h2>
        <p className={sectionHint}>{t.myHint}</p>

        {messages.length === 0 ? (
          <p className={empty}>{t.empty}</p>
        ) : (
          messages.map((message) =>
            editingId === message.id ? null : (
              <article key={message.id} className={messageCard}>
                <div className={messageMeta}>
                  <span className={author}>{message.name}</span>
                  <time className={timestamp} dateTime={message.at}>
                    {formatMessageDate(message.at, locale)}
                  </time>
                </div>
                <p className={messageBody}>{message.body}</p>
                {confirmDeleteId === message.id && (
                  <p className={deleteHint}>{t.deleteConfirm}</p>
                )}
                <div className={actions}>
                  {confirmDeleteId === message.id ? (
                    <>
                      <button
                        className={editButton}
                        type="button"
                        onClick={() => setConfirmDeleteId(null)}
                        disabled={pending}
                      >
                        {t.cancel}
                      </button>
                      <button
                        className={deleteConfirmButton}
                        type="button"
                        onClick={() => onDelete(message)}
                        disabled={pending}
                      >
                        {pending ? t.deleting : t.deleteSure}
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        className={editButton}
                        type="button"
                        onClick={() => onEdit(message)}
                        disabled={pending}
                      >
                        {t.edit}
                      </button>
                      <button
                        className={deleteButton}
                        type="button"
                        onClick={() => onDelete(message)}
                        disabled={pending}
                      >
                        {t.delete}
                      </button>
                    </>
                  )}
                </div>
              </article>
            )
          )
        )}
      </div>
    </section>
  );
}
