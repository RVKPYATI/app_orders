import { CheckCircle, HelpCircle, XCircle } from "lucide-react";

export const timeRange = ["06", "09", "12", "15", "18", "21", "23"];

export const GOOGLE_SHEATS_URI =
  "https://script.google.com/macros/s/AKfycbyTz_Suw9C4Fo-fX_fxz8Lps7Tqvel5ZkHg3bYOkeKhidW4lz_xI8ferWqoPsrPY94C/exec";

export const ORDERS_URI = "/api/orders";
export const CHAT_ID = "-4010766583";
export const statuses = ["RECEIVED", "COMPLETED", "CANCELED"];

export const statusesWithIcons = {
  RECEIVED: (
    <HelpCircle
      color={"blue"}
      size={20}
      className={"mt-1"}
    />
  ),
  COMPLETED: (
    <CheckCircle
      color={"green"}
      size={20}
      className={"mt-1"}
    />
  ),
  CANCELED: (
    <XCircle
      color={"red"}
      size={20}
      className={"mt-1"}
    />
  ),
};

export const buttons = [
  { src: "/logo.png", link: "", alt: "logo" },
  { src: "/dispatcher.png", link: "", alt: "dispatcher" },
  { src: "/telegram.png", link: "", alt: "telegram" },
  { src: "/whatsapp.png", link: "", alt: "whatsapp" },
];

export const direction = ["Оренбург-Уфа", "Уфа-Оренбург"];
