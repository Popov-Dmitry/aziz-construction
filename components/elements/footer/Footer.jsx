import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
import Link from "next/link";
import { joinClassNames } from "@/utils/join-class-names";
import Contacts from "@/components/elements/contacts/Contacts";
import { getServicesMenu } from "@/lib/api";

const Footer = async () => {
  const services = await getServicesMenu();

  return (
    <footer className={styles.container}>
      <div className={styles.wrapper}>
        <Link href="/" className={styles.logo}>
          <Image src="/logo.png" alt="Aziz Construction" fill />
        </Link>
        <div>
          <h2 className={styles.title}>Quick Links</h2>
          <div className={styles.line} />
          <div className={styles.links}>
            <Link
              className={styles.link}
              href="/"
            >
              Home
            </Link>
            <Link
              className={styles.link}
              href="/about-us"
            >
              About Us
            </Link>
            <Link
              className={styles.link}
              href="/our-services"
            >
              Services
            </Link>
            <Link
              className={styles.link}
              href="/gallery"
            >
              Gallery
            </Link>
            <Link
              className={styles.link}
              href="/contact-us"
            >
              Contact Us
            </Link>
            <div className={styles.row} style={{ marginTop: 20 }}>
              <Image src="/clipboard-list.svg" alt="" width={24} height={24} />
              <div className={styles.license}>License # 1103807</div>
            </div>
          </div>
        </div>
        <div>
          <h2 className={styles.title}>Services</h2>
          <div className={styles.line} />
          <div className={joinClassNames(styles.links, styles.gap)}>
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/our-services/${service.slug}`}
                className={styles.link}
              >
                {service.name}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h2 className={styles.title}>Contact Us</h2>
          <div className={styles.line} />
          <Contacts />
        </div>
      </div>
      <div className={styles.rights}>
        {new Date().getFullYear()} © All Rights Reserved by Aziz Construction
      </div>
    </footer>
  );
};

export default Footer;