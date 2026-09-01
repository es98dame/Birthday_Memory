import type { Metadata } from "next";
import { headers } from "next/headers";
import { gowunBatang } from "./style/fonts/gowunBatang";
import { parisienne } from "./style/fonts/parisienne";
import { getDictionary } from "./i18n/dictionary";
import "./global.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = headers().get("x-locale") === "en" ? "en" : "ko";

  return (
    <html lang={locale} className={`${gowunBatang.className} ${parisienne.variable}`}>
      <body>{children}</body>
    </html>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  const t = getDictionary("ko").meta;
  return {
    metadataBase: new URL("https://hbdlunalumi.damikim.site"),
    title: t.title,
    description: t.description,
  };
}
