import { style } from "@vanilla-extract/css";

export const container = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
  backgroundColor: "#ffffff",
  padding: "28px 24px 22px",
  gap: 10,
});

export const invite = style({
  margin: 0,
  fontSize: 15,
  fontWeight: 700,
  letterSpacing: "-0.02em",
  color: "#3a3030",
  lineHeight: 1.5,
});

export const date = style({
  margin: 0,
  fontSize: 13,
  fontWeight: 500,
  letterSpacing: "0.08em",
  color: "#8a7369",
  lineHeight: 1.4,
});

export const dateRule = style({
  width: 28,
  height: 1,
  backgroundColor: "#f5d0c0",
  border: "none",
  margin: "2px 0 0",
});
