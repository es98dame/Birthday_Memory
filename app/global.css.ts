import { globalStyle } from "@vanilla-extract/css";

globalStyle("html, body", {
  margin: 0,
  color: "#3a3030",
  backgroundColor: "#f5ebe6",
  boxSizing: "border-box",
  WebkitTapHighlightColor: "transparent",
});

globalStyle("html", {
  scrollBehavior: "smooth",
});

globalStyle("*, *::before, *::after", {
  boxSizing: "border-box",
});

globalStyle("button, input, textarea", {
  fontFamily: "inherit",
});
