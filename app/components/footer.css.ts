import { style } from "@vanilla-extract/css";

export const container = style({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "12px",
  padding: "28px 20px",
  backgroundColor: "#f8cbb8",
});

export const block = style({
  display: "flex",
  flexDirection: "column",
  gap: "6px",
  fontSize: 13,
  lineHeight: 1.3,
  fontWeight: 700,
  color: "#4a3530",
});

export const meta = style({
  fontSize: 12,
  fontWeight: 400,
  color: "#6b534c",
});

export const gift = style({
  fontSize: 13,
  lineHeight: 1.3,
  fontWeight: 700,
  color: "#4a3530",
  textDecoration: "none",
  whiteSpace: "nowrap",
});
