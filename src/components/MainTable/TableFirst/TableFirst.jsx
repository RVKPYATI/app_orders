import { format } from "date-fns";

import { timeRange } from "@/constants/constants";

import { TableFirstRow } from "./TableFirstRow";

export function TableFirst({ filteredOrders, day }) {
  const dayString = day.toString();
  // console.log("dayString", dayString);
  // console.log("day", day);
  const filteredOrdersByDay = filteredOrders.filter(
    order =>
      format(new Date(order.date), "dd-MM-yyyy") === format(day, "dd-MM-yyyy"),
  );
  return (
    <>
      <Direction />
      <table className="mb-2 w-[68%] table-fixed text-xs font-light">
        <HeaderColumn />
        <tbody className="">
          {filteredOrdersByDay.length > 0 ? (
            timeRange.map((time, i) => (
              <TableFirstRow
                key={time + "header_column" + time}
                orders={filteredOrdersByDay}
                time={time}
                i={i}
              />
            ))
          ) : (
            <NoOrders />
          )}
        </tbody>
      </table>
    </>
  );
}

function Direction() {
  return (
    <div className="flex w-[68%] justify-between bg-primary py-2 md:py-0">
      <div className="flex w-[50%] items-center justify-center">
        <div className="text-3xl font-bold text-baseColor  md:text-base">
          <h1 className="text-shadow">Оренбург-Уфа</h1>
        </div>
      </div>
      <div className="flex w-[50%] items-center justify-center">
        <div className="text-3xl font-bold text-white md:text-base">
          <h1 className="text-shadow">Уфа-Оренбург</h1>
        </div>
      </div>
    </div>
  );
}

function HeaderColumn() {
  return (
    <thead>
      <tr className="w-[68%] bg-indigo-300">
        <th className="py-2 leading-none">Количество</th>
        <th className="border-borderColor border-l border-r py-2 leading-none">
          Статусы
        </th>
        <th className="border-borderColor w-20 border-l border-r py-2 leading-none">
          Диапазон
        </th>
        <th className="border-borderColor border-l border-r py-2 leading-none">
          Количество
        </th>
        <th className="py-2 leading-none">Статусы</th>
      </tr>
    </thead>
  );
}

function NoOrders() {
  return (
    <tr className="bg-indigo-100 text-center">
      <td
        colSpan="5"
        className="py-2 leading-none"
      >
        Заказов нет
      </td>
    </tr>
  );
}
