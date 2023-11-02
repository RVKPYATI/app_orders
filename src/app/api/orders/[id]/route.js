import { NextResponse } from "next/server";

import { updateOrder } from "@/db/controllers/updateOrder";

export async function PUT(req, res) {
  const id = res.params.id;
  const body = await req.json();
  updateOrder(body, id);

  return NextResponse.json({ "Статус обновлен заказ № ": id }, { status: 201 });
}
