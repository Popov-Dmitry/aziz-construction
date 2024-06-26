import React from "react";
import styles from "./blog-post.module.css";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Breadcrumbs from "@/components/elements/breadcrumbs/Breadcrumbs";
import { getAllPosts, getPost, getPostMetaData } from "@/lib/api";
import Image from "next/image";
import Category from "@/components/elements/category/Category";
import SnsShareSection from "@/components/sections/sns-share-section/SnsShareSection";
import PostCard from "@/components/elements/post-card/PostCard";

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
    shortDescription,
    author,
    categoriesCollection,
    publishDate,
    minutesToRead,
    body
  } = await getPost(params?.postSlug);
  const relativePosts = await getAllPosts(
    2,
    categoriesCollection.items?.map((category) => category.slug),
    params?.postSlug
  );

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://azizconstruction.com/blog/${params.categorySlug}/${params.postSlug}`
    },
    "headline": `${title}`,
    "description": `${shortDescription}`,
    "image": `${cover}`,
    "author": {
      "@type": "Person",
      "name": `${author}`,
      "url": "https://azizconstruction.com/about-us"
    },
    "publisher": {
      "@type": "Organization",
      "name": "",
      "logo": {
        "@type": "ImageObject",
        "url": ""
      }
    },
    "datePublished": `${new Date(publishDate).toISOString().split('T')[0]}`
  };

  return (
    <>
      <Breadcrumbs useDefaultContainer />
      <div className={styles.container}>
        <div className={styles.categories}>
          {categoriesCollection.items.map((category) => (
            <Category key={category.slug} {...category} />
          ))}
        </div>
        <h1 className={styles.postTitle}>{title}</h1>
        <div className={styles.postInfo}>
          <div>{new Date(publishDate).toLocaleDateString()}</div>
          <div>•</div>
          <div>{minutesToRead} min read</div>
        </div>
        <div className={styles.postImage}>
          <Image src={cover.url} alt="" fill className={styles.fitCover} />
        </div>
        <div className={styles.postContent}>
          {documentToReactComponents(body?.json)}
        </div>
        <SnsShareSection className={styles.snsShare} />
        {relativePosts?.length > 0 && (
          <div className={styles.relativePostsContainer}>
            <div className={styles.relativePostsTitle}>See more</div>
            <div className={styles.relativePosts}>
              {relativePosts.map((post) => (
                <PostCard
                  key={post.slug}
                  {...post}
                  categorySlug={categoriesCollection.items[0].slug}
                />
              ))}
            </div>
          </div>
        )}
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
};

export default BlogPost;