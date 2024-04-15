"use client";

import React, { useState } from "react";
import styles from "./dropdown.module.css";
import { styleInjector } from "@/utils/style-injector";
import DownArrow from "@/components/icons/DownArrow";
import { joinClassNames } from "@/utils/join-class-names";

const Dropdown = ({ title, arrowColor, children, className }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.dropdown}>
      <div className={joinClassNames(styles.title, className)} onClick={() => setOpen((prevState) => !prevState)}>
        <div>{title}</div>
        <DownArrow width={10} height={10} fill={arrowColor} />
      </div>
      <div className={joinClassNames(styles.dropdownContent, open ? styles.dropdownActive : undefined)}>
        {styleInjector(styles.dropdownItem, children)}
      </div>
    </div>
  );
};

export default Dropdown;