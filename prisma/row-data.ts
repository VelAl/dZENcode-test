import { T_Order, T_Product } from "@/app-types";

export const orders: T_Order[] = [
  {
    id: 1,
    title: "Order 1",
    date: "2017-06-29T12:09:33",
    description: "desc",
    products: [],
  },
  {
    id: 2,
    title: "Order 2",
    date: "2017-06-29 12:09:33",
    description: "desc",
    products: [],
  },
  {
    id: 3,
    title: "Order 3",
    date: "2017-06-29 12:09:33",
    description: "desc",
    products: [],
  },
];

export const products: T_Product[] = [
  {
    id: 1,
    serialNumber: 1234,
    isNew: true,
    photo: "pathToFile.jpg",
    title: "Product 1",
    type: "Monitors",
    specification: "Specification 1",
    guarantee: {
      start: "2017-06-29T12:09:33",
      end: "2017-06-29T12:09:33",
    },
    price: [
      { value: 600, symbol: "USD", isDefault: false },
      { value: 2600, symbol: "UAH", isDefault: true },
    ],
    order: 1,
    date: "2017-06-29T12:09:33",
  },
  {
    id: 2,
    serialNumber: 1234,
    isNew: false,
    photo: "pathToFile.jpg",
    title: "Product 2",
    type: "Monitors",
    specification: "Specification 2",
    guarantee: {
      start: "2017-06-29T12:09:33",
      end: "2017-06-29T12:09:33",
    },
    price: [
      { value: 600, symbol: "USD", isDefault: false },
      { value: 2600, symbol: "UAH", isDefault: true },
    ],
    order: 2,
    date: "2017-06-29T12:09:33",
  },
];
