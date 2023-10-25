"use client";

import {
  add,
  eachDayOfInterval,
  endOfMonth,
  format,
  getDay,
  isEqual,
  isSameDay,
  isSameMonth,
  isToday,
  parse,
  parseISO,
  startOfToday,
} from "date-fns";
import { ru } from "date-fns/locale";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const clients = [
  {
    id: 1,
    name: "Ольга Петрова",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    date: "2023-10-11T13:00",
    direction: "Оренбург-Уфа",
  },
  {
    id: 2,
    name: "Семенов Семен",
    imageUrl:
      "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    date: "2023-10-20T09:00",
    direction: "Оренбург-Уфа",
  },
  {
    id: 3,
    name: "Андреев Андрей",
    imageUrl:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    date: "2023-10-20T17:00",
    direction: "Уфа-Оренбург",
  },
  {
    id: 4,
    name: "Ольга Петрова",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto.format&fit=facearea&facepad=2&w=256&h=256&q=80",
    date: "2023-10-20T13:00",
    direction: "Уфа-Оренбург",
  },
  {
    id: 5,
    name: "Семенов Семен",
    imageUrl:
      "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    date: "2023-10-13T14:00",
    direction: "Уфа-Оренбург",
  },
  {
    id: 6,
    name: "Ольга Петрова",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto.format&fit=facearea&facepad=2&w=256&h=256&q=80",
    date: "2023-10-21T13:00",
    direction: "Оренбург-Уфа",
  },
  {
    id: 7,
    name: "Семенов Семен",
    imageUrl:
      "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto.format&fit=facearea&facepad=2&w=256&h=256&q=80",
    date: "2023-10-21T14:00",
    direction: "Оренбург-Уфа",
  },
];

const localize = {
  января: "Январь",
  февраля: "Февраль",
  марта: "Март",
  апреля: "Апрель",
  мая: "Май",
  июня: "Июнь",
  июля: "Июль",
  августа: "Август",
  сентября: "Сентябрь",
  октября: "Октябрь",
  ноября: "Ноябрь",
  декабря: "Декабрь",
};

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export function Calendar() {
  const today = startOfToday();
  const [selectedDay, setSelectedDay] = useState(today);
  const [currentMonth, setCurrentMonth] = useState(
    format(today, "MMM-yyyy", { locale: ru }),
  );
  const firstDayCurrentMonth = parse(currentMonth, "MMM-yyyy", new Date(), {
    locale: ru,
  });

  const days = eachDayOfInterval({
    start: firstDayCurrentMonth,
    end: endOfMonth(firstDayCurrentMonth),
  });

  function previousMonth() {
    const firstDayNextMonth = add(firstDayCurrentMonth, { months: -1 });
    setCurrentMonth(format(firstDayNextMonth, "MMM-yyyy", { locale: ru }));
  }

  function nextMonth() {
    const firstDayNextMonth = add(firstDayCurrentMonth, { months: 1 });
    setCurrentMonth(format(firstDayNextMonth, "MMM-yyyy", { locale: ru }));
  }

  // const selectedDayClients = clients.filter(client =>
  //   isSameDay(parseISO(client.date), selectedDay),
  // );

  function countTripsForDate(date) {
    return clients.filter(client => client.date.split("T")[0] === date).length;
  }

  const currentMonthOnly = format(firstDayCurrentMonth, "MMMM", { locale: ru });

  const colStartClasses = [
    "col-start-7",
    "col-start-1",
    "col-start-2",
    "col-start-3",
    "col-start-4",
    "col-start-5",
    "col-start-6",
  ];

  return (
    <div className="pt-2">
      <div className="mx-auto max-w-md bg-baseColor/80 border-4 border-badgeLight px-4 shadow-xl sm:px-7 md:max-w-4xl md:px-6">
        <div className="">
          <div className="flex items-center pt-3">
            <h2 className="flex-auto text-lg font-semibold text-primaryHover">
              {format(firstDayCurrentMonth, "MMMM yyyy", {
                locale: ru,
              }).replace(currentMonthOnly, localize[currentMonthOnly])}
            </h2>
            <button
              type="button"
              onClick={previousMonth}
              className="-my-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only">Previous month</span>
              <ChevronLeft
                className="h-5 w-5"
                aria-hidden="true"
              />
            </button>
            <button
              onClick={nextMonth}
              type="button"
              className="-my-1.5 -mr-1.5 ml-2 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only">Next month</span>
              <ChevronRight
                className="h-5 w-5"
                aria-hidden="true"
              />
            </button>
          </div>
          <div className="mt-6 grid grid-cols-7 text-center text-xs leading-6 text-gray-900">
            <div>Пн</div>
            <div>Вт</div>
            <div>Ср</div>
            <div>Чт</div>
            <div>Пт</div>
            <div className="font-bold text-red-500">Сб</div>
            <div className="font-bold text-red-500">Вс</div>
          </div>
          <div className="mt-2 grid grid-cols-7 text-sm">
            {days.map((day, dayIdx) => (
              <div
                key={day.toString()}
                className={classNames(
                  dayIdx === 0 && colStartClasses[getDay(day)],
                  "relative",
                )}
              >
                <button
                  type="button"
                  onClick={() => setSelectedDay(day)}
                  className={classNames(
                    isEqual(day, selectedDay) && "text-white",
                    !isEqual(day, selectedDay) &&
                      isToday(day) &&
                      "font-extrabold text-red-500 underline",
                    !isEqual(day, selectedDay) &&
                      !isToday(day) &&
                      isSameMonth(day, firstDayCurrentMonth) &&
                      "text-gray-900",
                    !isEqual(day, selectedDay) &&
                      !isToday(day) &&
                      !isSameMonth(day, firstDayCurrentMonth) &&
                      "text-gray-400",
                    isEqual(day, selectedDay) && isToday(day) && "bg-gray-900",
                    isEqual(day, selectedDay) && !isToday(day) && "bg-gray-900",
                    !isEqual(day, selectedDay) && "hover:bg-gray-200",
                    (isEqual(day, selectedDay) || isToday(day)) &&
                      "font-semibold",
                    "mx-auto flex h-8 w-8 items-center justify-center rounded-full",
                  )}
                >
                  <time dateTime={format(day, "yyyy-MM-dd")}>
                    {format(day, "d")}
                  </time>
                </button>

                <div className="absolute -right-1 -top-1 mx-auto">
                  {clients.some(client =>
                    isSameDay(parseISO(client.date), day),
                  ) && (
                    <div className="flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] leading-none text-white">
                      {countTripsForDate(format(day, "yyyy-MM-dd"))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
