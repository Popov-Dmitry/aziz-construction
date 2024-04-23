import React from "react";
import styles from "./gallery.module.css";
import Image from "next/image";
import Link from "next/link";
import Breadcrumbs from "@/components/elements/breadcrumbs/Breadcrumbs";

export async function generateMetadata({ params }) {
  return {
    title: "Gallery - Aziz Construction",
    openGraph: {
      title: "Gallery - Aziz Construction",
      url: "https://azizconstruction.com/gallery/"
    },
    twitter: {
      title: "Gallery - Aziz Construction"
    }
  };
};

const Gallery = () => {
  return (
    <>
      <Breadcrumbs useDefaultContainer />
      <div className={styles.container}>
        <div className={styles.row}>
          <Link className={styles.link} href="/gallery/kitchen-remodel/">
            <Image src="/gallery/Kitchen-Remodel.jpeg" alt="" fill />
          </Link>
          <Link className={styles.link} href="/gallery/bathroom/">
            <Image src="/gallery/Bathroom-Remodel.jpeg" alt="" fill />
          </Link>
        </div>
        <div className={styles.row}>
          <Link className={styles.link} href="/gallery/adu/">
            <Image src="/gallery/ADU1.jpeg" alt="" fill />
          </Link>
          <Link className={styles.link} href="/gallery/adu/">
            <Image src="/gallery/ADU2.jpeg" alt="" fill />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Gallery;