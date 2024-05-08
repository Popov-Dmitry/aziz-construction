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
  slug,
  showOnBlogPage
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

const SERVICE_MENU_GRAPHQL_FIELDS = `
  name
  slug
`;

const SERVICE_CARD_GRAPHQL_FIELDS = `
  name
  slug
  shortDescription
  cover {
    url
  }
`;

const SERVICE_PAGE_GRAPHQL_FIELDS = `
  name
  heading
  description
  cover {
    url
  }
  fIrstSectionHeading
  firstSectionDescription
  firstSectionImage {
    url
  }
  secondSectionTitle
  secondSectionDescription
  secondSectionImage {
    url
  }
  thirdSectionTitle
  thirdSectionDescription
  thirdSectionImage {
    url
  }
  fourthSectionTitle
  fourthSectionDescription
  fourthSectionImage {
    url
  }
  fifthSectionTitle
  fifthSectionDescription
  fifthSectionImage {
    url
  }
  faqSectionCollection {
    items {
      title
      description
    }
  }
`;

const GALLERIES_GRAPHQL_FIELDS = `
  name
  url
  photosCollection(limit: 1) {
    items {
      url
    }
  }
`;

const GALLERY_GRAPHQL_FIELDS = `
  name
  renderLink
  photosCollection {
    items {
      url
    }
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
      next: { tags: ["articles"], revalidate: 300 }
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
  let where = "";
  if (category !== undefined || slug_not !== undefined) {
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

function extractServicesEntries(fetchResponse) {
  return fetchResponse?.data?.serviceCollection?.items;
}

export async function getServicesMenu(
  isDraftMode = false
) {
  const services = await fetchGraphQL(
    `query {
        serviceCollection(preview: ${
      isDraftMode ? "true" : "false"
    }) {
          items {
            ${SERVICE_MENU_GRAPHQL_FIELDS}
          }
        }
      }`,
    isDraftMode
  );
  return extractServicesEntries(services);
}

export async function getServices(
  isDraftMode = false
) {
  const services = await fetchGraphQL(
    `query {
        serviceCollection(where: { showOnWhatWeOfferSections: true }, preview: ${
      isDraftMode ? "true" : "false"
    }) {
          items {
            ${SERVICE_CARD_GRAPHQL_FIELDS}
          }
        }
      }`,
    isDraftMode
  );
  return extractServicesEntries(services);
}

export async function getService(
  slug,
  isDraftMode = false
) {
  const services = await fetchGraphQL(
    `query {
        serviceCollection(where: { slug: "${slug}" }, preview: ${
      isDraftMode ? "true" : "false"
    }) {
          items {
            ${SERVICE_PAGE_GRAPHQL_FIELDS}
          }
        }
      }`,
    isDraftMode
  );
  return extractServicesEntries(services)[0];
}

function extractGalleriesEntries(fetchResponse) {
  return fetchResponse?.data?.galleryItemCollection?.items;
}

export async function getGalleries(
  isDraftMode = false
) {
  const galleries = await fetchGraphQL(
    `query {
        galleryItemCollection(preview: ${
      isDraftMode ? "true" : "false"
    }) {
          items {
            ${GALLERIES_GRAPHQL_FIELDS}
          }
        }
      }`,
    isDraftMode
  );
  return extractGalleriesEntries(galleries);
}

export async function getGallery(
  slug,
  isDraftMode = false
) {
  const galleries = await fetchGraphQL(
    `query {
        galleryItemCollection(where: { url: "${slug}" }, preview: ${
      isDraftMode ? "true" : "false"
    }) {
          items {
            ${GALLERY_GRAPHQL_FIELDS}
          }
        }
      }`,
    isDraftMode
  );
  return extractGalleriesEntries(galleries)[0];
}