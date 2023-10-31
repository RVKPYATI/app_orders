import { NextResponse } from "next/server";

import { getOrders } from "@/db/controllers/getOrders";

export async function GET(req) {
  const results = await getOrders();
  return NextResponse.json(results);
}
