import { T_OrderWithPrice } from "@/app-types";
import Image from "next/image";

import "./style.css";
import { formatDateToUS } from "@/utils";
import { Price } from "../price";
import { DeleteBtn } from "../delete-btn";
import { Dispatch, SetStateAction } from "react";
type T_Props = {
  order: T_OrderWithPrice;
  activeOrderID: number | null;
  setActiveOrderId: Dispatch<SetStateAction<number | null>>;
};

export const Order = ({
  order: { title, products, date, id, price },
  activeOrderID,
  setActiveOrderId,
}: T_Props) => {
  return (
    <div className="order__item">
      {!activeOrderID && <div className="order__item-title">{title}</div>}

      <button
        type="button"
        className="btn btn-light order__item-show"
        disabled={activeOrderID === id}
        onClick={() => setActiveOrderId(id)}
      >
        <Image alt="expand order" width={12} height={12} src={"/list.png"} />
      </button>

      <div className="order__item-count">
        {products.length}
        <div>products</div>
      </div>

      <div className="ms-3">
        <div>{formatDateToUS(date.toString())}</div>
      </div>

      {!activeOrderID && (
        <>
          <div className="order__item-price">
            <Price price={price} />
          </div>

          <DeleteBtn />
        </>
      )}

      {activeOrderID === id && <div className="order__item-actv">{">"}</div>}
    </div>
  );
};
