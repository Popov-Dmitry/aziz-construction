import React from "react";
import Image from "next/image";
import styles from "./accordion.module.css";

const Accordion = ({ title, details, oppened, setOppened }) => {
  return (
    <div className={styles.accordion}>
      <div className={oppened ? styles.accordionTitleActive : styles.accordionTitle} onClick={setOppened}>
        <Image
          src={`/${oppened ? "minus" : "plus"}.svg`}
          alt=""
          width={16}
          height={16}
        />
        {" "}{title}
      </div>
      <div className={oppened ? styles.accordionDetailsActive : styles.accordionDetails}>
        {details}
      </div>
    </div>
  );
};

export default Accordion;