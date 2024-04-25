import React from "react";
import styles from "./blog-post.module.css";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Breadcrumbs from "@/components/elements/breadcrumbs/Breadcrumbs";
import { getPost, getPostMetaData } from "@/lib/api";
import Image from "next/image";
import Category from "@/components/elements/category/Category";
import SnsShareSection from "@/components/sections/sns-share-section/SnsShareSection";

export async function generateMetadata({ params }) {
  const { title, shortDescription, cover } = await getPostMetaData(params?.postSlug);

  return {
    title: `${title} - Aziz Construction`,
    description: shortDescription,
    openGraph: {
      title: `${title} - Aziz Construction`,
      url: `https://azizconstruction.com/blog/${params?.postSlug}`,
      images: [cover.url]
    },
    twitter: {
      title: `${title} - Aziz Construction`,
      description: shortDescription
    }
  };
}

const BlogPost = async ({ params }) => {
  const {
    title,
    cover,
    categoriesCollection,
    publishDate,
    minutesToRead,
    body
  } = await getPost(params?.postSlug);

  return (
    <>
      <Breadcrumbs useDefaultContainer />
      <div className={styles.container}>
        <div className={styles.categories}>
          {categoriesCollection.items.map((category) => (
            <Category key={category.slug} {...category}/>
          ))}
        </div>
        <div className={styles.postTitle}>{title}</div>
        <div className={styles.postInfo}>
          <div>{new Date(publishDate).toLocaleDateString()}</div>
          <div>•</div>
          <div>{minutesToRead} min read</div>
        </div>
        <div className={styles.postImage}>
          <Image src={cover.url} alt="" fill objectFit="cover"/>
        </div>
        <div className={styles.postContent}>
          {documentToReactComponents(body?.json)}
        </div>
        <SnsShareSection className={styles.snsShare} />
      </div>
    </>
  );
};

export default BlogPost;