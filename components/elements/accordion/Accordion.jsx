import React from "react";
import Image from "next/image";
import styles from "./accordion.module.css";
import { joinClassNames } from "@/utils/join-class-names";

const Accordion = ({ title, details, opened, setOpened, className }) => {
  return (
    <div className={joinClassNames(styles.accordion, className)}>
      <div className={opened ? styles.accordionTitleActive : styles.accordionTitle} onClick={setOpened}>
        <Image
          src={`/${opened ? "minus" : "plus"}.svg`}
          alt=""
          width={16}
          height={16}
        />
        {" "}{title}
      </div>
      <div className={opened ? styles.accordionDetailsActive : styles.accordionDetails}>
        {details}
      </div>
    </div>
  );
};

export default Accordion;