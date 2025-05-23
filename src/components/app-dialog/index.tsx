import * as Dialog from "@radix-ui/react-dialog";
import { PropsWithChildren } from "react";
import styles from "./style.module.css";

type T_Props = {
  isOpen: boolean;
  onOpenChange: (isOpen: false) => void;
} & PropsWithChildren;

export const AppDialog = ({ isOpen, onOpenChange, children }: T_Props) => {
  return (
    <Dialog.Root open={isOpen} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay
          className={`modal-backdrop fade show ${styles.modal__overlay}`}
        />
        <Dialog.Content
          className={`shadow position-fixed ${styles.modal__content}`}
        >
          <Dialog.Title className="p-0 m-0"></Dialog.Title>
          <Dialog.Description className="p-0 m-0" />
          {children}
          <Dialog.Close
            className={`${styles.modal__close} btn btn-sm btn-light rounded-circle border border-secondary-subtle shadow`}
          >
            x
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
