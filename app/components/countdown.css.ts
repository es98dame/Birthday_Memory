import { style } from "@vanilla-extract/css";

export const container = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: 16,
  padding: "20px 20px 48px",
  scrollMarginTop: 24,
});

export const titleWrap = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: 8,
});

export const title = style({
  margin: 0,
  fontSize: 20,
  fontWeight: 700,
  color: "#3a3030",
  lineHeight: 1,
});

export const titleAccent = style({
  width: 36,
  height: 2,
  backgroundColor: "#f28c66",
  borderRadius: 2,
});

export const description = style({
  margin: 0,
  fontSize: 13,
  lineHeight: 1.7,
  textAlign: "center",
  color: "#8a7c76",
  wordBreak: "keep-all",
});

export const grid = style({
  display: "grid",
  gridTemplateColumns: "repeat(5, minmax(0, 1fr))",
  gap: 8,
  width: "100%",
  maxWidth: 520,
  marginTop: 8,
});

export const unit = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: 6,
  backgroundColor: "#fff8f5",
  border: "1px solid #f5d9ce",
  borderRadius: 12,
  padding: "14px 6px",
});

export const digit = style({
  fontSize: 22,
  fontWeight: 700,
  color: "#f28c66",
  lineHeight: 1,
  fontVariantNumeric: "tabular-nums",
});

export const label = style({
  fontSize: 11,
  color: "#8a7c76",
});
