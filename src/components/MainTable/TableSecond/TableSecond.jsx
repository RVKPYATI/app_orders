import { format } from "date-fns";
import { ru } from "date-fns/locale";

import { TableSecondRow } from "./TableSecondRow";

export function TableSecond({ orders }) {
  const titleObj = orders[0];
  const titleDay = format(new Date(titleObj?.date), "d MMMM", { locale: ru });

  return (
    <div className="modal__wrapper h-full w-full ">
      <div className="table__title mb-5 flex h-8 w-full items-center justify-evenly pr-14 text-4xl">
        <p>{titleObj?.direction}</p>
        <p className="font-irish text-6xl font-semibold">{titleObj?.time}</p>
        <p>{titleDay}</p>
      </div>
      <div className="divider mb-4 h-[1px] w-full bg-gray-200"></div>
      <table className="mb-2 table w-full table-fixed border-collapse text-xs font-light">
        <HeaderColumn />
        <tbody>
          {orders.map(order => (
            <TableSecondRow
              key={order.order_id}
              order={order}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

function HeaderColumn() {
  return (
    <thead>
      <tr className="w-full bg-indigo-300">
        <th className="w-20 py-2 leading-none">Услуга</th>
        <th className="table__header w-16">Мест</th>
        <th className="table__header">Куда</th>
        <th className="table__header">Забирать</th>
        <th className="table__header">Имя</th>
        <th className="table__header">Контакты</th>
        <th className="table__header">Комментари</th>
        <th className="py-2 leading-none">Статус</th>
      </tr>
    </thead>
  );
}
