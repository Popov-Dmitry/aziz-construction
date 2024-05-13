import React from "react";
import { joinClassNames } from "@/utils/join-class-names";
import styles from "./contacts.module.css";
import Link from "next/link";
import Image from "next/image";
import Sns from "../sns/Sns";

const Contacts = ({ size = "sm" }) => {
  return (
    <div className={styles.links}>
      <Link
        className={joinClassNames(styles.link, styles.row)}
        href="tel:+16507875802"
      >
        <Image src="/phone.svg" alt="" width={18} height={18} />
        <div>(650) 787-5802</div>
      </Link>
      <Link
        className={joinClassNames(styles.link, styles.row)}
        href="mailto:info@azizconstruction.com"
      >
        <Image src="/mail.svg" alt="" width={18} height={18} />
        <div>info@azizconstruction.com</div>
      </Link>
      <Link
        className={joinClassNames(styles.link, styles.row)}
        href="https://www.google.com/maps/place/Aziz+Construction/@37.5262686,-122.3594841,9z/data=!4m6!3m5!1s0xc5c2c91c9196b3b:0x116a5550123731a4!8m2!3d37.5262686!4d-122.3594841!16s%2Fg%2F11sv78lvh7?hl=en&entry=ttu"
      >
        <Image src="/location-pin.svg" alt="" width={18} height={18} />
        <div>530 Lytton Ave 2nd Floor Palo Alto, CA 94301</div>
      </Link>
      <div className={joinClassNames(styles.link, styles.row)}>
        <Image src="/clock.svg" alt="" width={18} height={18} />
        <div>8:00 AM - 8:00 PM</div>
      </div>
      <Sns size={size} />
    </div>
  );
};

export default Contacts;