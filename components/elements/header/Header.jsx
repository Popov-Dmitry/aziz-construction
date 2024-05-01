"use client";

import React from "react";
import styles from "./header.module.css";
import Image from "next/image";
import Button from "@/components/elements/button/Button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Menu from "../menu/Menu";
import MenuItems from "@/components/elements/menu-items/MenuItems";

const Header = () => {
  const path = usePathname();

  return (
    <div className={styles.container} id="header">
      <div className={styles.content}>
        <div className={styles.wrapper}>
          <Link href="/" className={styles.logo}>
            <Image src="/logo.png" alt="Aziz Construction" fill />
          </Link>
          <MenuItems path={path} />
          <Button
            text="GET A QUOTE"
            variant="outlined"
            color="black"
            href="/contact-us"
            className={styles.getAQuoteButton}
          />
          <Menu className={styles.menu}>
            <MenuItems path={path} mobile />
          </Menu>
        </div>
      </div>
    </div>
  );
};

export default Header;