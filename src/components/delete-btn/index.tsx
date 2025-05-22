import Image from "next/image";
import styles from "./style.module.css";

export const DeleteBtn = () => {
  return (
    <button type="button" className="btn btn-light">
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
