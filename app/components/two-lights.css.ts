import { style } from "@vanilla-extract/css";

export const container = style({
  position: "relative",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "40px 20px 48px",
  textAlign: "center",
  overflow: "hidden",
});

export const moonMark = style({
  width: 22,
  height: 22,
  marginBottom: 14,
  color: "#f28c66",
});

export const title = style({
  margin: "0 0 16px",
  fontSize: 22,
  fontWeight: 700,
  color: "#3a3030",
  lineHeight: 1.2,
});

export const intro = style({
  margin: "0 0 32px",
  fontSize: 13,
  lineHeight: 1.8,
  color: "#6b5f5a",
  wordBreak: "keep-all",
});

export const duo = style({
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: 12,
  width: "100%",
  alignItems: "stretch",
  position: "relative",
  zIndex: 1,
});

export const divider = style({
  position: "absolute",
  left: "50%",
  top: 8,
  bottom: 8,
  width: 1,
  backgroundColor: "#f0ddd6",
  transform: "translateX(-50%)",
  pointerEvents: "none",
});

export const child = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: 8,
  padding: "0 6px",
  height: "100%",
});

export const iconCircle = style({
  width: 44,
  height: 44,
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginBottom: 4,
});

export const iconLuna = style([
  iconCircle,
  {
    backgroundColor: "#e8e0f5",
    color: "#8b7bb8",
  },
]);

export const iconLumi = style([
  iconCircle,
  {
    backgroundColor: "#ffe4d4",
    color: "#f28c66",
  },
]);

export const scriptName = style({
  fontFamily: "var(--font-script), cursive",
  fontSize: 28,
  lineHeight: 1,
  color: "#f28c66",
  margin: 0,
});

export const koreanName = style({
  margin: 0,
  fontSize: 14,
  fontWeight: 700,
  color: "#3a3030",
});

export const childDesc = style({
  margin: "4px 0 8px",
  fontSize: 12,
  lineHeight: 1.6,
  color: "#6b5f5a",
  wordBreak: "keep-all",
  minHeight: 58,
});

export const verse = style({
  width: "100%",
  flex: 1,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  borderRadius: 12,
  padding: "12px 10px",
  fontSize: 11,
  lineHeight: 1.6,
  color: "#5a504c",
  wordBreak: "keep-all",
  margin: 0,
  boxSizing: "border-box",
});

export const verseLuna = style([
  verse,
  {
    backgroundColor: "#f0ecf8",
  },
]);

export const verseLumi = style([
  verse,
  {
    backgroundColor: "#fff0e8",
  },
]);

export const verseRef = style({
  display: "block",
  marginTop: 6,
  fontSize: 10,
  color: "#9a8b84",
});

export const closing = style({
  margin: "28px 0 0",
  fontSize: 13,
  lineHeight: 1.7,
  color: "#6b5f5a",
  wordBreak: "keep-all",
});

export const heartRow = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: 8,
  marginTop: 14,
  color: "#f28c66",
});

export const decoLeft = style({
  position: "absolute",
  left: -6,
  top: 120,
  opacity: 0.55,
  pointerEvents: "none",
  transform: "scale(1.15) rotate(-18deg)",
  transformOrigin: "center",
  zIndex: 0,
});

export const decoRight = style({
  position: "absolute",
  right: 0,
  bottom: 36,
  opacity: 0.5,
  pointerEvents: "none",
  transform: "scale(1.15) scaleX(-1) rotate(-28deg)",
  transformOrigin: "center",
  zIndex: 0,
});

export const decoAccent = style({
  position: "absolute",
  right: 8,
  top: 28,
  opacity: 0.3,
  pointerEvents: "none",
  transform: "scale(0.55) scaleX(-1) rotate(-12deg)",
  transformOrigin: "center",
  zIndex: 0,
});
