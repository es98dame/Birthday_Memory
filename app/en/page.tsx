import type { Metadata } from "next";
import HomePage from "../components/home-page";
import { getDictionary } from "../i18n/dictionary";

export default function EnglishHome() {
  return <HomePage locale="en" />;
}

export async function generateMetadata(): Promise<Metadata> {
  const t = getDictionary("en").meta;
  const images = "/LunaAndLumi.jpg";
  return {
    title: t.title,
    description: t.description,
    openGraph: {
      title: t.title,
      description: t.description,
      images,
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: t.title,
      description: t.description,
      images,
    },
    other: {
      ["twitter:label1"]: t.dateLabel,
      ["twitter:data1"]: "2026.09.02",
      ["twitter:label2"]: t.eventLabel,
      ["twitter:data2"]: t.eventValue,
    },
  };
}
