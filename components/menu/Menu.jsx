"use client";

import React, { useState } from "react";
import styles from "./menu.module.css";
import { styleInjector } from "@/utils/style-injector";
import Image from "next/image";
import { joinClassNames } from "@/utils/join-class-names";

const Menu = ({ children, className }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className={className} onClick={(event) => event.stopPropagation()}>
      <div className={styles.menuToggle} onClick={() => setOpen((prevState) => !prevState)}>
        <Image src={open ? "close.svg" : "menu.svg"} alt="" width={22} height={22} />
      </div>
      <div className={joinClassNames(styles.menuContent, open ? styles.menuContentActive : undefined)}>
        {styleInjector(styles.menuItem, children)}
      </div>
    </div>
  );
};

export default Menu;