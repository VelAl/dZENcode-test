import { T_Product } from "@/app-types";
import { formatPrice } from "@/utils";
import styles from "./style.module.css";

type T_Props = {
  price: T_Product["price"];
};

export const Price = ({ price }: T_Props) => {
  return (
    <div className={styles.price}>
      <div className={styles.price__dollars}>
        {formatPrice(price[0].value, "en-US", "USD")}
      </div>
      <div>{formatPrice(price[1].value, "uk-UA", "UAH")}</div>
    </div>
  );
};
