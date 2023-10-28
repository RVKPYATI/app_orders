import { format } from "date-fns";
import { ru } from "date-fns/locale";
import { ArrowLeftCircle } from "lucide-react";

export function MainTable({ filteredOrders, days, main }) {
  const sortedDays = [...days].sort((a, b) => a - b);

  return (
    <>
      <ArrowLeftCircle
        className="absolute z-10 translate-x-48 translate-y-8 cursor-pointer text-baseColor hover:text-gray-400"
        onClick={() => main(true)}
        size={40}
      >
        MainTable
      </ArrowLeftCircle>
      <div className="mt-8 flex flex-col items-center gap-8">
        {sortedDays.map(day => (
          <div
            className="daysd"
            key={day}
          >
            <p className="text-2xl font-thin text-baseColor">
              <span className="font-irish text-3xl font-normal">
                {splitDay(format(day, "d MMMM", { locale: ru }))[0]}&nbsp;
              </span>
              {splitDay(format(day, "d MMMM", { locale: ru }))[1]}
            </p>
          </div>
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
