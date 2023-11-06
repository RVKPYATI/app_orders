"use client";

import { addDays, format, parseISO, subDays } from "date-fns";
import { Home } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import { Button } from "@/ui/Button/Button";

import { ORDERS_URI } from "@/constants/constants";

import { fetcher } from "@/utils/helpers";

import { ReportsTable } from "./ReportsTable";

export function ReportsFilter() {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [dataReports, setDataReports] = useState();
  const [loading, setLoading] = useState(false);
  const [dayRange, setDayRange] = useState();

  const handleDateOptionClick = daysAgo => {
    const today = new Date();
    const dateDaysAgo = subDays(today, daysAgo);
    const endData =
      daysAgo === 1 ? subDays(today, daysAgo) : addDays(dateDaysAgo, daysAgo);

    const formattedDate = dateDaysAgo.toISOString().slice(0, 10);
    const formattedDateEnd = endData.toISOString().slice(0, 10);

    setStartDate(formattedDate);
    setEndDate(formattedDateEnd);
  };
  const handleSubmit = async () => {
    if (startDate && endDate) {
      const start = startDate.replace(/-/g, ".");

      const end = format(addDays(parseISO(endDate), 1), "yyyy-MM-dd").replace(
        /-/g,
        ".",
      );
      setLoading(true);
      const data = await fetcher(
        ORDERS_URI + `?dateStart=${start}&&dateEnd=${end}`,
      );
      setLoading(false);
      setDataReports(data);
      setDayRange({ startDate: startDate, endDate: endDate });
    }
  };

  return (
    <>
      <div className="reports_filter glass">
        <div className="p-3">
          <div className="flex justify-between pl-4">
            <h2 className="mb-3 text-2xl font-bold text-baseColor">
              Статистика по заказам
            </h2>
            <Link href="/">
              <Home className="text-gray-400 hover:text-gray-200" />
            </Link>
          </div>
          <div className="mb-3 flex gap-5 rounded-md text-gray-600">
            <div className="flex items-end gap-2">
              <span className="text-gray-200">c</span>
              <input
                className="appearance-none rounded-md border p-1 "
                type="date"
                name="start_date"
                id="start_date"
                value={startDate}
                onChange={e => setStartDate(e.target.value)}
              />
            </div>
            <div className="flex items-end gap-2">
              <span className="text-gray-200">по</span>
              <input
                className="appearance-none rounded-md border p-1"
                type="date"
                id="end_date"
                value={endDate}
                onChange={e => setEndDate(e.target.value)}
              />
            </div>
          </div>
          <div className="font-sm mb-3 flex cursor-pointer gap-2 pl-4 leading-6 text-gray-200 ">
            <div
              className=" underline underline-offset-8 hover:text-badgeLight"
              onClick={() => handleDateOptionClick(1)}
            >
              Вчера
            </div>
            <div
              className="underline underline-offset-8 hover:text-badgeLight"
              onClick={() => handleDateOptionClick(0)}
            >
              Сегодня
            </div>
            <div
              className="underline underline-offset-8 hover:text-badgeLight"
              onClick={() => handleDateOptionClick(7)}
            >
              7 дней
            </div>
            <div
              className="underline underline-offset-8 hover:text-badgeLight"
              onClick={() => handleDateOptionClick(30)}
            >
              30 дней
            </div>
          </div>
        </div>
        <div className="mb-2 rounded-bl-lg rounded-br-lg p-3">
          <Button
            disabled={startDate === ""}
            title="Показать"
            style={
              startDate === ""
                ? "bg-gray-300 w-40 h-10 text-xl py-1 leading-none ml-4"
                : "w-40 h-10 text-xl py-1 leading-none ml-4"
            }
            onClick={handleSubmit}
          />
        </div>
      </div>
      <ReportsTable
        dataReports={dataReports}
        days={dayRange}
        loading={loading}
      />
    </>
  );
}
