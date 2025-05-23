"use server";

import { prisma } from "prisma";
import { T_Order } from "@/app-types";
import { convertToPlainObject, countTotalOrderPrice, sleep } from "@/utils";
import { revalidatePath } from "next/cache";

//_________GET_ORDERS_______________________________________________________
export const getOrders_A = async () => {
  try {
    const orders = await prisma.order.findMany({
      orderBy: { date: "desc" },
      include: { products: true },
    });
    const total = await prisma.order.count();

    const ordersWithPrice = orders.map((order) => {
      const plainObjOrder = convertToPlainObject<T_Order>(order);

      return { ...plainObjOrder, price: countTotalOrderPrice(order) };
    });

    return {
      isSuccess: true,
      data: {
        orders: ordersWithPrice,
        total,
      },
    } as const;
  } catch (err) {
    const errMessage =
      err instanceof Error ? err.message : "Something went wrong...";

    return { isSuccess: false, data: err, errMessage } as const;
  }
};

//_________DELETE_ORDER_____________________________________________________
export const deleteOrder_A = async (id: number) => {
  try {
    await sleep(2000);
    await prisma.order.delete({ where: { id } });

    revalidatePath("/orders");

    return {
      isSuccess: true,
      message: "The Order has been deleted successfully",
    };
  } catch (err) {
    const message =
      err instanceof Error ? err.message : `Failed to delete the Order ${id}`;
    return {
      isSuccess: false,
      message,
    };
  }
};

//_________CREATE_RANDOM_ORDER______________________________________________
function getRandomWord(length: number) {
  const chars = "abcdefghijklmnopqrstuvwxyz";
  return Array.from(
    { length },
    () => chars[Math.floor(Math.random() * chars.length)]
  ).join("");
}

function getRandomText(maxLength: number) {
  const words = [
    "quick",
    "fox",
    "brown",
    "dog",
    "lazy",
    "jump",
    "lorem",
    "ipsum",
    "sit",
    "dolor",
  ];
  let text = "";
  while (text.length < maxLength) {
    const word = words[Math.floor(Math.random() * words.length)];
    if (text.length + word.length + 1 > maxLength) break;
    text += (text ? " " : "") + word;
  }
  return text;
}

export const createRandomOrder_A = async () => {
  try {
    const products = await prisma.product.findMany();

    const shuffled = products.sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(
      0,
      Math.min(3, Math.max(1, Math.floor(Math.random() * 3) + 1))
    );

    const order = await prisma.order.create({
      data: {
        title: "Order title " + getRandomWord(9),
        description: getRandomText(20),
        products: {
          connect: selected.map((p) => ({ id: p.id })),
        },
      },
      include: { products: true },
    });

    const plainOrder = convertToPlainObject<T_Order>(order);

    revalidatePath("/orders");

    return {
      isSuccess: true,
      message: "Order created successfully",
      data: {
        order: { ...plainOrder, price: countTotalOrderPrice(order) },
      },
    } as const;
  } catch (err) {
    const message =
      err instanceof Error ? err.message : "Failed to create order";
    return {
      isSuccess: false,
      message,
    } as const;
  }
};
