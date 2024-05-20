import React from "react";
import styles from "./post-category.module.css";
import Breadcrumbs from "@/components/elements/breadcrumbs/Breadcrumbs";
import { getAllPosts, getCategory } from "@/lib/api";
import PostCard from "@/components/elements/post-card/PostCard";
import { unslug } from "@/utils/unslug";

export async function generateMetadata({ params }) {
  return {
    title: `${unslug(params?.categorySlug)} - Aziz Construction`,
    openGraph: {
      title: `${unslug(params?.categorySlug)} - Aziz Construction`,
      url: `https://azizconstruction.com/blog/${params?.categorySlug}`
    },
    twitter: {
      title: `${unslug(params?.categorySlug)} - Aziz Construction`
    }
  };
}

const PostCategory = async ({ params }) => {
  const { name, description } = await getCategory(params?.categorySlug);
  const posts = await getAllPosts(100, [params?.categorySlug]);

  return (
    <>
      <Breadcrumbs useDefaultContainer />
      <div className={styles.container}>
        <div>
          <h1 className={styles.title}>{name}</h1>
          <div className={styles.description}>{description}</div>
        </div>
        <div className={styles.posts}>
          {posts?.map((post) => (
            <PostCard key={post.slug} categorySlug={params?.categorySlug} {...post} />
          ))}
        </div>
      </div>
    </>
  );
};

export default PostCategory;