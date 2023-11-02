import { CheckCircle, HelpCircle, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { Button } from "@/ui/Button/Button";

import { statusesWithIcons } from "@/constants/constants";

export function TableSecondRow({ order }) {
  const [isRadioPopupOpen, setIsRadioPopupOpen] = useState(false);
  const radioPopupRef = useRef(null);
  const cellRef = useRef(null);

  const openRadioPopup = () => {
    console.log(cellRef);
    setIsRadioPopupOpen(true);
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
  return (
    <tr className="border border-borderColor text-sm font-medium">
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
      <td
        className="relative flex items-center justify-between px-1 py-1 leading-none"
        ref={cellRef}
      >
        <button onClick={openRadioPopup}>
          {statusesWithIcons(30)[order.status]}
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
                  color={"#f7f7f7"}
                />
                <label>Получен</label>
              </div>
              <input
                type="radio"
                name="status"
                value="received"
                checked={`${order.status === "Получен" && "checked"}`}
                className="cursor-pointer appearance-none  checked:ring-redBadge indeterminate:bg-gray-300 focus:bg-blue-600"
              />
            </div>
            <br />
            <div className="flex justify-between">
              <div className="flex items-center gap-2">
                <CheckCircle
                  size={20}
                  color={"#f7f7f7"}
                />
                <label>Выполнен</label>
              </div>
              <input
                type="radio"
                name="status"
                value="completed"
                className="checked cursor-pointer checked:ring-redBadge indeterminate:bg-gray-300 focus:bg-green-400"
              />
            </div>
            <br />
            <div className="flex justify-between">
              <div className="flex items-center gap-2">
                <X
                  size={20}
                  color={"#f7f7f7"}
                />
                <label>Отменен</label>
              </div>
              <input
                type="radio"
                name="status"
                value="canceled"
                className="cursor-pointer checked:ring-redBadge indeterminate:bg-gray-300 focus:bg-red-400"
              />
            </div>
          </div>
        )}
        <Button
          style={"btn__cell"}
          disabled={cellRef.current === null}
        >
          Сохранить
        </Button>
      </td>
    </tr>
  );
}
