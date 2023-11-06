"use client";

import { CheckCircle, ClipboardCopy, HelpCircle, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Flip, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { mutate } from "swr";

import { Button } from "@/ui/Button/Button";

import { ORDERS_URI } from "@/constants/constants";
import { statusesWithIcons } from "@/constants/constants";

export function TableSecondRow({ order }) {
  const [isRadioPopupOpen, setIsRadioPopupOpen] = useState(false);
  const [status, setStatus] = useState(order.status);
  const [selectedStatus, setSelectedStatus] = useState(order.status);
  const [isDisabledButton, setIsDisabledButton] = useState(true);
  const [isUpdating, setIsUpdating] = useState(false);
  const radioPopupRef = useRef(null);

  const templateMessage = `
✅  Заказ  ✅
------------------------
${order.direction},
${new Date(order.date).toLocaleDateString("ru-RU")}, ${order.time},
Мест: ${order.seats},
Забирать: ${order.place},
Куда: ${order.from},
${order.name === "" ? "без имени" : order.name},
${order.phone},
${order.comment},
  `;

  const openRadioPopup = () => {
    setIsRadioPopupOpen(true);
    setIsDisabledButton(false);
  };

  const closeRadioPopup = () => {
    setIsRadioPopupOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = event => {
      if (
        isRadioPopupOpen &&
        radioPopupRef.current &&
        !radioPopupRef.current.contains(event.target)
      ) {
        closeRadioPopup();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isRadioPopupOpen]);

  const handleRadioChange = e => {
    setSelectedStatus(e.target.value);
  };

  const getUpdateOrder = async () => {
    if (selectedStatus !== order.status) {
      try {
        setIsUpdating(true);
        setIsDisabledButton(true);
        const response = await fetch(`/api/orders/${order.id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ status: selectedStatus }),
        });

        if (response.ok) {
          mutate(ORDERS_URI);
          setStatus(selectedStatus);
        } else {
          console.log("Упс... Что то пошло не так...", response);
        }
      } catch (error) {
        console.log("Ошибка обновления статуса: ", error);
      } finally {
        setIsUpdating(false);
      }
    } else {
      setIsDisabledButton(true);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(templateMessage);
    toast.success("Заказ скопирован в буфер!", {
      position: "top-center",
      transition: Flip,
      closeButton: false,
      autoClose: 1000,
      hideProgressBar: true,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
      theme: "light",
    });
  };

  return (
    <tr className="border border-borderColor text-sm font-medium odd:bg-white even:bg-slate-200">
      <td className="table__cell w-16 px-1 text-center ">{order?.service}</td>
      <td className="table__cell w-8 px-1 text-center font-irish text-xl font-bold">
        {order?.seats}
      </td>
      <td className="table__cell px-1">{order?.place}</td>
      <td className="table__cell px-1">{order?.from}</td>
      <td
        className={`table__cell px-1 ${
          order?.name === "" ? "text-center" : ""
        }`}
      >
        {order?.name === "" ? "-" : order?.name}
      </td>
      <td className="table__cell px-1">{order?.phone}</td>
      <td className="table__cell px-1 py-1 leading-none">{order?.comment}</td>
      <td className="relative flex w-44 items-center justify-between px-1 py-1 leading-none">
        <button onClick={openRadioPopup}>
          {statusesWithIcons(30)[status]}
        </button>
        {isRadioPopupOpen && (
          <div
            ref={radioPopupRef}
            className="radio-popup absolute inset-y-12 z-50 h-28 w-44 -translate-x-10 flex-col items-center justify-between gap-2 rounded-md bg-primary p-2 text-baseColor"
          >
            <div className="mt-1 flex justify-between">
              <div className="flex items-center gap-2">
                <HelpCircle
                  size={20}
                  color={"rgb(59 130 246)"}
                />
                <label>Получен</label>
              </div>
              <input
                type="radio"
                name="status"
                value="RECEIVED"
                className="form-radio cursor-pointer appearance-none  text-blue-500 checked:ring-blue-500 indeterminate:bg-gray-300 focus:bg-blue-600"
                onChange={handleRadioChange}
              />
            </div>
            <br />
            <div className="flex justify-between">
              <div className="flex items-center gap-2">
                <CheckCircle
                  size={20}
                  color={"rgb(74 222 128)"}
                />
                <label>Выполнен</label>
              </div>
              <input
                type="radio"
                name="status"
                value="COMPLETED"
                className="form-radio cursor-pointer appearance-none  text-green-400 checked:ring-green-400 indeterminate:bg-gray-300 focus:bg-green-400"
                onChange={handleRadioChange}
              />
            </div>
            <br />
            <div className="flex justify-between">
              <div className="flex items-center gap-2">
                <X
                  size={20}
                  color={"rgb(248 113 113)"}
                />
                <label>Отменен</label>
              </div>
              <input
                type="radio"
                name="status"
                value="CANCELED"
                className="form-radio cursor-pointer appearance-none  text-red-400 checked:ring-red-400 indeterminate:bg-gray-300 focus:bg-red-400"
                onChange={handleRadioChange}
              />
            </div>
          </div>
        )}
        <Button
          style={"btn__cell"}
          disabled={isDisabledButton}
          onClick={getUpdateOrder}
        >
          {isUpdating ? "Обновляю" : "Сохранить"}
        </Button>
        <ClipboardCopy
          color={"rgb(107 114 128"}
          onClick={copyToClipboard}
          className="cursor-pointer"
        />
        <ToastContainer
          position="center"
          autoClose={1000}
          hideProgressBar
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss={false}
          draggable={false}
          pauseOnHover={false}
          theme="light"
        />
      </td>
    </tr>
  );
}
