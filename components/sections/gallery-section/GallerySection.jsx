"use client"

import React, { useState } from "react";
import styles from "./gallery-section.module.css";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import LightboxImage from "@/components/elements/lightbox-image/LightboxImage";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Download from "yet-another-react-lightbox/plugins/download";
import Share from "yet-another-react-lightbox/plugins/share";
import { useWindowSize } from "@react-hook/window-size";
import Button from "@/components/elements/button/Button";

const GallerySection = ({ gallery }) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [width, height] = useWindowSize();

  if (!gallery) {
    return ;
  }

  return (
    <>
      <div className={styles.container}>
        <div className={styles.title}>{gallery.name}</div>
        {gallery.renderLink && (
          <Button
            text="View 3D Render"
            href={gallery.renderLink}
            newTab
            className={styles.button}
          />
        )}
        <div className={styles.photos}>
          {gallery.photosCollection.items.map((value, index) => (
            <div
              key={value.url}
              className={styles.photo}
              onClick={() => {
                setCurrentIndex(index);
                setLightboxOpen(true);
              }}
            >
              <Image
                src={value.url}
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
        slides={gallery.photosCollection.items.map((value) => ({ src: value.url, width, height }))}
        render={{ slide: LightboxImage }}
        plugins={[Fullscreen, Download, Share]}
      />
    </>
  );
};

export default GallerySection;