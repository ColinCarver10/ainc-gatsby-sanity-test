const path = require("path")
const { createFilePath } = require("gatsby-source-filesystem")
const { paginate } = require('gatsby-awesome-pagination');

async function createNotePages(graphql, actions) {
  const { createPage } = actions;
  const result = await graphql(`
  {
    allSanityNotes {
      edges {
        node {
          slug {
            current
          }
          age
          linkToiframe
          _rawBody
        }
      }
    }
  }
  `);

  

  // Generate pages based on the data
  result.data.allSanityNotes.edges.forEach(({ node }) => {
    const slug = node.slug.current;
    const transformedSlug = slug
      .toLowerCase() // Convert to lowercase
      .replace(/\s+/g, '-') // Replace spaces with hyphens
      .replace(/[^a-z0-9-]/g, ''); // Remove non-alphanumeric characters
    const note = node
    createPage({
      path: `/notes/${transformedSlug}`,
      component: require.resolve('./src/templates/notes/notes.js'),
      context: { 
        slug: slug,
        note: note,
       },
    });
  });
}


async function createPodcastPages(graphql, actions) {
  const { createPage } = actions
  const result = await graphql(
    `
      {
        allFeedAnchorPodcast (
            sort: { fields: [isoDate], order: DESC }
          ) {
            totalCount
            nodes {
              title
          }
        }
      }
    `
  )

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  const posts = result.data.allFeedAnchorPodcast.nodes
  const postsPerPage = 10
  const numPages = Math.ceil(posts.length / postsPerPage)

  //pagination with import
  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/podcast` : `/podcast/${i + 1}`,
      component: path.resolve("./src/templates/podcast/podcast-list-template.js"),
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1,
      },
    })
  })
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  await createPodcastPages(graphql, actions)
  await createNotePages(graphql, actions)
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}

exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions
  deletePage(page)
  createPage({
    ...page,
    context: {
      ...page.context,
      currentDate: getCurrentDate(),
    },
  })
}

/**
 * Returns the current date in YYYY-MM-DD format
 */
function getCurrentDate() {
  const d = new Date();
  let month = (d.getMonth() + 1).toString();
  if (month.length < 2) {
    month = `0${month}`;
  }
  let day = d.getDate().toString();
  if (day.length < 2) {
    day = `0${day}`;
  }
  return `${d.getFullYear()}-${month}-${day}`;
}
