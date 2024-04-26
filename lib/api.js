const POST_META_TAGS_GRAPHQL_FIELDS = `
  title
  shortDescription
  cover {
    url
  }
`;

const POST_GRAPHQL_FIELDS = `
  title
  slug
  shortDescription
  cover {
    url
  }
  categoriesCollection {
    items {
      slug
    }
  }
  publishDate
  minutesToRead
`;

const POSTS_CATEGORIES_GRAPHQL_FIELDS = `
  name
  slug
`;

const POSTS_CATEGORY_GRAPHQL_FIELDS = `
  name
  slug
  description
`;

const POST_DETAILS_GRAPHQL_FIELDS = `
  title
  slug
  cover {
    url
  }
  categoriesCollection {
    items {
      name
      slug
    }
  }
  publishDate
  minutesToRead
  body {
    json
  }
`;

async function fetchGraphQL(query, preview = false) {
  return fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // Switch the Bearer token depending on whether the fetch is supposed to retrieve live
        // Contentful content or draft content
        Authorization: `Bearer ${
          preview
            ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
            : process.env.CONTENTFUL_ACCESS_TOKEN
        }`
      },
      body: JSON.stringify({ query }),
      // Associate all fetches for articles with an "articles" cache tag so content can
      // be revalidated or updated from Contentful on publish
      next: { tags: ["articles"] }
    }
  ).then((response) => response.json());
}

function extractPostsEntries(fetchResponse) {
  return fetchResponse?.data?.blogPostCollection?.items;
}

export async function getAllPosts(
  limit = 100,
  category = undefined,
  slug_not = undefined,
  isDraftMode = false
) {
  console.log(category);
  let where = "";
  if (category !== undefined || slug_not !== undefined) {
    // where = {
    //   categories: {
    //     slug: `"${category}"`
    //   }
    // }
    // if (slug_not !== undefined) {
    //   where = { ... where, slug_not };
    // }
    where = " where:{";
    if (category !== undefined) {
      where += `categories:{slug: "${category}"}`;
    }
    if (slug_not !== undefined) {
      if (category !== undefined) {
        where += ", ";
      }
      where += `slug_not: "${slug_not}"`
    }
    where += "},";
  }
  // console.log(JSON.stringify(where));
  // console.log(`blogPostCollection(limit: ${limit},${category !== undefined ? ` where:{categories:{slug: "${category}"}},` : ""}`);
  const posts = await fetchGraphQL(
    `query {
        blogPostCollection(limit: ${limit},${where} preview: ${
      isDraftMode ? "true" : "false"
    }) {
          items {
            ${POST_GRAPHQL_FIELDS}
          }
        }
      }`,
    isDraftMode
  );
  return extractPostsEntries(posts);
}

export async function getPostMetaData(
  slug,
  isDraftMode = false
) {
  const post = await fetchGraphQL(
    `query {
        blogPostCollection(where:{slug: "${slug}"}, limit: 1, preview: ${
      isDraftMode ? "true" : "false"
    }) {
          items {
            ${POST_META_TAGS_GRAPHQL_FIELDS}
          }
        }
      }`,
    isDraftMode
  );
  return extractPostsEntries(post)[0];
}

export async function getPost(
  slug,
  isDraftMode = false
) {
  const post = await fetchGraphQL(
    `query {
        blogPostCollection(where:{slug: "${slug}"}, limit: 1, preview: ${
      isDraftMode ? "true" : "false"
    }) {
          items {
            ${POST_DETAILS_GRAPHQL_FIELDS}
          }
        }
      }`,
    isDraftMode
  );
  return extractPostsEntries(post)[0];
}

function extractCategoriesEntries(fetchResponse) {
  return fetchResponse?.data?.blogPostCategoryCollection?.items;
}

export async function getCategories(
  slug,
  isDraftMode = false
) {
  const categories = await fetchGraphQL(
    `query {
        blogPostCategoryCollection(preview: ${
      isDraftMode ? "true" : "false"
    }) {
          items {
            ${POSTS_CATEGORIES_GRAPHQL_FIELDS}
          }
        }
      }`,
    isDraftMode
  );
  return extractCategoriesEntries(categories);
}

export async function getCategory(
  slug,
  isDraftMode = false
) {
  const categories = await fetchGraphQL(
    `query {
        blogPostCategoryCollection(where:{slug: "${slug}"}, limit: 1, preview: ${
      isDraftMode ? "true" : "false"
    }) {
          items {
            ${POSTS_CATEGORY_GRAPHQL_FIELDS}
          }
        }
      }`,
    isDraftMode
  );
  return extractCategoriesEntries(categories)[0];
}