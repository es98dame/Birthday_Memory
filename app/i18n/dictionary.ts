export const locales = ["ko", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "ko";

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

const ko = {
  meta: {
    title: "루나 & 루미의 첫번째 생일",
    description: "루나 & 루미의 첫번째 생일을 축하해주세요. 2026.09.02",
    dateLabel: "날짜",
    eventLabel: "이벤트",
    eventValue: "첫번째 생일 파티",
  },
  hero: {
    invite: "루나 & 루미의 첫번째 생일을 축하해주세요",
  },
  twinsArt: {
    alt: "루나와 루미",
  },
  twoLights: {
    title: "두 개의 빛",
    intro: [
      "하나님께서 빛을 만드시고",
      "낮과 밤을 밝힐 두 광명을 두셨듯이,",
      "우리에게도 서로 다른 빛을 지닌 두 아이가 왔습니다.",
    ],
    lunaAlt: "루나",
    lunaDesc: ["밤을 조용히 비추는", "작은 달빛"],
    lumiAlt: "루미",
    lumiDesc: ["세상의 첫 빛처럼", "밝음과 기쁨을 전하는"],
    closing: ["달과 빛이 함께하듯,", "두 아이가 서로의 빛이 되어 가기를 바랍니다."],
  },
  message: {
    titleNew: "생일 축하 메시지 남기기 ❤️",
    titleEdit: "축하 메시지 수정하기 ❤️",
    capsule: [
      "남겨주신 메시지는 루나와 루미가 성년이 되는 날,",
      "타임캡슐처럼 전해질 거예요.",
    ],
    namePlaceholder: "이름을 입력해주세요",
    bodyPlaceholder: "축하 메시지를 남겨주세요",
    submitting: "저장 중...",
    submitEdit: "수정 완료",
    submitNew: "메시지 보내기",
    cancelEdit: "수정 취소",
    notice: [
      "⚠️ 이 화면을 벗어나거나 새로고침하면 작성한 메시지를 다시 볼 수 없어요.",
      "다른 분에게는 보이지 않습니다.",
    ],
    myTitle: "나의 축하 메시지 🧡",
    myHint: "이 방문에서 작성한 메시지만 확인할 수 있어요.",
    empty: "아직 남긴 메시지가 없어요.",
    deleteConfirm: "정말 삭제할까요?",
    cancel: "취소",
    deleting: "삭제 중...",
    deleteSure: "정말 삭제",
    edit: "수정하기",
    delete: "삭제하기",
    errorGeneric: "오류가 발생했습니다.",
    errorSave: "저장 실패",
    errorUpdate: "수정 실패",
    errorDelete: "삭제 실패",
  },
  gallery: {
    title: "사진첩",
    description: "루나 & 루미의 소중한 순간들을 함께 나눠보세요.",
    enlarge: "사진 크게 보기",
    alt: "루나 & 루미",
    lightbox: "확대된 사진",
    close: "닫기",
    prev: "이전 사진",
    next: "다음 사진",
  },
  countdown: {
    title: "성년까지",
    description: "루나와 루미가 18살이 되는 날까지",
    done: "드디어 성년이 되었어요 🎉",
    years: "년",
    days: "일",
    hours: "시간",
    minutes: "분",
    seconds: "초",
  },
  footer: {
    title: "루나 & 루미 첫번째 생일",
    top: "맨 위로 ↑",
  },
  lang: {
    ko: "KO",
    en: "EN",
    label: "언어 선택",
  },
  api: {
    badRequest: "잘못된 요청입니다.",
    forbidden: "권한이 없습니다.",
    required: "이름과 메시지를 입력해주세요.",
    length: "글자 수를 확인해주세요.",
    notFound: "메시지를 찾을 수 없거나 권한이 없습니다.",
    updateFailed: "메시지 수정에 실패했습니다.",
    deleteFailed: "메시지 삭제에 실패했습니다.",
    saveFailed: "메시지 저장에 실패했습니다.",
  },
};

const en = {
  meta: {
    title: "Luna & Lumi's First Birthday",
    description: "Celebrate Luna & Lumi's first birthday. 2026.09.02",
    dateLabel: "Date",
    eventLabel: "Event",
    eventValue: "First Birthday Party",
  },

  hero: {
    invite: "Celebrate Luna & Lumi’s First Birthday",
  },

  twinsArt: {
    alt: "Luna and Lumi",
  },

  twoLights: {
    title: "Two Little Lights",

    intro: [
      "Just as God created light and placed two great lights in the sky,",
      "one to brighten the day and one to brighten the night,",
      "we were blessed with two little girls, each carrying a light of her own.",
    ],
    lunaAlt: "Luna",
    lunaDesc: [
      "A little moonlight,",
      "gently glowing through the night.",
    ],

    lumiAlt: "Lumi",
    lumiDesc: [
      "Like the first light of day,",
      "bringing brightness and joy wherever she goes.",
    ],

    closing: [
      "Just as the moon and light belong together,",
      "we hope Luna and Lumi will always be a light for one another",
      "as they grow through life side by side.",
    ],
  },

  message: {
    titleNew: "Leave a Birthday Message ❤️",
    titleEdit: "Edit Your Message ❤️",

    capsule: [
      "We’d love for you to leave a special message for Luna and Lumi.",
      "Your message will be saved like a time capsule",
      "and given to them when they become adults.",
    ],

    namePlaceholder: "Enter your name",
    bodyPlaceholder: "Write a birthday message",

    submitting: "Saving...",
    submitEdit: "Save Changes",
    submitNew: "Send Message",
    cancelEdit: "Cancel",

    notice: [
      "⚠️ Once you leave or refresh this page, you won’t be able to see your message again.",
      "Your message is private and will not be visible to other guests.",
    ],

    myTitle: "My Birthday Message 🧡",
    myHint: "Only messages written during this visit will appear here.",
    empty: "No messages yet.",

    deleteConfirm: "Delete this message?",
    cancel: "Cancel",
    deleting: "Deleting...",
    deleteSure: "Delete",
    edit: "Edit",
    delete: "Delete",

    errorGeneric: "Something went wrong.",
    errorSave: "Failed to save the message.",
    errorUpdate: "Failed to update the message.",
    errorDelete: "Failed to delete the message.",
  },

  gallery: {
    title: "Photo Album",
    description: "A glimpse into Luna & Lumi’s precious moments.",
    enlarge: "View larger photo",
    alt: "Luna & Lumi",
    lightbox: "Enlarged photo",
    close: "Close",
    prev: "Previous photo",
    next: "Next photo",
  },

  countdown: {
    title: "Until Adulthood",
    description: "Until the day Luna and Lumi turn 18",
    done: "They’re all grown up 🎉",
    years: "Years",
    days: "Days",
    hours: "Hours",
    minutes: "Minutes",
    seconds: "Seconds",
  },

  footer: {
    title: "Luna & Lumi's First Birthday",
    top: "Back to Top ↑",
  },

  lang: {
    ko: "KO",
    en: "EN",
    label: "Language",
  },

  api: {
    badRequest: "Invalid request.",
    forbidden: "You don't have permission.",
    required: "Please enter your name and a message.",
    length: "Please check the character limit.",
    notFound: "Message not found or you don't have permission.",
    updateFailed: "Failed to update the message.",
    deleteFailed: "Failed to delete the message.",
    saveFailed: "Failed to save the message.",
  },
};

export type Dictionary = typeof ko;

const dictionaries = { ko, en } satisfies Record<Locale, Dictionary>;

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}

export function formatMessageDate(iso: string, locale: Locale) {
  const date = new Date(iso);
  if (locale === "en") {
    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "2-digit",
    }).format(date);
  }

  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hours = date.getHours();
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const period = hours < 12 ? "오전" : "오후";
  const hour12 = hours % 12 || 12;
  return `${year}년 ${month}월 ${day}일 ${period} ${hour12}:${minutes}`;
}
