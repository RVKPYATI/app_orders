import { NextResponse } from "next/server";

import { getNewOrders } from "@/db/controllers/getNewOrders";
import { getOrders } from "@/db/controllers/getOrders";

// export async function GET(req) {
//   const results = await getOrders();
//   return NextResponse.json(results);
// }

export async function GET(req) {
  const results = await getNewOrders();
  const orders = await getOrders();
  return NextResponse.json({ results: results, orders: orders });
}

// export async function POST(req) {
//   const body = await req.json();
//   const results = await createOrder(body);

//   return NextResponse.json(results, { status: 201 });
// }
