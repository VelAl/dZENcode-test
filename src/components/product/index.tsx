import { T_Product } from "@/app-types";
import "./style.css";
import Image from "next/image";
import { formatDateToUS, formatPrice } from "@/utils";
import deleteIcn from "../../../public/delete-bin-green.svg";

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
        <div className="product__price-dollars">
          {formatPrice(price[0].value, "en-US", "USD")}
        </div>
        <div>{formatPrice(price[1].value, "uk-UA", "UAH")}</div>
      </div>

      <div className="ms-3">
        <div>{formatDateToUS(date.toString())}</div>
      </div>

      <div className="ms-3">
        <button type="button" className="btn btn-light">
          <Image
            src={deleteIcn}
            alt={"deleet"}
            width={20}
            height={20}
            className="product__delete_icn"
          />
        </button>
      </div>
    </div>
  );
};
