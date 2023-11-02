import { CheckCircle, HelpCircle, XCircle } from "lucide-react";

export const timeRange = [
  "06:00",
  "09:00",
  "12:00",
  "15:00",
  "18:00",
  "21:00",
  "23:00",
];

export const GOOGLE_SHEATS_URI =
  "https://script.google.com/macros/s/AKfycbyTz_Suw9C4Fo-fX_fxz8Lps7Tqvel5ZkHg3bYOkeKhidW4lz_xI8ferWqoPsrPY94C/exec";

export const ORDERS_URI = "/api/orders";
export const statuses = ["RECEIVED", "COMPLETED", "CANCELED"];

export function statusesWithIcons(size = 20) {
  return {
    RECEIVED: (
      <HelpCircle
        color={"blue"}
        size={size}
        className={"mt-1"}
      />
    ),
    COMPLETED: (
      <CheckCircle
        color={"green"}
        size={size}
        className={"mt-1"}
      />
    ),
    CANCELED: (
      <XCircle
        color={"red"}
        size={size}
        className={"mt-1"}
      />
    ),
  };
}

export const buttons = [
  { src: "/logo.png", link: "", alt: "logo" },
  { src: "/dispatcher.png", link: "", alt: "dispatcher" },
  { src: "/telegram.png", link: "", alt: "telegram" },
  { src: "/whatsapp.png", link: "", alt: "whatsapp" },
];

export const direction = ["Оренбург-Уфа", "Уфа-Оренбург"];
