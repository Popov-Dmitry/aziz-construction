import React from "react";
import styles from "./gallery.module.css";
import Image from "next/image";
import Link from "next/link";

const Gallery = () => {
  return (
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
  );
};

export default Gallery;