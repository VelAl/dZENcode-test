import {
  products as initialProducts,
  orders as initialOrders,
} from "./row-data";
import { prisma } from "prisma";

export const main = async () => {
  await prisma.order.deleteMany();
  await prisma.product.deleteMany();

  await prisma.product.createMany({
    data: initialProducts.map(({ date: _date, ...product }) => product),
  });

  for (const order of initialOrders) {
    const updatedProducts = [];

    for (const prod of order.products) {
      const existingProduct = await prisma.product.findUnique({
        where: { id: prod.id },
      });
      if (!existingProduct) continue;

      await prisma.product.update({
        where: { id: existingProduct.id },
        data: { order: existingProduct.order + 1 },
      });

      updatedProducts.push({ id: existingProduct.id });
    }

    await prisma.order.create({
      data: {
        title: order.title,
        description: order.description,
        date: new Date(order.date),
        products: {
          connect: updatedProducts,
        },
      },
    });
  }

  console.log("Seed completed");
};

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => {
    prisma.$disconnect();
  });
