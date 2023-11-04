import { addMonths, endOfMonth, startOfMonth } from "date-fns";

import { statusesWithIcons } from "@/constants/constants";

export function getStatusIcon(sts) {
  const statusesArray = sts.split(" ");

  if (statusesArray.length === 0) {
    return null;
  }

  if (statusesArray.length === 1) {
    return statusesWithIcons[statusesArray.join("")];
  }

  const statusesArrayUnique = [...new Set(statusesArray)];
  const statusesIcons = statusesArrayUnique.map(
    status => statusesWithIcons[status],
  );
  return statusesIcons;
}

export function getStatuses(sts) {
  return sts.map(order => order.status).join(" ");
}

export const fetcher = (...args) => fetch(...args).then(res => res.json());

export function findUniqueObjects(arr1, arr2) {
  const uniqueObjects = arr1.filter(
    obj1 => !arr2.some(obj2 => obj1.order_id === obj2.order_id),
  );

  return uniqueObjects;
}

export function getDateRange() {
  const currentDay = new Date();

  const firstDayOfMonth = startOfMonth(currentDay);
  const nextMonthDate = addMonths(currentDay, 1); // Добавляем один месяц
  const lastDayOfNextMonth = endOfMonth(nextMonthDate); // Получаем последний день следующего месяца

  return {
    firstDayOfMonth: firstDayOfMonth,
    lastDayOfNextMonth: lastDayOfNextMonth,
  };
}

export function getNameStatuses(status) {
  if (status === "RECEIVED") return "Получен";
  if (status === "COMPLETED") return "Выполнен";
  if (status === "CANCELED") return "Отменен";
}
