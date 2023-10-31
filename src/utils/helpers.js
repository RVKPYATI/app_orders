import { addMonths, endOfMonth, startOfMonth } from "date-fns";

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
