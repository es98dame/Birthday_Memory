import { style } from "@vanilla-extract/css";

export const container = style({
  width: "100%",
  background:
    "linear-gradient(180deg, #f8d2c2 0%, #f5c4b0 55%, #f7d8cb 100%)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "20px 24px 28px",
  boxSizing: "border-box",
});

export const figure = style({
  margin: 0,
  width: "100%",
  maxWidth: 520,
  aspectRatio: "1536 / 1024",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export const image = style({
  width: "100%",
  height: "100%",
  objectFit: "contain",
  display: "block",
  backgroundColor: "transparent",
});
