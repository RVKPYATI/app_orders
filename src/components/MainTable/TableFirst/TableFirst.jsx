"use client";

import { format } from "date-fns";
import { useState } from "react";

import { TableFirstRow } from "@/components/MainTable/TableFirst/TableFirstRow";
import { TableSecond } from "@/components/MainTable/TableSecond/TableSecond";

import { Modal } from "@/ui/Modal/Modal";

import { timeRange } from "@/constants/constants";

export function TableFirst({ filteredOrders, day }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState(false);

  const filteredOrdersByDay = filteredOrders.filter(
    order =>
      format(new Date(order.date), "dd-MM-yyyy") === format(day, "dd-MM-yyyy"),
  );

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
      >
        <TableSecond orders={modalData} />
      </Modal>
      <Direction />
      <table className="mb-2 w-[68%] table-fixed text-xs font-light">
        <HeaderColumn />
        <tbody>
          {filteredOrdersByDay.length > 0 ? (
            timeRange.map((time, i) => (
              <TableFirstRow
                key={`${i} tablerow` + `${time}`}
                orders={filteredOrdersByDay}
                time={time}
                indx={i}
                setModal={setIsModalOpen}
                setData={setModalData}
                modalData={modalData}
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
