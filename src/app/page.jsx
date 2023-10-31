import { createOrder } from "@/db/controllers/createOrders";
import { getOrders } from "@/db/controllers/getOrders";

import { getDateRange } from "@/utils/helpers";

import { getData } from "../utils/functions";

const data = await getData();

await createOrder(data);

const dataOfTwoMounth = await getOrders();

// setInterval(async () => {
//   await createOrder(data);
//   console.log("Запрашиваю данные с google");
// }, 60000);

export default function Home() {
  return (
    <main className="text-shadow flex min-h-screen items-center justify-center gap-8 bg-slate-900 text-8xl font-bold -text-shadow-x-2 text-shadow-y-1 text-shadow-red-500 ">
      <p className="animate-rotation text-6xl text-white">☼</p>
      <h1 className="animate-pulse text-blue-600">
        APP ORDERS&nbsp;
        <span className="font-irish text-9xl">13</span>
      </h1>
      <p className="animate-rotation text-6xl text-white">☼</p>
    </main>
  );
}
