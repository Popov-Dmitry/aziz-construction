import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
import Link from "next/link";
import { joinClassNames } from "@/utils/join-class-names";

const Footer = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.wrapper}>
        <Link href="/" style={{ margin: 30 }}>
          <Image src={"/logo.png"} alt={"Aziz Construction"} width={251} height={204} />
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
              <Image src="clipboard-list.svg" alt="" width={24} height={24} />
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
              href="/new-construction"
            >
              New Construction
            </Link>
            <Link
              className={styles.link}
              href="/full-house-renovation"
            >
              Full House Renovation
            </Link>
            <Link
              className={styles.link}
              href="/adu-construction"
            >
              ADU Construction
            </Link>
            <Link
              className={styles.link}
              href="/kitchen-remodeling"
            >
              Kitchen Remodeling
            </Link>
            <Link
              className={styles.link}
              href="/bathroom-remodeling"
            >
              Bathroom Remodeling
            </Link>
            <Link
              className={styles.link}
              href="addition-services"
            >
              Addition Services
            </Link>
          </div>
        </div>
        <div>
          <h2 className={styles.title}>Contact Us</h2>
          <div className={styles.line} />
          <div className={joinClassNames(styles.links, styles.gap)}>
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
                <Image src="google.svg" alt="" width={18} height={18} />
              </Link>
              <Link
                href="https://www.facebook.com/aziz.construction12/"
              >
                <Image src="facebook.svg" alt="" width={22} height={22} />
              </Link>
              <Link
                href="https://www.instagram.com/azizconstruction12/"
              >
                <Image src="instagram.svg" alt="" width={20} height={20} />
              </Link>
              <Link
                href="https://twitter.com/AzizUllahO56912"
              >
                <Image src="twitter.svg" alt="" width={20} height={20} />
              </Link>
              <Link
                href="https://youtube.com/@azizconstruction?si=sBsemdUwGbPuPByY"
              >
                <Image src="youtube.svg" alt="" width={22} height={22} />
              </Link>
              <Link
                href="https://www.yelp.com/biz/aziz-construction-newark"
              >
                <Image src="yelp.svg" alt="" width={18} height={18} />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.rights}>
        2023 © All Rights Reserved by Aziz Construction
      </div>
    </footer>
  );
};

export default Footer;