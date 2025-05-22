import { T_Product } from "@/app-types";
import { PrismaClient } from "./generated";

export const prisma = new PrismaClient().$extends({
  result: {
    product: {
      guarantee: {
        needs: { guarantee: true },
        compute(product) {
          return product.guarantee as T_Product["guarantee"];
        },
      },
      price: {
        needs: { price: true },
        compute(product) {
          return product.price as T_Product["price"];
        },
      },
    },
  },
});
