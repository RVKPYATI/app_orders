import { CheckCircle, HelpCircle, XCircle } from "lucide-react";

export const timeRange = ["06", "09", "12", "15", "18", "21", "23"];

export const GOOGLE_SHEATS_URI =
  "https://script.google.com/macros/s/AKfycbwAOKVD8BgDmItjzafp-aCmdvrxA5p2N0XkYOFrJd7kNSG6elgSa1Vbjl0kjhyAU25g/exec";

export const statuses = ["Получен", "Выполнен", "Отменен"];

export const statusesWithIcons = {
  Получен: (
    <HelpCircle
      color={"blue"}
      size={20}
      className={"mt-1"}
    />
  ),
  Выполнен: (
    <CheckCircle
      color={"green"}
      size={20}
      className={"mt-1"}
    />
  ),
  Отменен: (
    <XCircle
      color={"red"}
      size={20}
      className={"mt-1"}
    />
  ),
};

export const statusesWithIconsCopy = {
  Получен: "❓",
  Выполнен: "✅",
  Отменен: "⛔️",
};

export const buttons = [
  { src: "/logo.png", link: "", alt: "logo" },
  { src: "/dispatcher.png", link: "", alt: "dispatcher" },
  { src: "/telegram.png", link: "", alt: "telegram" },
  { src: "/whatsapp.png", link: "", alt: "whatsapp" },
];

export const direction = ["Оренбург-Уфа", "Уфа-Оренбург"];
