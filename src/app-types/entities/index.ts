import { T_Price } from "../shared-types";

export type T_Product = {
  id: number;
  serialNumber: number;
  isNew: boolean;
  photo: string | null;
  title: string;
  type: "Monitors";
  specification: string;
  guarantee: { start: string; end: string };
  price: T_Price[];
  order: number;
  date: string | Date;
};

export type T_Order = {
  id: number;
  title: string;
  date: string | Date;
  description: string;
  products: T_Product[];
};

export type T_OrderWithPrice = T_Order & {
  price: T_Price[];
};
