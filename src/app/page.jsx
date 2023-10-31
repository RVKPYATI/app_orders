import { MainGroup } from "@/components/(MainGroup)/MainGroup";
import GetData from "@/components/GetData";

import { createOrder, deleteAllOrders } from "@/db/controllers/createOrders";
import { getOrders } from "@/db/controllers/getOrders";

import { getData } from "../utils/functions";

const data = await getData(); //получаем данные из google

const createOrders = await createOrder(data); //добавляем в базу новые данные если есть, если ничего получаем пустой массив
const dataOrders = await getOrders();

export default function Home() {
  return (
    <main className="mx-auto min-h-screen max-w-[1200px] items-start justify-center px-4 pt-12">
      <MainGroup orders={dataOrders} />
    </main>
  );
}
