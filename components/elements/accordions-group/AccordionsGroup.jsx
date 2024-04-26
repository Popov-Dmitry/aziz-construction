"use client";

import React, { useState } from "react";
import styles from "./accordions-group.module.css";
import Accordion from "../accordion/Accordion";

const AccordionsGroup = ({ data, accordionClassname }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className={styles.accordionsGroup}>
      {data.map((item, index) => (
        <Accordion
          {...item}
          key={item.title}
          opened={activeIndex === index}
          setOpened={() => setActiveIndex(activeIndex === index ? -1 : index)}
          className={accordionClassname}
        />
      ))}
    </div>
  );
};

export default AccordionsGroup;