"use client";

import { useEffect, useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useSWR from "swr";

import { fetcher } from "@/utils/helpers";

import { MainGroup } from "../(MainGroup)/MainGroup";

export function MainOrders() {
  const hasNotified = useRef(false);

  const notify = user =>
    toast.success(`Новый заказ от ${user.name} ${user.phone}`);

  const { data } = useSWR("/api", fetcher);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (data) {
      const { results, orders } = data;
      if (results?.length > 0) {
        results.map(order => {
          notify(order);
        });
        hasNotified.current = true;
      }
      setOrders(orders);
    }
  }, [data]);

  return (
    <>
      <MainGroup orders={orders} />
      <ToastContainer
        position="bottom-right"
        autoClose={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        theme="light"
      />
    </>
  );
}
