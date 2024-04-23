const ARTICLE_GRAPHQL_FIELDS = `
  title
  slug
  shortDescription
  cover {
    url
  }
  publishDate
  minutesToRead
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
  isDraftMode = false
) {
  const articles = await fetchGraphQL(
    `query {
        blogPostCollection(limit: ${limit}, preview: ${
      isDraftMode ? "true" : "false"
    }) {
          items {
            ${ARTICLE_GRAPHQL_FIELDS}
          }
        }
      }`,
    isDraftMode
  );
  return extractPostsEntries(articles);
}

export async function getPost(
  slug,
  isDraftMode = false
) {
  const article = await fetchGraphQL(
    `query {
        knowledgeArticleCollection(where:{slug: "${slug}"}, limit: 1, preview: ${
      isDraftMode ? "true" : "false"
    }) {
          items {
            ${ARTICLE_GRAPHQL_FIELDS}
          }
        }
      }`,
    isDraftMode
  );
  return extractPostsEntries(article)[0];
}