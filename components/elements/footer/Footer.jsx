import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
import Link from "next/link";
import { joinClassNames } from "@/utils/join-class-names";
import Contacts from "@/components/elements/contacts/Contacts";

const Footer = () => {
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
            <Link
              className={styles.link}
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