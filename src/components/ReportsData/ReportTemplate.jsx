import { format } from "date-fns";

import { getNameStatuses } from "@/utils/helpers";

export function ReportTemplate({ data }) {
  let countOrders = 0;
  let countSeats = 0;
  if (data.length === 0) return <h2>По данному направлению нет заказов</h2>;
  return (
    <table className="table-fixed">
      <thead className="border-b border-t ">
        <tr>
          <th className="w-56 py-2 text-xs font-light">Дата</th>
          <th className="w-52 py-2 text-xs font-light">Направление</th>
          <th className="py-2 text-xs font-light">Кол-во мест</th>
          <th className="w-32 py-2 text-xs font-light">Статус</th>
        </tr>
      </thead>
      <tbody>
        {data.map((order, i) => {
          countOrders++;
          countSeats = countSeats + order.seats;

          return (
            <tr
              key={order.id}
              className={i % 2 === 0 ? "bg-white" : "bg-slate-300"}
            >
              <td className="py-1 text-center">
                {format(new Date(order.date), "dd.MM.yyyy")}
              </td>
              <td className="py-1 text-center">{order.direction}</td>
              <td className="py-1 text-center">{order.seats}</td>
              <td className="w-32 py-1 text-center">
                {getNameStatuses(order.status)}
              </td>
            </tr>
          );
        })}
        <tr className="bg-borderColor">
          <td>
            <b>Итого:</b>
          </td>
          <td>
            Количество заказов: <b>{countOrders}</b>
          </td>
          <td>
            Мест: <b>{countSeats}</b>
          </td>
          <td></td>
        </tr>
      </tbody>
    </table>
  );
}
