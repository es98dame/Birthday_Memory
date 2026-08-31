import { style } from "@vanilla-extract/css";

export const wrap = style({
  position: "relative",
  padding: "8px 20px 40px",
  display: "flex",
  flexDirection: "column",
  gap: 36,
  overflow: "hidden",
});

export const deco = style({
  position: "absolute",
  pointerEvents: "none",
  zIndex: 0,
});

export const decoLeft = style([
  deco,
  {
    left: -10,
    bottom: 100,
    opacity: 0.48,
    transform: "scale(1.05) rotate(-22deg)",
    transformOrigin: "center",
  },
]);

export const decoRight = style([
  deco,
  {
    right: 0,
    top: 48,
    opacity: 0.45,
    transform: "scale(1.05) scaleX(-1) rotate(-35deg)",
    transformOrigin: "center",
  },
]);

export const card = style({
  width: "100%",
  maxWidth: "100%",
  boxSizing: "border-box",
  backgroundColor: "#fff8f5",
  border: "1px solid #f5d9ce",
  borderRadius: 16,
  padding: "28px 20px 22px",
  boxShadow: "0 8px 24px rgba(242, 140, 102, 0.08)",
  display: "flex",
  flexDirection: "column",
  gap: 14,
  position: "relative",
  zIndex: 1,
});

export const sectionTitle = style({
  margin: 0,
  fontSize: 18,
  fontWeight: 700,
  textAlign: "center",
  color: "#3a3030",
});

export const sectionHint = style({
  margin: "-6px 0 4px",
  fontSize: 13,
  lineHeight: 1.7,
  textAlign: "center",
  color: "#8a7c76",
  wordBreak: "keep-all",
});

export const capsule = style({
  margin: 0,
  fontSize: 13,
  lineHeight: 1.7,
  textAlign: "center",
  color: "#6b5f5a",
  wordBreak: "keep-all",
});

export const field = style({
  display: "block",
  width: "100%",
  maxWidth: "100%",
  minWidth: 0,
  boxSizing: "border-box",
  border: "1px solid #efd5cb",
  borderRadius: 12,
  padding: "14px 16px",
  fontSize: 14,
  color: "#3a3030",
  backgroundColor: "#ffffff",
  outline: "none",
  resize: "none",
  selectors: {
    "&::placeholder": {
      color: "#b5a7a1",
    },
    "&:focus": {
      borderColor: "#f28c66",
    },
  },
});

export const textareaWrap = style({
  position: "relative",
  display: "flex",
  flexDirection: "column",
  width: "100%",
  maxWidth: "100%",
  minWidth: 0,
  boxSizing: "border-box",
});

export const textarea = style([
  field,
  {
    minHeight: 110,
    paddingBottom: 28,
  },
]);

export const counter = style({
  position: "absolute",
  right: 14,
  bottom: 10,
  fontSize: 11,
  color: "#b5a7a1",
});

export const submit = style({
  display: "flex",
  width: "100%",
  maxWidth: "100%",
  boxSizing: "border-box",
  border: "none",
  borderRadius: 12,
  padding: "14px 16px",
  backgroundColor: "#f28c66",
  color: "#ffffff",
  fontSize: 15,
  fontWeight: 700,
  cursor: "pointer",
  alignItems: "center",
  justifyContent: "center",
  gap: 8,
  marginTop: 4,
  selectors: {
    "&:disabled": {
      opacity: 0.55,
      cursor: "not-allowed",
    },
  },
});

export const notice = style({
  margin: 0,
  fontSize: 11,
  lineHeight: 1.5,
  color: "#f28c66",
  textAlign: "center",
  wordBreak: "keep-all",
});

export const mySection = style({
  display: "flex",
  flexDirection: "column",
  gap: 12,
  position: "relative",
  zIndex: 1,
});

export const empty = style({
  margin: 0,
  padding: "24px 16px",
  textAlign: "center",
  fontSize: 13,
  color: "#9a8b84",
  backgroundColor: "#fff8f5",
  border: "1px dashed #f5d9ce",
  borderRadius: 14,
});

export const messageCard = style({
  backgroundColor: "#fff3ec",
  border: "1px solid #f5d9ce",
  borderRadius: 14,
  padding: "18px 16px 14px",
  display: "flex",
  flexDirection: "column",
  gap: 10,
});

export const messageMeta = style({
  display: "flex",
  flexDirection: "column",
  gap: 4,
});

export const author = style({
  fontSize: 14,
  fontWeight: 700,
  color: "#3a3030",
});

export const timestamp = style({
  fontSize: 11,
  color: "#a39690",
});

export const messageBody = style({
  margin: 0,
  fontSize: 14,
  lineHeight: 1.7,
  color: "#4a403c",
  wordBreak: "keep-all",
  whiteSpace: "pre-wrap",
});

export const editButton = style({
  border: "1px solid #f5c4b0",
  borderRadius: 8,
  backgroundColor: "#ffffff",
  color: "#f28c66",
  fontSize: 12,
  padding: "6px 12px",
  cursor: "pointer",
});

export const deleteButton = style({
  border: "1px solid #e8c4c0",
  borderRadius: 8,
  backgroundColor: "#ffffff",
  color: "#c06b66",
  fontSize: 12,
  padding: "6px 12px",
  cursor: "pointer",
});

export const deleteConfirmButton = style({
  border: "none",
  borderRadius: 8,
  backgroundColor: "#c06b66",
  color: "#ffffff",
  fontSize: 12,
  padding: "6px 12px",
  cursor: "pointer",
});

export const deleteHint = style({
  margin: 0,
  fontSize: 12,
  color: "#c06b66",
  textAlign: "right",
});

export const actions = style({
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center",
  flexWrap: "wrap",
  gap: 8,
  marginTop: 2,
});

export const errorText = style({
  margin: 0,
  fontSize: 12,
  color: "#c06b66",
  textAlign: "center",
});
