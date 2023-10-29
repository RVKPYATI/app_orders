import { getStatusIcon } from "@/utils/helpers";

export function TableFirstRow({ orders, time }) {
  const filteredOrdersByTime = orders.filter(
    order => order.time.split(":")[0] === time,
  );
  const filteredOrdersByTimeLeft = filteredOrdersByTime.filter(
    order => order.direction === "Оренбург-Уфа",
  );
  const filteredOrdersByTimeRight = filteredOrdersByTime.filter(
    order => order.direction === "Уфа-Оренбург",
  );
  if (filteredOrdersByTime.length === 0) return <EmptyRow time={time} />;

  return (
    <>
      <tr className="text-center text-base font-bold odd:bg-white even:bg-slate-200">
        <RowLeft
          time={time}
          ordersLeft={filteredOrdersByTimeLeft}
        />
        <td className="border-borderColor border-r text-center font-irish text-lg">
          {time}
        </td>
        <RowRigth
          time={time}
          ordersRight={filteredOrdersByTimeRight}
        />
      </tr>
    </>
  );
}

function RowLeft({ ordersLeft }) {
  if (ordersLeft.length === 0)
    return (
      <>
        <td className="border-borderColor border-r"> </td>
        <td className="border-borderColor border-r"> </td>
      </>
    );
  const statusList =
    ordersLeft.length > 1
      ? getStatusIcon(ordersLeft.map(order => order.status).join(" "))
      : getStatusIcon(ordersLeft[0].status);
  return (
    <>
      <td className="border-borderColor border-r">{ordersLeft.length}</td>
      <td className="border-borderColor border-r">{statusList}</td>
    </>
  );
}
function RowRigth({ ordersRight }) {
  if (ordersRight.length === 0)
    return (
      <>
        <td className="border-borderColor border-r"> </td>
        <td> </td>
      </>
    );
  const statusList =
    ordersRight.length > 1
      ? getStatusIcon(ordersRight.map(order => order.status).join(" "))
      : getStatusIcon(ordersRight[0].status);

  return (
    <>
      <td className="border-borderColor border-r">{ordersRight.length}</td>
      <td>{statusList}</td>
    </>
  );
}

function EmptyRow({ time }) {
  return (
    <tr className="text-center font-irish text-lg odd:bg-white even:bg-slate-200">
      <td className="border-borderColor border-r"></td>
      <td className="border-borderColor border-r"></td>
      <td className="border-borderColor border-r">{time}</td>
      <td className="border-borderColor border-r"></td>
      <td></td>
    </tr>
  );
}
