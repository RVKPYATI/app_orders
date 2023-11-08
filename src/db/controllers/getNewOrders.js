import { GOOGLE_SHEATS_URI } from "@/constants/constants";
import { GOOGLE_SHEATS_URI_SITE } from "@/constants/constants";

import { validateData } from "@/utils/functions";

import { createOrder } from "./createOrders";

export async function getNewOrders() {
  try {
    
    const res1 = await fetch(GOOGLE_SHEATS_URI, { cache: "no-store" });
    const res2 = await fetch(GOOGLE_SHEATS_URI_SITE, { cache: "no-store" });

    const dataGoogle1 = await res1.json();
    const dataGoogle2 = await res2.json();
    const googleDataValidate = await validateData(dataGoogle1);
    const googleDataValidate2 = await validateData(dataGoogle2);
    
    const allRes = [...googleDataValidate,...googleDataValidate2];
    

    return await createOrder(allRes) ;
  } catch (error) {
    console.log(`Произошла ошибка getNewOrders ${error.message}`);
  }
}
