import { style } from "@vanilla-extract/css";

export const container = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
  backgroundColor: "#ffffff",
});

export const invite = style({
  margin: 0,
  padding: "28px 24px 20px",
  fontSize: 15,
  fontWeight: 700,
  letterSpacing: "-0.02em",
  color: "#3a3030",
  lineHeight: 1.5,
});
