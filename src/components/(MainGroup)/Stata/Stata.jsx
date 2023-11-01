import { format, startOfToday } from "date-fns";
import { ru } from "date-fns/locale";

import { statuses } from "@/constants/constants";

export function Stata({ orders, filteredOrders }) {
  const today = format(startOfToday(), "d MMMM", { locale: ru });
  const todayDay = today.split(" ")[0];
  const todayMoth = today.split(" ")[1];

  const receivedOrders = filteredOrders.filter(
    order => order.status === statuses[0],
  );
  const completedOrders = filteredOrders.filter(
    order => order.status === statuses[1],
  );
  const canceledOrders = filteredOrders.filter(
    order => order.status === statuses[2],
  );

  return (
    <div className="stata flex max-h-full w-[40%] flex-col bg-baseColor/0">
      <div className="stata__text mb-4 mt-1 flex font-inter text-4xl font-thin text-baseColor">
        <p className="w-1/2 text-3xl ">Сегодня:</p>
        <p className="w-1/2 text-end">
          <span className="font-irish">{todayDay}&nbsp;</span>
          {todayMoth}
        </p>
      </div>
      <div className="divider mb-2 h-[1px] w-full bg-gradient-to-r from-transparent via-gray-500"></div>
      <div className="stata__text mb-3 mt-1 flex font-inter text-2xl font-thin text-baseColor">
        <p className="w-1/2 ">Всего заявок:</p>
        <p className="w-1/2 pl-8 text-center font-irish text-4xl">{orders}</p>
      </div>
      <div className="divider mb-2 h-[1px] w-full bg-gradient-to-r from-transparent via-gray-500"></div>
      <div className="stata__text mb-3 mt-1 flex font-inter text-2xl font-thin text-baseColor">
        <p className="w-1/2 leading-none">Заявок на даты, из них:</p>
        <p className="w-1/2 pl-8 text-center font-irish text-4xl">
          {filteredOrders?.length > 0 ? filteredOrders.length : "-"}
        </p>
      </div>
      <div className="divider mb-2 h-[1px] w-full bg-gradient-to-r from-transparent via-gray-500"></div>
      <div className="stata__text mb-2 mt-1 flex font-inter text-2xl font-thin text-baseColor">
        <p className="w-1/2 pl-8 leading-none">Получен</p>
        <p className="w-1/2 pl-8 text-center font-irish text-3xl leading-none">
          {receivedOrders?.length > 0 ? receivedOrders?.length : "-"}
        </p>
      </div>
      <div className="stata__text mb-1 mt-1 flex font-inter text-2xl font-thin text-baseColor">
        <p className="w-1/2 pl-8 leading-none">Выполнен</p>
        <p className="w-1/2 pl-8 text-center font-irish text-3xl">
          {completedOrders?.length > 0 ? completedOrders?.length : "-"}
        </p>
      </div>
      <div className="stata__text mb-8 mt-1 flex font-inter text-2xl font-thin text-baseColor">
        <p className="w-1/2 pl-8 leading-none">Отменен</p>
        <p className="w-1/2 pl-8 text-center font-irish text-3xl">
          {canceledOrders?.length > 0 ? canceledOrders?.length : "-"}
        </p>
      </div>
    </div>
  );
}
