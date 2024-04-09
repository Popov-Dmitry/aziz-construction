"use client";

import React, { useState } from "react";
import Image from "next/image";
import styles from "./accordion.module.css";

const Accordion = ({ title, details }) => {
  const [oppened, setOppened] = useState(false);

  return (
    <div className={styles.accordion}>
      <div
        className={styles.accordionHeader}
        onClick={() => setOppened((prevState) => !prevState)}
      >
        <Image
          src={`/${oppened ? "minus" : "plus"}.svg`}
          alt=""
          width={16}
          height={16}
        />
        <div className={oppened ? styles.accordionTitleActive : styles.accordionTitle}>
            {title}
        </div>
      </div>
      <div className={oppened ? styles.accordionDetailsActive : styles.accordionDetails}>
        {details}
      </div>
    </div>
  );
};

export default Accordion;