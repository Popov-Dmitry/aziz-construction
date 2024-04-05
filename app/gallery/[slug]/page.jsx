import React from "react";
import styles from "./gallery.module.css";
import { unslug } from "@/utils/unslug";
import Image from "next/image";

const Gallery = ({ params }) => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>{unslug(params?.slug)}</div>
      <div className={styles.photos}>
        {[1, 2, 3, 4].map((value) => (
          <div key={value} className={styles.photo}>
            <Image
              src={`/gallery/${params.slug}/${value}.jpeg`}
              alt=""
              fill
              objectFit="cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;