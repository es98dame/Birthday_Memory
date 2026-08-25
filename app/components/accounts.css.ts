import { style } from "@vanilla-extract/css";

export const container = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "16px",
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
  fontSize: 13,
  lineHeight: 1.6,
  padding: "0 8px",
  textAlign: "center",
  color: "#8a7c76",
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "center",
  gap: "4px",
  margin: "0",
  wordBreak: "keep-all",
});

export const block = style({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  borderRadius: 12,
  margin: "0",
  boxSizing: "border-box",
  overflow: "hidden",
});

export const blockTitle = style({
  fontSize: "14px",
  fontWeight: "bold",
  margin: "0",
  backgroundColor: "#f28c66",
  color: "#ffffff",
  padding: "12px 14px",
  cursor: "pointer",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
});

export const blockRow = style({
  fontSize: "14px",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "4px",
  margin: "0",
  border: "1px solid #f5d9ce",
  borderTop: "none",
  padding: "10px 12px",
  backgroundColor: "#fff8f5",
});

export const blockContent = style({
  fontSize: "14px",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "4px",
  width: "210px",
});

export const blockCopyButton = style({
  backgroundColor: "rgba(242, 140, 102, 0.18)",
  border: "none",
  borderRadius: "8px",
  padding: "6px 10px",
  color: "#6b534c",
  cursor: "pointer",
  fontSize: "12px",
  outline: "none",
});
