import type { Metadata } from "next";
import { gowunBatang } from "./style/fonts/gowunBatang";
import { parisienne } from "./style/fonts/parisienne";
import "./global.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${gowunBatang.className} ${parisienne.variable}`}>
      <body>{children}</body>
    </html>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  const title = "루나 & 루미의 첫번째 생일";
  const description = "루나 & 루미의 첫번째 생일을 축하해주세요. 2026.09.02";
  const images = "https://r2.wedding.beomyeong.miryang.dev/_BKK6901-2.jpg";
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images,
      locale: "ko_KR",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images,
    },
    other: {
      ["twitter:label1"]: "날짜",
      ["twitter:data1"]: "2026.09.02",
      ["twitter:label2"]: "이벤트",
      ["twitter:data2"]: "첫번째 생일 파티",
    },
  };
}
