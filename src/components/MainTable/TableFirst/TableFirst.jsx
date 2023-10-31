"use client";

import { timeRange } from "@/constants/constants";

import { TableFirstRow } from "./TableFirstRow";

export function TableFirst({ filteredOrders, day }) {
  const dayString = day.toString();
  const filteredOrdersByDay = filteredOrders.filter(
    order => order.date === dayString,
  );
  return (
    <>
      <Direction />
      <table className="mb-2 w-[68%] table-fixed text-xs font-light">
        <HeaderColumn />
        <tbody>
          {filteredOrdersByDay.length > 0 ? (
            timeRange.map((time, i) => (
              <TableFirstRow
                key={i}
                orders={filteredOrdersByDay}
                time={time}
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
        <th className="table__header">Статусы</th>
        <th className="table__header w-20">Диапазон</th>
        <th className="table__header">Количество</th>
        <th className="py-2 leading-none">Статусы</th>
      </tr>
    </thead>
  );
}

function NoOrders() {
  return (
    <tr className="bg-baseColor text-center">
      <td
        colSpan="5"
        className="py-2 leading-none"
      >
        Заказов нет
      </td>
    </tr>
  );
}
