import React from "react";
import styles from "./gallery.module.css";
import Breadcrumbs from "@/components/elements/breadcrumbs/Breadcrumbs";
import GalleryCard from "@/components/elements/gallery-card/GalleryCard";
import { getGalleries } from "@/lib/api";

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

const Galleries = async () => {
  const galleries = await getGalleries();

  if (!galleries) {
    return;
  }

  return (
    <>
      <Breadcrumbs useDefaultContainer />
      <div className={styles.container}>
        <div className={styles.grid}>
          {galleries.map((gallery) => (
            <GalleryCard
              key={gallery.url}
              title={gallery.name}
              src={gallery.photosCollection.items[0].url}
              href={`/gallery/${gallery.url}`}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Galleries;