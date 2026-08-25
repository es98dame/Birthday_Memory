import { style } from "@vanilla-extract/css";

export const container = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "16px",
  padding: "20px 20px 40px",
  position: "relative",
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
  margin: "0 0 8px",
  textAlign: "center",
  color: "#8a7c76",
  wordBreak: "keep-all",
});

export const imageContainer = style({
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: "8px",
  width: "100%",
});

export const imageButton = style({
  display: "block",
  width: "100%",
  padding: 0,
  border: "none",
  background: "none",
  cursor: "pointer",
  borderRadius: 12,
  overflow: "hidden",
  lineHeight: 0,
});

export const image = style({
  width: "100%",
  aspectRatio: "1 / 1",
  height: "auto",
  objectFit: "cover",
  borderRadius: 12,
  transition: "transform 0.2s ease",
  selectors: {
    [`${imageButton}:hover &`]: {
      transform: "scale(1.03)",
    },
  },
});

export const lightbox = style({
  position: "fixed",
  inset: 0,
  zIndex: 1000,
  backgroundColor: "rgba(30, 20, 18, 0.88)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: 20,
});

export const lightboxImage = style({
  maxWidth: "min(920px, 100%)",
  maxHeight: "90vh",
  width: "auto",
  height: "auto",
  objectFit: "contain",
  borderRadius: 12,
  boxShadow: "0 16px 48px rgba(0, 0, 0, 0.35)",
});

export const closeButton = style({
  position: "absolute",
  top: 16,
  right: 16,
  width: 40,
  height: 40,
  border: "none",
  borderRadius: "50%",
  backgroundColor: "rgba(255, 255, 255, 0.16)",
  color: "#ffffff",
  fontSize: 28,
  lineHeight: 1,
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 2,
});

export const navButton = style({
  position: "absolute",
  top: "50%",
  transform: "translateY(-50%)",
  width: 44,
  height: 44,
  border: "none",
  borderRadius: "50%",
  backgroundColor: "rgba(255, 255, 255, 0.18)",
  color: "#ffffff",
  fontSize: 32,
  lineHeight: 1,
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 2,
  selectors: {
    "&:hover": {
      backgroundColor: "rgba(255, 255, 255, 0.28)",
    },
  },
});

export const navPrev = style({
  left: 12,
});

export const navNext = style({
  right: 12,
});
