import { format } from "date-fns";
import { ru } from "date-fns/locale";
import { ArrowLeftCircle } from "lucide-react";

import { TableFirst } from "@/components/MainTable/TableFirst/TableFirst";

export function MainTable({ filteredOrders, days, mainWindow }) {
  const sortedDays = [...days].sort((a, b) => a - b);

  return (
    <>
      <ArrowLeftCircle
        className="absolute z-10 translate-x-48 translate-y-8 cursor-pointer text-baseColor hover:text-gray-400"
        onClick={() => mainWindow(true)}
        size={40}
      ></ArrowLeftCircle>
      <div className="mt-3 flex flex-col items-center">
        {sortedDays.map(day => (
          <>
            <SelectedDay
              key={"selected" + day}
              day={day}
            />
            <TableFirst
              filteredOrders={filteredOrders}
              day={day}
            />
          </>
        ))}
      </div>
    </>
  );
}

function splitDay(date) {
  const splitedDay = [];
  const dateDay = date.split(" ")[0];
  const dateMonth = date.split(" ")[1];
  splitedDay.push(dateDay, dateMonth);
  return splitedDay;
}

function SelectedDay({ day }) {
  return (
    <p className="mt-8 text-2xl font-thin text-baseColor">
      <span className="font-irish text-3xl font-normal">
        {splitDay(format(day, "d MMMM", { locale: ru }))[0]}&nbsp;
      </span>
      {splitDay(format(day, "d MMMM", { locale: ru }))[1]}
    </p>
  );
}
