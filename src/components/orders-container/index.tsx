"use client";

import { T_OrderWithPrice } from "@/app-types";
import { useState } from "react";
import { Order } from "../order";
import { OrderProductsCard } from "../order-products-card";
import styles from "./style.module.css";
import { AppDialog } from "../app-dialog";
import { DeleteOrderModal } from "../delete-order-modal";

type T_Props = {
  ordersWithPrice: T_OrderWithPrice[];
};

export const OrdersContainer = ({ ordersWithPrice }: T_Props) => {
  const [activeOrderId, setActiveOrderId] = useState<number | null>(null);
  const [orderTodelete, setOrderToDelete] = useState<T_OrderWithPrice | false>(
    false
  );

  return (
    <div className="container">
      <div className="row flex-nowrap">
        <div
          className={`
            ${styles["orders-container__column"]}
            ${
              activeOrderId
                ? styles["orders-container__column--left-small"]
                : styles["orders-container__column--left-full"]
            }
          `}
        >
          <div>
            {ordersWithPrice.map((order) => (
              <Order
                key={order.id}
                order={order}
                activeOrderID={activeOrderId}
                setActiveOrderId={setActiveOrderId}
                setOrderToDelete={setOrderToDelete}
              />
            ))}
          </div>
        </div>

        <div
          className={`
            ${styles["orders-container__column"]}
            ${styles["orders-container__column--right-panel"]}
            ${
              activeOrderId
                ? styles["orders-container__column--right-visible"]
                : styles["orders-container__column--right-hidden"]
            }
          `}
        >
          {activeOrderId && (
            <OrderProductsCard
              setActiveOrderId={setActiveOrderId}
              order={ordersWithPrice.find(({ id }) => id === activeOrderId)!}
            />
          )}
        </div>
      </div>

      <AppDialog isOpen={!!orderTodelete} onOpenChange={setOrderToDelete}>
        <DeleteOrderModal
          closeModal={setOrderToDelete}
          order={orderTodelete as T_OrderWithPrice}
        />
      </AppDialog>
    </div>
  );
};
