import { getDateRange } from "@/utils/helpers";

import prisma from "../prismaClient";

const { firstDayOfMonth, lastDayOfNextMonth } = getDateRange();

export const getOrders = async () => {
  try {
    const results = await prisma.orders.findMany({
      where: {
        date: {
          gte: firstDayOfMonth,
          lt: lastDayOfNextMonth,
        },
      },
    });

    return results;
  } catch (error) {
    console.log(`Произошла ошибка createOrders ${error.message}`);
  } finally {
    prisma.$disconnect();
  }
};
