import React from "react";
import styles from "./gallery.module.css";
import Breadcrumbs from "@/components/elements/breadcrumbs/Breadcrumbs";
import GalleryCard from "@/components/elements/gallery-card/GalleryCard";

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
}

const Gallery = () => {
  return (
    <>
      <Breadcrumbs useDefaultContainer />
      <div className={styles.container}>
        <div className={styles.row}>
          <GalleryCard
            title="Kitchen Remodel"
            src="/gallery/Kitchen-Remodel.jpeg"
            href="/gallery/kitchen-remodel/"
          />
          <GalleryCard
            title="Bathroom Remodel"
            src="/gallery/Bathroom-Remodel.jpeg"
            href="/gallery/bathroom/"
          />
        </div>
        <div className={styles.row}>
          <GalleryCard
            title="ADU"
            src="/gallery/ADU1.jpeg"
            href="/gallery/adu/"
          />
          <GalleryCard
            title="ADU"
            src="/gallery/ADU2.jpeg"
            href="/gallery/adu/"
          />
        </div>
      </div>
    </>
  );
};

export default Gallery;