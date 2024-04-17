import React from "react";
import { joinClassNames } from "@/utils/join-class-names";
import styles from "./sns.module.css";
import Link from "next/link";
import Google from "../icons/Google";
import Facebook from "../icons/Facebook";
import Instagram from "./Instagram";
import Twitter from "../icons/Twitter";
import Youtube from "../icons/Youtube";
import Yelp from "../icons/Yelp";

const Sns = ({ size = "sm", className }) => {
    return (
      <div className={joinClassNames(styles.row, styles.sns, className)}>
        <Link
          href="https://www.google.com/maps/place/Aziz+Construction/@37.5262686,-122.3594841,9z/data=!4m6!3m5!1s0xc5c2c91c9196b3b:0x116a5550123731a4!8m2!3d37.5262686!4d-122.3594841!16s%2Fg%2F11sv78lvh7?hl=en&entry=ttu"
        >
          <Google
            fill="#D53446"
            width={size === "sm" ? 18 : 26}
            height={size === "sm" ? 18 : 26}
          />
        </Link>
        <Link
          href="https://www.facebook.com/aziz.construction12/"
        >
          <Facebook
            fill="#D53446"
            width={size === "sm" ? 22 : 34}
            height={size === "sm" ? 22 : 34}
          />
        </Link>
        <Link
          href="https://www.instagram.com/azizconstruction12/"
        >
          <Instagram
            fill="#D53446"
            width={size === "sm" ? 20 : 26}
            height={size === "sm" ? 20 : 26}
          />
        </Link>
        <Link
          href="https://twitter.com/AzizUllahO56912"
        >
          <Twitter
            fill="#D53446"
            width={size === "sm" ? 20 : 30}
            height={size === "sm" ? 20 : 30}
          />
        </Link>
        <Link
          href="https://youtube.com/@azizconstruction?si=sBsemdUwGbPuPByY"
        >
          <Youtube
            fill="#D53446"
            width={size === "sm" ? 22 : 30}
            height={size === "sm" ? 22 : 30}
          />
        </Link>
        <Link
          href="https://www.yelp.com/biz/aziz-construction-newark"
        >
          <Yelp
            fill="#D53446"
            width={size === "sm" ? 18 : 28}
            height={size === "sm" ? 18 : 28}
          />
        </Link>
      </div>
    );
};

export default Sns;