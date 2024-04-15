"use client";

import React from "react";
import styles from "./header.module.css";
import Image from "next/image";
import Button from "@/components/button/Button";
import { joinClassNames } from "@/utils/join-class-names";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Dropdown from "@/components/dropdown/Dropdown";
import Menu from "../menu/Menu";

const menuItems = (path, mobile) => (
          <div className={styles.elements}>
            <Link
              className={joinClassNames(styles.element, path === "/" ? styles.active : undefined)}
              href="/"
            >
              Home
            </Link>
            <Link
              className={joinClassNames(styles.element, path === "/about-us" ? styles.active : undefined)}
              href="/about-us"
            >
              About Us
            </Link>
            <Link
              className={mobile ? styles.disabledLink : undefined}
              href="/our-services"
              style={{ display: "flex", flexDirection: "column", padding: 0 }}
            >
              <Dropdown
                title="Our Services"
                arrowColor={path.startsWith("/our-services")
                  ? mobile ? "#FFFFFF" : "#D53446"
                  : "#000000"}
                  className={joinClassNames(styles.element, path.startsWith("/our-services") ? styles.active : undefined)}
              >
                <Link
                  href="/our-services/new-construction"
                >
                  New Construction
                </Link>
                <Link
                  className={styles.link}
                  href="/our-services/full-house-renovation"
                >
                  Full House Renovation
                </Link>
                <Link
                  className={styles.link}
                  href="/our-services/adu-construction"
                >
                  ADU Construction
                </Link>
                <Link
                  className={styles.link}
                  href="/our-services/kitchen-remodeling"
                >
                  Kitchen Remodeling
                </Link>
                <Link
                  className={styles.link}
                  href="/our-services/bathroom-remodeling"
                >
                  Bathroom Remodeling
                </Link>
                <Link
                  className={styles.link}
                  href="/our-services/addition-services"
                >
                  Addition Services
                </Link>
              </Dropdown>
            </Link>
            <Link
              className={joinClassNames(styles.element, path === "/blog" ? styles.active : undefined)}
              href="/blog"
            >
              Blog
            </Link>
            <Link
              className={joinClassNames(styles.element, path.startsWith("/gallery") ? styles.active : undefined)}
              href="/gallery"
            >
              Gallery
            </Link>
            <Link
              className={joinClassNames(styles.element, path === "/contact-us" ? styles.active : undefined)}
              href="/contact-us"
            >
              Contact Us
            </Link>
          </div>
);

const Header = () => {
  const path = usePathname();

  return (
    <div className={styles.container} id="header">
      <div className={styles.content}>
        <div className={styles.wrapper}>
          <Link href="/">
            <Image src="/logo.png" alt="Aziz Construction" width={112} height={91} />
          </Link>
          {menuItems(path)}
          <Button text="GET A QUOTE" variant="outlined" color="black" href="/get-a-quote" className={styles.getAQuoteButton} />
          <Menu className={styles.menu}>
            {menuItems(path, true).props.children}
          </Menu>
        </div>
      </div>
    </div>
  );
};

export default Header;