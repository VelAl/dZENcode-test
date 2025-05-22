import { T_Order } from "@/app-types";
import { Dispatch, SetStateAction } from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import { DeleteBtn } from "../delete-btn";

type T_Props = {
  order: T_Order;
  setActiveOrderId: Dispatch<SetStateAction<number | null>>;
};

export const OrderProductsCard = ({ order, setActiveOrderId }: T_Props) => {
  return (
    <div className={styles.card}>
      <button
        type="button"
        className={`btn btn-light ${styles["card__close-btn"]}`}
        onClick={() => setActiveOrderId(null)}
      >
        x
      </button>
      <h5>{order.title}</h5>

      <div>
        <table className="mt-3 w-100">
          <tbody>
            {order.products.map((product) => (
              <tr key={product.id} className={styles["card__table-row"]}>
                <td className={styles["card__table-cell"]}>
                  <div
                    className={`${styles["card__circle"]} ${
                      !product.isNew && styles.unactive
                    }`}
                  />
                </td>

                <td className={styles["card__table-cell"]}>
                  <Image
                    alt="product"
                    width={30}
                    height={30}
                    src={product.photo || ""}
                    style={{ objectFit: "cover" }}
                  />
                </td>

                <td className={styles["card__table-cell"]}>
                  <div className={styles["card__title"]}>
                    <div>{product.title}</div>
                    <div className={styles["card__title-number"]}>
                      {product.serialNumber}
                    </div>
                  </div>
                </td>

                <td className={styles["card__table-cell"]}>
                  <div
                    className={
                      styles[
                        product.isNew ? "card__status" : "card__status-unactive"
                      ]
                    }
                  >
                    {product.isNew ? "New" : "Not New"}
                  </div>
                </td>

                <td className={styles["card__table-cell"]}>
                  <div className={styles['card__buttonholder']}>
                    <DeleteBtn />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
