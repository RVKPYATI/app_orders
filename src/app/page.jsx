import GetData from "@/components/GetData";

import { createOrder } from "@/db/controllers/createOrders";
import { getOrders } from "@/db/controllers/getOrders";

import { getData } from "../utils/functions";

//const data = await getData(); //получаем данные из google

//const createOrders = await createOrder(data); //добавляем в базу новые данные если есть, если ничего получаем пустой массив

const dataOrders = [];

export default function Home() {
  setInterval(async () => {
    const data = await getOrders();
    dataOrders.push(data);

    if (dataOrders.length !== 0) {
      return <GetData data={dataOrders} />;
    }
  }, 10000);

  return (
    <GetData data={dataOrders} />
    // <main className="text-shadow flex min-h-screen items-center justify-center gap-8 bg-slate-900 text-8xl font-bold -text-shadow-x-2 text-shadow-y-1 text-shadow-red-500 ">
    //   <p className="animate-rotation text-6xl text-white">☼</p>
    //   <h1 className="animate-pulse text-blue-600">
    //     APP ORDERS&nbsp;
    //     <span className="font-irish text-9xl">13</span>
    //   </h1>
    //   <p className="animate-rotation text-6xl text-white">☼</p>
    // </main>
  );
}
