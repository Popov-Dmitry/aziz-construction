import React from "react";
import styles from "./text-area.module.css";
import { joinClassNames } from "@/utils/join-class-names";

const Input = ({ name, placeholder, className, required = false }) => {
  return (
    <textarea
      className={joinClassNames(styles.textArea, className)}
      name={name}
      placeholder={placeholder}
      required={required}
    />
  );
};
export default Input;