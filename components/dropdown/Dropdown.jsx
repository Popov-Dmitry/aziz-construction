import React from "react";
import styles from "./dropdown.module.css";
import { styleInjector } from "@/utils/style-injector";
import DownArrow from "@/components/icons/DownArrow";

const Dropdown = ({ title, arrowColor, children }) => {
  return (
    <div className={styles.dropdown}>
      <div className={styles.title}>
        <div>{title}</div>
        <DownArrow width={10} height={10} fill={arrowColor} />
      </div>
      <div className={styles.dropdownContent}>
        {styleInjector(styles.dropdownItem, children)}
      </div>
    </div>
  );
};

export default Dropdown;