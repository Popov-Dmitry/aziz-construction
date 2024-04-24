import React from "react";
import { unslug } from "@/utils/unslug";
import Breadcrumbs from "@/components/elements/breadcrumbs/Breadcrumbs";
import "yet-another-react-lightbox/styles.css";
import GallerySection from "@/components/sections/gallery-section/GallerySection";

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
      <GallerySection slug={params?.slug} />
    </>
  );
};

export default Gallery;