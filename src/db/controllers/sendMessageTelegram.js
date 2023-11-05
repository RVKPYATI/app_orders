import TelegramBot from "node-telegram-bot-api";

import { CHAT_ID } from "@/constants/constants";

export async function sendMessageTelegram(body) {
  const bot = new TelegramBot(process.env.TELEGRAM_TOKEN);

  const results = `<b>Отчет по заказам</b>
  <u>Даты: с ${body.startDay} по ${body.endDay}</u>
  Всего заказов: <b>${body.allOrders}</b>
  По направлениям: <b>${body.allDirections}</b>
  Всего мест: <b>${body.allSeats}</b>
  `;

  bot.sendMessage(CHAT_ID, results, {
    parse_mode: "HTML",
  });
}
