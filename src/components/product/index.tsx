import { T_Product } from "@/app-types";
import "./style.css";
import Image from "next/image";
import { formatDateToUS } from "@/utils";
import { Price } from "../price";
import { DeleteBtn } from "../delete-btn";

type T_Props = { product: T_Product };

export const Product = ({
  product: { isNew, photo, title, serialNumber, guarantee, price, date },
}: T_Props) => {
  return (
    <div className="product__item">
      <div className={`product__status ${!isNew && "product__status_gray"}`} />

      <div className="product__image">
        {photo && (
          <Image
            src={photo}
            alt={title}
            width={45}
            height={35}
            className="product__image-img"
          />
        )}
      </div>

      <div className="product__title">
        <div>{title}</div>
        <div className="product__title__serialNumber">{serialNumber}</div>
      </div>

      <div
        className={`product__condition ${isNew && "product__condition__new"}`}
      >
        {isNew ? "New" : "Not New"}
      </div>

      <div className="product__guarantee">
        <div className="product__guarantee-period">
          <span>from</span> <span>{formatDateToUS(guarantee.start)}</span>
        </div>
        <div className="product__guarantee-period">
          <span>to</span> <span>{formatDateToUS(guarantee.end)}</span>
        </div>
      </div>

      <div className="product__price">
        <Price price={price} />
      </div>

      <div className="ms-3">
        <div>{formatDateToUS(date.toString())}</div>
      </div>

      <div className="ms-3">
        <DeleteBtn />
      </div>
    </div>
  );
};
