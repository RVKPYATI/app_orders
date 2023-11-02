import { GOOGLE_SHEATS_URI } from "@/constants/constants";

import { createOrder } from "./createOrders";

export async function getNewOrders() {
  try {
    const res = await fetch(GOOGLE_SHEATS_URI, { cache: "no-store" });

    const dataGoogle = await res.json();
    const createorders = await createOrder(dataGoogle);
    return createorders;
  } catch (error) {
    console.log(`Произошла ошибка getNewOrders ${error.message}`);
  }
}
