import React from "react";
import styles from "./gallery.module.css";
import { unslug } from "@/utils/unslug";
import Image from "next/image";
import Breadcrumbs from "@/components/breadcrumbs/Breadcrumbs";

export async function generateMetadata({ params }) {
  return {
    title: `${unslug(params?.slug)} - Aziz Construction`,
    description: unslug(params?.slug),
    openGraph: {
      title: `${unslug(params?.slug)} - Aziz Construction`,
      url: `https://azizconstruction.com/gallery/${params?.slug}`
    },
    twitter: {
      title: `${unslug(params?.slug)} - Aziz Construction`,
      description: unslug(params?.slug),
    },
  }
};

const Gallery = ({ params }) => {
  return (
    <>
      <Breadcrumbs useDefaultContainer />
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
    </>
  );
};

export default Gallery;