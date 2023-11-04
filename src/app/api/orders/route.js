import { NextResponse } from "next/server";

import { getNewOrders } from "@/db/controllers/getNewOrders";
import { getOrders } from "@/db/controllers/getOrders";
import { sendMessageTelegram } from "@/db/controllers/sendMessageTelegram";

import { getDirections } from "@/utils/functions";

export async function GET(req) {
  const searchParams = req.nextUrl.searchParams;
  const dateStart = searchParams.get("dateStart");
  const dateEnd = searchParams.get("dateEnd");
  if (searchParams) {
    const orders = await getOrders(dateStart, dateEnd);

    const allInfo = getDirections(orders);

    return NextResponse.json({
      orders: orders,
      allInfo: allInfo,
    });
  }
  const results = await getNewOrders();
  const orders = await getOrders();
  return NextResponse.json({ results: results, orders: orders });
}

export async function POST(req) {
  const body = await req.json();
  await sendMessageTelegram(body);

  return NextResponse.json(body, { status: 201 });
}
