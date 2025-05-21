export type T_Product = {
  id: number;
  serialNumber: number;
  isNew: boolean;
  photo: string | null;
  title: string;
  type: "Monitors";
  specification: string;
  guarantee: { start: string; end: string };
  price: { value: number; symbol: string; isDefault: boolean }[];
  order: number;
  date: string;
};

export type T_Order = {
  id: number;
  title: string;
  date: string;
  description: string;
  products: T_Product[];
};
