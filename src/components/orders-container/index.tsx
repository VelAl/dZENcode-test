"use client";

import { T_OrderWithPrice } from "@/app-types";
import { useState } from "react";
import { Order } from "../order";
import { OrderProductsCard } from "../order-products-card";

type T_Props = {
  ordersWithPrice: T_OrderWithPrice[];
};

export const OrdersContainer = ({ ordersWithPrice }: T_Props) => {
  const [activeOrderId, setActiveOrderId] = useState<number | null>(null);

  return (
    <div className="container">
      <div className="row">
        <div className={activeOrderId ? "col-4" : "col-12"}>
          <div className="left-container">
            {ordersWithPrice.map((order) => (
              <Order
                key={order.id}
                order={order}
                activeOrderID={activeOrderId}
                setActiveOrderId={setActiveOrderId}
              />
            ))}
          </div>
        </div>

        {activeOrderId && (
          <div className="col-8">
            <OrderProductsCard
              setActiveOrderId={setActiveOrderId}
              order={ordersWithPrice.find(({ id }) => id === activeOrderId)!}
            />
          </div>
        )}
      </div>
    </div>
  );
};
