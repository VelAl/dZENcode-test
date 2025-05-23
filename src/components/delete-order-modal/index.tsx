import { T_Order } from "@/app-types";
import styles from "./styles.module.css";

type T_Props = {
  order: T_Order;
  closeModal: (isOpen: false) => void;
};

export const DeleteOrderModal = ({ closeModal, order }: T_Props) => {
  return (
    <div className={styles.modal}>
      <div className={styles.modal__title}>
        Are you sure you want to delete the Order?
      </div>
      <div className={styles.modal__body}>
        <h5>{order.title}</h5>
      </div>

      <div className={`bg-success ${styles.modal__footer}`}>
        <button className="btn btn-success" onClick={() => closeModal(false)}>
          Cancel
        </button>
        <button className="btn btn-light">Delete</button>
      </div>
    </div>
  );
};
