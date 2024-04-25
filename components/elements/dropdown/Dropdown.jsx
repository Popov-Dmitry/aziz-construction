"use client";

import React, { useState } from "react";
import styles from "./dropdown.module.css";
import { styleInjector } from "@/utils/style-injector";
import DownArrow from "@/components/icons/DownArrow";
import { joinClassNames } from "@/utils/join-class-names";
import { useRouter } from "next/navigation";
import { useBreakpoints } from "@/hooks/use-breakpoints";

const Dropdown = ({ title, titleHref, arrowColor, children, className }) => {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const breakpoint = useBreakpoints();

  const onClick = () => {
    if (breakpoint === "lg") {
      router.push(titleHref);
    } else {
      if (open) {
        router.push(titleHref);
      }
      setOpen((prevState) => !prevState);
    }
  };

  return (
    <div className={styles.dropdown}>
      <div className={className} onClick={onClick}>
        <div className={styles.title}>
          <div>{title}</div>
          <DownArrow width={10} height={10} fill={arrowColor} />
        </div>
      </div>
      <div className={joinClassNames(styles.dropdownContent, open ? styles.dropdownActive : undefined)}>
        {styleInjector(styles.dropdownItem, children)}
      </div>
    </div>
  );
};

export default Dropdown;