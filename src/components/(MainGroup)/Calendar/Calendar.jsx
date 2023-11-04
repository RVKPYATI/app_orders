"use client";

import {
  add,
  eachDayOfInterval,
  endOfMonth,
  format,
  getDay,
  isSameDay,
  isSameMonth,
  isToday,
  parse,
  startOfDay,
  startOfToday,
} from "date-fns";
import { ru } from "date-fns/locale";
import { ArrowLeftCircle, ArrowRightCircle } from "lucide-react";
import { useState } from "react";

import { Button } from "@/ui/Button/Button";

import { classNames } from "@/utils/utilites";

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

export function Calendar({ days, selectDays, orders, main }) {
  const today = startOfToday();
  const [currentMonth, setCurrentMonth] = useState(
    format(today, "MMM-yyyy", { locale: ru }),
  );
  const [blockLeftArrow, setBlockLeftArrow] = useState(true);
  const [blockRightArrow, setBlockRightArrow] = useState(false);

  const firstDayCurrentMonth = parse(currentMonth, "MMM-yyyy", new Date(), {
    locale: ru,
  });

  const daysArray = eachDayOfInterval({
    start: firstDayCurrentMonth,
    end: endOfMonth(firstDayCurrentMonth),
  });

  function previousMonth() {
    const firstDayNextMonth = add(firstDayCurrentMonth, { months: -1 });
    setCurrentMonth(format(firstDayNextMonth, "MMM-yyyy", { locale: ru }));
    setBlockLeftArrow(true);
    setBlockRightArrow(false);
  }

  function nextMonth() {
    const firstDayNextMonth = add(firstDayCurrentMonth, { months: 1 });
    setCurrentMonth(format(firstDayNextMonth, "MMM-yyyy", { locale: ru }));
    setBlockLeftArrow(false);
    setBlockRightArrow(true);
  }

  function toggleSelectedDay(day) {
    selectDays(prevSelectedDays => {
      if (prevSelectedDays.some(d => isSameDay(d, day))) {
        return prevSelectedDays.filter(d => !isSameDay(d, day));
      } else {
        return [...prevSelectedDays, day];
      }
    });
  }

  function countTripsForDate(date) {
    return orders.filter(
      order =>
        format(new Date(order.date), "dd-MM-yyyy") ===
        format(date, "dd-MM-yyyy"),
    ).length;
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
    <div className="flex flex-col items-center pt-2">
      <Button
        title={"Заявки"}
        style={`btn mx-auto mb-6 `}
        onClick={() => main(false)}
        disabled={days.length > 0 ? false : true}
      />
      <div className="glass mx-auto max-w-md border-4 border-badgeLight bg-baseColor/80 px-4 shadow-xl sm:px-7 md:max-w-4xl md:px-6">
        <div className="">
          <div className="flex items-center pt-3">
            <h2 className="flex-auto text-lg font-semibold text-baseColor">
              {format(firstDayCurrentMonth, "MMMM yyyy", {
                locale: ru,
              }).replace(currentMonthOnly, localize[currentMonthOnly])}
            </h2>
            <button
              type="button"
              onClick={previousMonth}
              className={classNames(
                blockLeftArrow && "hidden",
                "-my-1.5 flex flex-none items-center justify-center p-1.5 text-baseColor hover:text-gray-300",
              )}
            >
              <span className="sr-only">Previous month</span>
              <ArrowLeftCircle
                className="h-5 w-5"
                aria-hidden="true"
              />
            </button>
            <button
              onClick={nextMonth}
              type="button"
              className={classNames(
                blockRightArrow && "hidden",
                "-my-1.5 flex flex-none items-center justify-center p-1.5 text-baseColor/50 hover:text-gray-300",
              )}
            >
              <span className="sr-only">Next month</span>
              <ArrowRightCircle
                className="h-5 w-5"
                aria-hidden="true"
              />
            </button>
          </div>
          <div className="mt-6 grid grid-cols-7 text-center text-xs leading-6 text-baseColor">
            <div>Пн</div>
            <div>Вт</div>
            <div>Ср</div>
            <div>Чт</div>
            <div>Пт</div>
            <div className="font-bold text-red-500">Сб</div>
            <div className="font-bold text-red-500">Вс</div>
          </div>
          <div className="mt-2 grid grid-cols-7 text-sm ">
            {daysArray.map((day, dayIdx) => (
              <div
                key={day.toString()}
                className={classNames(
                  dayIdx === 0 && colStartClasses[getDay(day)],
                  "relative",
                )}
              >
                <button
                  type="button"
                  onClick={() => toggleSelectedDay(day)}
                  className={classNames(
                    days.some(d => isSameDay(d, day)) && "text-white",
                    !days.some(d => isSameDay(d, day)) &&
                      isToday(day) &&
                      "font-extrabold text-red-500 underline",
                    !days.some(d => isSameDay(d, day)) &&
                      !isToday(day) &&
                      isSameMonth(day, firstDayCurrentMonth) &&
                      "text-baseColor/50 hover:text-gray-900",
                    !days.some(d => isSameDay(d, day)) &&
                      !isToday(day) &&
                      !isSameMonth(day, firstDayCurrentMonth) &&
                      "text-gray-400",
                    days.some(d => isSameDay(d, day)) &&
                      isToday(day) &&
                      "bg-blue-950",
                    days.some(d => isSameDay(d, day)) &&
                      !isToday(day) &&
                      "bg-blue-950",
                    !days.some(d => isSameDay(d, day)) && "hover:bg-gray-200",
                    (days.some(d => isSameDay(d, day)) || isToday(day)) &&
                      "font-semibold",
                    "mx-auto flex h-8 w-8 items-center justify-center rounded-full",
                  )}
                >
                  <time dateTime={format(day, "yyyy-MM-dd")}>
                    {format(day, "d")}
                  </time>
                </button>

                <div className="absolute -right-1 -top-1 mx-auto">
                  {orders.some(order =>
                    isSameDay(startOfDay(new Date(order.date)), day),
                  ) && (
                    <div className="flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] leading-none text-white">
                      {countTripsForDate(day)}
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
