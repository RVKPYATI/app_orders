import { format } from "date-fns";
import Image from "next/image";
import { useState } from "react";

import { Button } from "@/ui/Button/Button";

import { fetcher } from "@/utils/helpers";

import loader from "../../assets/loader.svg";
import iconTelegram from "../../assets/telegram.svg";

import { ReportTemplate } from "./ReportTemplate";

export function ReportsTable({ dataReports, days, loading }) {
  const [loadTelegram, setLoadTelegram] = useState(false);
  if (loading)
    return (
      <Image
        className="mx-auto"
        src={loader}
        alt="loading"
      />
    );

  if (dataReports?.orders.length === 0)
    return <div className="reports_table">На выбранные даты нет заказов</div>;

  if (dataReports) {
    const { orders, allInfo } = dataReports;
    const ordersOren = orders.filter(obj => obj.direction === "Оренбург-Уфа");
    const ordersUfa = orders.filter(obj => obj.direction === "Уфа-Оренбург");
    const dataToReports = {
      startDay: format(new Date(days.startDate), "dd.MM.yyyy"),
      endDay: format(new Date(days.endDate), "dd.MM.yyyy"),
      allOrders: orders.length,
      allDirections: allInfo.allDirections,
      allSeats: allInfo.allSeats,
    };
    const sendData = async () => {
      setLoadTelegram(true);
      await fetcher("/api/orders", {
        method: "POST",
        body: JSON.stringify(dataToReports),
      });
      setLoadTelegram(false);
    };

    return (
      <div className="reports_table">
        <div className="mb-4">
          Всего заказов: <b>{orders.length}</b>
        </div>
        <table className="table-fixed">
          <thead className="border-b border-t">
            <tr>
              <th className="w-56 py-2 text-xs font-light">Дата</th>
              <th className="w-52 py-2 text-xs font-light">Направления</th>
              <th className="py-2 text-xs font-light">Кол-во мест</th>
              <th className="w-32 py-2 text-xs font-light">Статусы</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border-r py-2 text-center font-semibold">
                {`c ${format(
                  new Date(days.startDate),
                  "dd.MM.yyyy",
                )} по ${format(new Date(days.endDate), "dd.MM.yyyy")} г.`}
              </td>
              <td className="py-2 text-center font-semibold">
                {allInfo.allDirections}
              </td>
              <td className="py-2 text-center font-semibold">
                {allInfo.allSeats}
              </td>
              <td className="w-32 py-2 text-center">
                <div>
                  <p>
                    Получено:<b>{allInfo.statusCounts.RECEIVED}</b>
                  </p>
                  <p>
                    Выполнено: <b>{allInfo.statusCounts.COMPLETED ?? 0}</b>
                  </p>
                  <p>
                    Отменено: <b>{allInfo.statusCounts.CANCELED ?? 0}</b>
                  </p>
                </div>
              </td>
            </tr>
          </tbody>
        </table>

        <Button
          style="w-50 h-12 text-sm py-1"
          onClick={sendData}
        >
          <div className="flex gap-1">
            {loadTelegram ? (
              <Image
                width={24}
                src={loader}
                alt="loading"
              />
            ) : (
              "Отправить в telegram"
            )}
            <Image
              width={24}
              src={iconTelegram}
              alt="dd"
            />
          </div>
        </Button>
        <div className="mb-6 mt-6"></div>
        <ReportTemplate data={orders} />
        <div className="mb-6 mt-6  font-semibold">По направлениям</div>
        <div className="mb-2 mt-6  divide-gray-400 border font-semibold italic">
          Оренбург-Уфа
        </div>
        <ReportTemplate data={ordersOren} />
        <div className=" mb-2  mt-6 border font-semibold italic">
          Уфа-Оренбург
        </div>
        <ReportTemplate data={ordersUfa} />
      </div>
    );
  }
}
