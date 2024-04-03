"use client";

import React from "react";
import styles from "./header.module.css";
import Image from "next/image";
import Button from "@/components/button/Button";
import { joinClassNames } from "@/utils/join-class-names";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const path = usePathname();
  console.log(path);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.wrapper}>
          <Link href="/">
            <Image src={"/logo.png"} alt={"Aziz Construction"} width={112} height={91} />
          </Link>
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
              className={joinClassNames(styles.element, path === "/our-services" ? styles.active : undefined)}
              href="/our-services"
            >
              Our Services
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
          <Button text="GET A QUOTE" variant="outlined" color="black" />
        </div>
      </div>
    </div>
  );
};

export default Header;