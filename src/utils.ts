import { T_Order, T_Price } from "./app-types";

export type T_DateString = `${string},${string},${string},${string}`;

export const getFormatedDate = () => {
  const date = new Date();

  const options: Intl.DateTimeFormatOptions = {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false, // Use 24-hour format (false for 24-hour, true for 12-hour)
  };

  const formatted = new Intl.DateTimeFormat("en-US", options).format(date);

  return formatted as T_DateString;
};

export const formatDateToUS = (date: string): string => {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  };

  const formatter = new Intl.DateTimeFormat("en-US", options);
  return formatter.format(new Date(date));
};

export const formatPrice = (
  amount: number,
  locale: "uk-UA" | "en-US", // Intl.LocalesArgument,
  currency: "UAH" | "USD" // Intl.NumberFormatOptions["currency"]
): string => {
  const formatter = new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return formatter.format(amount);
};

export const sleep = (ms: number) => new Promise((res) => setTimeout(res, ms));

export const countTotalOrderPrice = (order: T_Order) => {
  const res = order.products.reduce((acc, { price }) => {
    price.forEach((el) => {
      if (acc[el.symbol]) {
        acc[el.symbol].value += el.value;
      } else {
        acc[el.symbol] = { ...el };
      }
    });
    return acc;
  }, {} as { [curencySymbl: string]: T_Price });

  return Object.values(res);
};

// Convert prisma object into a regular JS object
export function convertToPlainObject<T>(value: T): T {
  return JSON.parse(JSON.stringify(value));
}
