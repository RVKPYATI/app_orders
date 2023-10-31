"use client";

import { useState } from "react";

import { Modal } from "@/ui/Modal/Modal";

import { direction } from "@/constants/constants";

import { getStatusIcon, getStatuses } from "@/utils/helpers";

export function TableFirstRow({ orders, time }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredOrdersByTime = orders.filter(
    order => order.time.split(":")[0] === time,
  );
  const filteredOrdersByTimeLeft = filteredOrdersByTime.filter(
    order => order.direction === direction[0],
  );
  const filteredOrdersByTimeRight = filteredOrdersByTime.filter(
    order => order.direction === direction[1],
  );

  const openModal = ordersModal => {
    setIsModalOpen(true);
    console.log(ordersModal);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleClickLeft = orders => {
    openModal(orders);
  };
  const handleClickRight = orders => {
    openModal(orders);
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
        {/* <RowLeft
          time={time}
          ordersLeft={filteredOrdersByTimeLeft}
          key={"left" + time}
          onClickRow={handleClickLeft}
          ref={refLeft}
        /> */}
        {filteredOrdersByTimeLeft.length === 0 && <EmptyCell />}
        {filteredOrdersByTimeLeft.length === 1 && (
          <>
            <td
              className="table__cell cursor-pointer font-irish text-base"
              onClick={() => handleClickLeft(filteredOrdersByTimeLeft)}
            >
              {filteredOrdersByTimeLeft.length}
            </td>
            <td
              className="flex cursor-pointer items-center justify-center gap-1"
              onClick={() => handleClickLeft(filteredOrdersByTimeLeft)}
            >
              {getStatusIcon(filteredOrdersByTimeLeft[0].status)}
            </td>
          </>
        )}
        {filteredOrdersByTimeLeft.length > 1 && (
          <>
            <td
              className="table__cell cursor-pointer font-irish text-base"
              onClick={() => handleClickLeft(filteredOrdersByTimeLeft)}
            >
              {filteredOrdersByTimeLeft.length}
            </td>
            <td
              className="flex cursor-pointer items-center justify-center gap-1"
              onClick={() => handleClickLeft(filteredOrdersByTimeLeft)}
            >
              {getStatusIcon(getStatuses(filteredOrdersByTimeLeft))}
            </td>
          </>
        )}

        <td className="table__cell cursor-pointer text-center font-irish text-lg">
          {time}
        </td>

        {filteredOrdersByTimeRight.length === 0 && <EmptyCell />}
        {filteredOrdersByTimeRight.length === 1 && (
          <>
            <td
              className="table__cell cursor-pointer font-irish text-base"
              onClick={() => handleClickRight(filteredOrdersByTimeRight)}
            >
              {filteredOrdersByTimeRight.length}
            </td>
            <td
              className="flex cursor-pointer items-center justify-center gap-1"
              onClick={() => handleClickRight(filteredOrdersByTimeRight)}
            >
              {getStatusIcon(filteredOrdersByTimeRight[0].status)}
            </td>
          </>
        )}
        {filteredOrdersByTimeRight.length > 1 && (
          <>
            <td
              className="table__cell cursor-pointer font-irish text-base"
              onClick={() => handleClickRight(filteredOrdersByTimeRight)}
            >
              {filteredOrdersByTimeRight.length}
            </td>
            <td
              className="flex cursor-pointer items-center justify-center gap-1"
              onClick={() => handleClickRight(filteredOrdersByTimeRight)}
            >
              {getStatusIcon(getStatuses(filteredOrdersByTimeRight))}
            </td>
          </>
        )}
        {/* <RowRigth
          time={time}
          ordersRight={filteredOrdersByTimeRight}
          key={time + "right" + time}
          ref={refRight}
        /> */}
      </tr>
    </>
  );
}

function RowLeft({ ordersLeft, onClickRow }) {
  if (ordersLeft.length === 0)
    return (
      <>
        <td
          className="table__cell hover:cursor-pointer"
          onClick={onClickRow}
        >
          {" "}
        </td>
        <td
          className="table__cell cursor-pointer"
          key={"second_cell_left_empty"}
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
        <td
          className="table__cell"
          key={"first_cell_rigth_empty"}
        >
          {" "}
        </td>
        <td> </td>
      </>
    );
  const statusList =
    ordersRight.length > 1
      ? getStatusIcon(ordersRight.map(order => order.status).join(" "))
      : getStatusIcon(ordersRight[0].status);

  return (
    <>
      <td
        className="table__cell font-irish text-base "
        key={"first_cell_rigth"}
      >
        {ordersRight.length}
      </td>
      <td
        className="flex items-center justify-center gap-1 text-center"
        key={"second_cell_rigth"}
      >
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

function EmptyCell() {
  return (
    <>
      <td className="table__cell"></td>
      <td className="table__cell"></td>
    </>
  );
}
