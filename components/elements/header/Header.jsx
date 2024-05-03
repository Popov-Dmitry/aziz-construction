import React from "react";
import styles from "./header.module.css";
import Image from "next/image";
import Button from "@/components/elements/button/Button";
import Link from "next/link";
import Menu from "../menu/Menu";
import MenuItems from "@/components/elements/menu-items/MenuItems";
import { getServicesMenu } from "@/lib/api";

const Header = async () => {
  const services = await getServicesMenu();

  return (
    <div className={styles.container} id="header">
      <div className={styles.content}>
        <div className={styles.wrapper}>
          <Link href="/" className={styles.logo}>
            <Image src="/logo.png" alt="Aziz Construction" fill />
          </Link>
          <MenuItems services={services} />
          <Button
            text="GET A QUOTE"
            variant="outlined"
            color="black"
            href="/contact-us"
            className={styles.getAQuoteButton}
          />
          <Menu className={styles.menu}>
            <MenuItems services={services} mobile />
          </Menu>
        </div>
      </div>
    </div>
  );
};

export default Header;