"use client";

import React from "react";
import styles from "./menu-items.module.css";
import Link from "next/link";
import { joinClassNames } from "@/utils/join-class-names";
import Dropdown from "@/components/elements/dropdown/Dropdown";
import { usePathname } from "next/navigation";

const Items = ({ path, mobile, services }) => (
  <>
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
    <div className={styles.dropdown}>
      <Dropdown
        title="Our Services"
        titleHref="/our-services"
        arrowColor={path.startsWith("/our-services")
          ? mobile ? "#FFFFFF" : "#D53446"
          : "#000000"}
        className={joinClassNames(styles.element, path.startsWith("/our-services") ? styles.active : undefined)}
      >
        {services?.map((service) => (
          <Link
            key={service.slug}
            href={`/our-services/${service.slug}`}
          >
            {service.name}
          </Link>
        ))}
      </Dropdown>
    </div>
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
  </>
);

const MenuItems = async ({ services, mobile }) => {
  const path = usePathname();


  if (mobile) {
    return <Items path={path} mobile services={services} />;
  }

  return (
    <div className={styles.elements}>
      <Items path={path} services={services} />
    </div>
  );
};

export default MenuItems;