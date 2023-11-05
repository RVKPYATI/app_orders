import { getDateRange } from "@/utils/helpers";

import prisma from "../prismaClient";

const { firstDayOfMonth, lastDayOfNextMonth } = getDateRange();

export const getOrders = async (dayStart, dayEnd) => {
  try {
    const results = await prisma.orders.findMany({
      where: {
        date: {
          gte: dayStart ? new Date(dayStart) : firstDayOfMonth,
          lt: dayEnd ? new Date(dayEnd) : lastDayOfNextMonth,
        },
      },
      orderBy: {
        date: "desc",
      },
    });

    return results;
  } catch (error) {
    console.log(`Произошла ошибка createOrders ${error.message}`);
  } finally {
    prisma.$disconnect();
  }
};
