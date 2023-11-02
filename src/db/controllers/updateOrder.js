import prisma from "../prismaClient";

export const updateOrder = async (body, id) => {
  try {
    const results = await prisma.orders.update({
      where: {
        id: id,
      },
      data: body,
    });

    return results;
  } catch (error) {
    console.log("Произошла ошибка, код: ", error.message);
  } finally {
    prisma.$disconnect();
  }
  return "data";
};
