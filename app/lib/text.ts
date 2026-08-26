export const MAX_NAME_CHARS = 20;
export const MAX_CONTENT_CHARS = 1000;

/** User-perceived character count (emoji-safe). */
export function charCount(value: string): number {
  if (typeof Intl !== "undefined" && "Segmenter" in Intl) {
    const segmenter = new Intl.Segmenter(undefined, { granularity: "grapheme" });
    return Array.from(segmenter.segment(value)).length;
  }
  return Array.from(value).length;
}

/** Remove NUL bytes that some DB drivers reject. */
export function sanitizeText(value: string): string {
  return value.replace(/\u0000/g, "");
}

export function clipChars(value: string, max: number): string {
  if (typeof Intl !== "undefined" && "Segmenter" in Intl) {
    const segmenter = new Intl.Segmenter(undefined, { granularity: "grapheme" });
    return Array.from(segmenter.segment(value))
      .slice(0, max)
      .map((s) => s.segment)
      .join("");
  }
  return Array.from(value).slice(0, max).join("");
}
