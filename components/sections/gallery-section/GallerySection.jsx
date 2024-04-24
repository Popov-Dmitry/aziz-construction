"use client"

import React, { useState } from "react";
import styles from "./gallery-section.module.css";
import { unslug } from "@/utils/unslug";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import LightboxImage from "@/components/elements/lightbox-image/LightboxImage";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Download from "yet-another-react-lightbox/plugins/download";
import Share from "yet-another-react-lightbox/plugins/share";
import { useWindowSize } from "@react-hook/window-size";

const GallerySection = ({ slug }) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [width, height] = useWindowSize();

  return (
    <>
      <div className={styles.container}>
        <div className={styles.title}>{unslug(slug)}</div>
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
                src={`/gallery/${slug}/${value}.jpeg`}
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
        slides={[1, 2, 3, 4].map((value) => ({ src: `/gallery/${slug}/${value}.jpeg`, width, height }))}
        render={{ slide: LightboxImage }}
        plugins={[Fullscreen, Download, Share]}
      />
    </>
  );
};

export default GallerySection;