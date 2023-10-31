import { findUniqueObjects } from "@/utils/helpers";

import prisma from "../prismaClient";

export const createOrders = async body => {
  try {
    const results = await prisma.orders.createMany({
      data: body,
    });

    return results;
  } catch (error) {
    console.log(`Произошла ошибка createOrders ${error.message}`);
  } finally {
    prisma.$disconnect();
  }
};

export const createOrder = async data => {
  try {
    const results = [];
    const dataMany = await prisma.orders.findMany({
      where: {
        order_id: data.order_id,
      },
    });

    const unicData = findUniqueObjects(data, dataMany);

    if (unicData.length === 0) {
      console.log(`Новых объектов не найдено`);
    }

    for (let i of unicData) {
      const result = await prisma.orders.create({
        data: i,
      });
      console.log(`Объект id ${result.id} добавлен в базу`);
      results.push(result);
    }
    return results;
  } catch (error) {
    console.log(`Произошла ошибка createOrders ${error.message}`);
  } finally {
    prisma.$disconnect();
  }
};

export const deleteAllOrders = async () => {
  await prisma.orders.deleteMany({});
};
