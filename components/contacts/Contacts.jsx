import React from "react";
import { joinClassNames } from "@/utils/join-class-names";
import styles from "./contacts.module.css";
import Link from "next/link";
import Image from "next/image";

const Contacts = ({ size = "sm" }) => {
  return (
    <div className={styles.links}>
      <Link
        className={joinClassNames(styles.link, styles.row)}
        href="tel:5104783188"
      >
        <Image src="phone.svg" alt="" width={18} height={18} />
        <div>(510) 478-3188</div>
      </Link>
      <Link
        className={joinClassNames(styles.link, styles.row)}
        href="mailto:info@azizconstruction.com"
      >
        <Image src="mail.svg" alt="" width={18} height={18} />
        <div>info@azizconstruction.com</div>
      </Link>
      <Link
        className={joinClassNames(styles.link, styles.row)}
        href="https://www.google.com/maps/place/Aziz+Construction/@37.5262686,-122.3594841,9z/data=!4m6!3m5!1s0xc5c2c91c9196b3b:0x116a5550123731a4!8m2!3d37.5262686!4d-122.3594841!16s%2Fg%2F11sv78lvh7?hl=en&entry=ttu"
      >
        <Image src="location-pin.svg" alt="" width={18} height={18} />
        <div>530 Lytton Ave 2nd Floor Palo Alto,<br />CA 94301</div>
      </Link>
      <div className={joinClassNames(styles.row, styles.sns)}>
        <Link
          href="https://www.google.com/maps/place/Aziz+Construction/@37.5262686,-122.3594841,9z/data=!4m6!3m5!1s0xc5c2c91c9196b3b:0x116a5550123731a4!8m2!3d37.5262686!4d-122.3594841!16s%2Fg%2F11sv78lvh7?hl=en&entry=ttu"
        >
          <Image
            src="google.svg"
            alt=""
            width={size === "sm" ? 18 : 28}
            height={size === "sm" ? 18 : 28}
          />
        </Link>
        <Link
          href="https://www.facebook.com/aziz.construction12/"
        >
          <Image
            src="facebook.svg"
            alt=""
            width={size === "sm" ? 22 : 34}
            height={size === "sm" ? 22 : 34}
          />
        </Link>
        <Link
          href="https://www.instagram.com/azizconstruction12/"
        >
          <Image
            src="instagram.svg"
            alt=""
            width={size === "sm" ? 20 : 30}
            height={size === "sm" ? 20 : 30}
          />
        </Link>
        <Link
          href="https://twitter.com/AzizUllahO56912"
        >
          <Image
            src="twitter.svg"
            alt=""
            width={size === "sm" ? 20 : 30}
            height={size === "sm" ? 20 : 30}
          />
        </Link>
        <Link
          href="https://youtube.com/@azizconstruction?si=sBsemdUwGbPuPByY"
        >
          <Image
            src="youtube.svg"
            alt=""
            width={size === "sm" ? 22 : 34}
            height={size === "sm" ? 22 : 34}
          />
        </Link>
        <Link
          href="https://www.yelp.com/biz/aziz-construction-newark"
        >
          <Image
            src="yelp.svg"
            alt=""
            width={size === "sm" ? 18 : 28}
            height={size === "sm" ? 18 : 28}
          />
        </Link>
      </div>
    </div>
  );
};

export default Contacts;