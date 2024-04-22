"use client";

import React, { useState } from "react";
import styles from "./gallery.module.css";
import { unslug } from "@/utils/unslug";
import Image from "next/image";
import Breadcrumbs from "@/components/breadcrumbs/Breadcrumbs";
import Lightbox from "yet-another-react-lightbox";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Download from "yet-another-react-lightbox/plugins/download";
import Share from "yet-another-react-lightbox/plugins/share";
import "yet-another-react-lightbox/styles.css";
import LightboxImage from "@/components/lightbox-image/LightboxImage";
import { useWindowSize } from "@react-hook/window-size";

// export async function generateMetadata({ params }) {
//   return {
//     title: `${unslug(params?.slug)} - Aziz Construction`,
//     description: unslug(params?.slug),
//     openGraph: {
//       title: `${unslug(params?.slug)} - Aziz Construction`,
//       url: `https://azizconstruction.com/gallery/${params?.slug}`
//     },
//     twitter: {
//       title: `${unslug(params?.slug)} - Aziz Construction`,
//       description: unslug(params?.slug),
//     },
//   }
// };

const Gallery = ({ params }) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [width, height] = useWindowSize();

  return (
    <>
      <Breadcrumbs useDefaultContainer />
      <div className={styles.container}>
        <div className={styles.title}>{unslug(params?.slug)}</div>
        <div className={styles.photos}>
          {[1, 2, 3, 4].map((value, index) => (
            <div
              key={value}
              className={styles.photo}
              onClick={() => {
                setCurrentIndex(index);
                setLightboxOpen(true);
              }}
            >
              <Image
                key={value}
                src={`/gallery/${params.slug}/${value}.jpeg`}
                alt=""
                fill
                objectFit="cover"
              />
            </div>
          ))}
        </div>
      </div>
      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        index={currentIndex}
        slides={[1, 2, 3, 4].map((value) => ({ src: `/gallery/${params.slug}/${value}.jpeg`, width, height }))}
        render={{ slide: LightboxImage }}
        plugins={[Fullscreen, Download, Share]}
      />
    </>
  );
};

export default Gallery;