"use client";

import React, { useState } from "react";
import styles from "./accordions-group.module.css";
import Accordion from "../accordion/Accordion";

const AccordionsGroup = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className={styles.accordionsGroup}>
      {data.map((item, index) => (
        <Accordion
          {...item}
          key={item.title}
          oppened={activeIndex === index}
          setOppened={() => setActiveIndex(activeIndex === index ? -1 : index)}
        />
      ))}
    </div>
  );
};

export default AccordionsGroup;