import { prisma } from "prisma";
import { T_Order } from "@/app-types";
import { convertToPlainObject, countTotalOrderPrice } from "@/utils";

export const getOrders_A = async () => {
  try {
    const orders = await prisma.order.findMany({
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
