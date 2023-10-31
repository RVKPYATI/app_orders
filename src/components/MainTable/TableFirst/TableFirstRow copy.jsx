"use client";

import { useRef, useState } from "react";

import { Modal } from "@/ui/Modal/Modal";

import { direction } from "@/constants/constants";

import { getStatusIcon } from "@/utils/helpers";

export function TableFirstRow({ orders, time }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  // const refLeft = useRef(null);

  const filteredOrdersByTime = orders.filter(
    order => order.time.split(":")[0] === time,
  );
  const filteredOrdersByTimeLeft = filteredOrdersByTime.filter(
    order => order.direction === direction[0],
  );
  const filteredOrdersByTimeRight = filteredOrdersByTime.filter(
    order => order.direction === direction[1],
  );

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleClickLeft = () => {
    openModal();
  };

  if (filteredOrdersByTime.length === 0) return <EmptyRow time={time} />;

  return (
    <>
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
      ></Modal>
      <tr
        className="text-center text-base font-bold odd:bg-white even:bg-slate-200"
        key={time + "row" + time}
        // onClick={handleClickLeft}
      >
        <RowLeft
          time={time}
          ordersLeft={filteredOrdersByTimeLeft}
          key={"left" + time}
          onClick={() => handleClickLeft()}
        />
        <td className="table__cell text-center font-irish text-lg">{time}</td>
        <RowRigth
          time={time}
          ordersRight={filteredOrdersByTimeRight}
          key={time + "right" + time}
        />
      </tr>
    </>
  );
}

function RowLeft({ ordersLeft, onClick }) {
  if (ordersLeft.length === 0)
    return (
      <>
        <td
          className="table__cell hover:cursor-pointer"
          role="button"
          tabIndex="0"
          // ref={refLeft}
          onClick={onClick}
        >
          {" "}
        </td>
        <td
          className="table__cell hover:cursor-pointer"
          onClick={onClick}
        >
          {" "}
        </td>
      </>
    );
  const statusList =
    ordersLeft.length > 1
      ? getStatusIcon(ordersLeft.map(order => order.status).join(" "))
      : getStatusIcon(ordersLeft[0].status);
  return (
    <>
      <td className="table__cell font-irish text-base">{ordersLeft.length}</td>
      <td className="flex items-center justify-center gap-1">{statusList}</td>
    </>
  );
}
function RowRigth({ ordersRight }) {
  if (ordersRight.length === 0)
    return (
      <>
        <td className="table__cell"> </td>
        <td> </td>
      </>
    );
  const statusList =
    ordersRight.length > 1
      ? getStatusIcon(ordersRight.map(order => order.status).join(" "))
      : getStatusIcon(ordersRight[0].status);

  return (
    <>
      <td className="table__cell font-irish text-base">{ordersRight.length}</td>
      <td className="flex items-center justify-center gap-1 text-center">
        {statusList}
      </td>
    </>
  );
}

function EmptyRow({ time }) {
  return (
    <tr className="text-center odd:bg-white even:bg-slate-200">
      <td className="table__cell"></td>
      <td className="table__cell"></td>
      <td className="table__cell font-irish text-lg">{time}</td>
      <td className="table__cell"></td>
      <td></td>
    </tr>
  );
}
