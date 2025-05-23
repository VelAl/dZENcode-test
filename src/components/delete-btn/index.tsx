import Image from "next/image";
import styles from "./style.module.css";

type T_Props = { onClick?: () => void };

export const DeleteBtn = ({ onClick }: T_Props) => {
  return (
    <button type="button" className="btn btn-light" onClick={onClick}>
      <Image
        src={"/delete-bin-green.svg"}
        alt={"deleet"}
        width={20}
        height={20}
        className={styles.delete_icn}
      />
    </button>
  );
};
