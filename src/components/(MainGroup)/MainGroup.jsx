"use client";

import { isSameDay, startOfDay, startOfToday } from "date-fns";
import { useState } from "react";

import { BtnGroup } from "@/components/(MainGroup)/BtnGroup/BtnGroup";
import { Calendar } from "@/components/(MainGroup)/Calendar/Calendar";
import { Stata } from "@/components/(MainGroup)/Stata/Stata";
import { MainTable } from "@/components/MainTable/MainTable";

//import { orders } from "@/constants/constants";

export function MainGroup({ orders }) {
  const today = startOfToday();
  const [selectedDays, setSelectedDays] = useState([today]);
  const [firstScreen, setFirstScreen] = useState(true);

  const filteredOrders = orders.filter(order => {
    const orderDate = startOfDay(new Date(order.date));

    const datesStartOfDay = selectedDays.map(day => startOfDay(day));
    return datesStartOfDay.some(day => isSameDay(orderDate, day));
  });

  //console.log("filteredOrders", filteredOrders);

  return (
    <>
      {firstScreen && (
        <>
          <div className="mb-4 flex h-[78vh] w-full justify-center gap-40 pt-12">
            <Stata
              days={selectedDays}
              orders={orders?.length}
              filteredOrders={filteredOrders}
            />
            <Calendar
              days={selectedDays}
              selectDays={setSelectedDays}
              orders={orders}
              main={setFirstScreen}
            />
          </div>
          <BtnGroup />
        </>
      )}
      {!firstScreen && (
        <MainTable
          days={selectedDays}
          filteredOrders={filteredOrders}
          mainWindow={setFirstScreen}
        />
      )}
    </>
  );
}
