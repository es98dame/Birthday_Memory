import { style } from "@vanilla-extract/css";

export const bar = style({
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center",
  gap: 6,
  padding: "12px 16px 0",
  backgroundColor: "#ffffff",
});

export const link = style({
  border: "none",
  background: "transparent",
  padding: "4px 2px",
  fontSize: 12,
  fontWeight: 700,
  letterSpacing: "0.04em",
  color: "#b7a8a1",
  textDecoration: "none",
  cursor: "pointer",
  selectors: {
    "&:hover": {
      color: "#6d5b54",
    },
  },
});

export const active = style({
  color: "#3a3030",
});

export const sep = style({
  color: "#d4c4bc",
  fontSize: 12,
  userSelect: "none",
});
