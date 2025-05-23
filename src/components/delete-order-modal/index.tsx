"use client";

import { T_Order } from "@/app-types";
import styles from "./styles.module.css";
import { toast } from "sonner";
import { useTransition } from "react";
import { deleteOrder_A } from "@/actions";

type T_Props = {
  order: T_Order;
  setOpenModal: (isOpen: false) => void;
};

export const DeleteOrderModal = ({ setOpenModal, order }: T_Props) => {
  const [isPending, startTransition] = useTransition();

  const _handleDelete = () =>
    startTransition(async () => {
      const res = await deleteOrder_A(order.id);

      if (!res.isSuccess) {
        toast.error(res.message);
        return;
      }
      toast.success(res.message);
      setOpenModal(false);
    });

  return (
    <div className={styles.modal}>
      <div className={styles.modal__title}>
        Are you sure you want to delete the Order?
      </div>
      <div className={styles.modal__body}>
        <h5>{order.title}</h5>
      </div>

      <div className={`bg-success ${styles.modal__footer}`}>
        <button className="btn btn-success" onClick={() => setOpenModal(false)}>
          Cancel
        </button>
        <button
          className={`btn btn-light ${styles.modal__delete}`}
          onClick={_handleDelete}
          disabled={isPending}
        >
          {isPending ? (
            <div className="spinner-border spinner-border-sm text-success" />
          ) : (
            "Delete"
          )}
        </button>
      </div>
    </div>
  );
};
