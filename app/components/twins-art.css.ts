import { style } from "@vanilla-extract/css";

export const container = style({
  width: "100%",
  background:
    "linear-gradient(180deg, #f8d2c2 0%, #f5c4b0 55%, #f7d8cb 100%)",
  overflow: "hidden",
});

export const figure = style({
  margin: 0,
  width: "100%",
  aspectRatio: "3 / 2",
});

export const image = style({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  display: "block",
});
