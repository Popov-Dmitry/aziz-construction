import React from "react";
import styles from "./blog.module.css";
import Breadcrumbs from "@/components/elements/breadcrumbs/Breadcrumbs";
import { getAllPosts } from "@/lib/api";
import PostCard from "@/components/elements/post-card/PostCard";

export async function generateMetadata({ params }) {
  return {
    title: "Blog - Aziz Construction",
    openGraph: {
      title: "Blog - Aziz Construction",
      url: "https://azizconstruction.com/blog/"
    },
    twitter: {
      title: "Blog - Aziz Construction"
    }
  };
};

const Blog = async () => {
  const posts = await getAllPosts();

  return (
    <>
      <Breadcrumbs useDefaultContainer />
      <div className={styles.container}>
        <h1 className={styles.title}>Archives</h1>
        <div className={styles.posts}>
          {posts.map((post) => (
            <PostCard key={post.slug} {...post} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Blog;