const path = require("path")
const { createFilePath } = require("gatsby-source-filesystem")
const { paginate } = require('gatsby-awesome-pagination');

async function createBlogPostPages(graphql, actions) {
  const { createPage } = actions;
  const result = await graphql(`
  {
    allSanityBlog {
      edges {
        node {
          date
          slug {
            current
          }
          title
          previewText
          body
          thumbnail {
            asset {
              url
            }
          }
          reference {
            name
            picture {
              asset {
                gatsbyImageData(height: 54, width: 54)
              }
            }
            title
          }
        }
      }
    }
  }
  `);

  // console.log(JSON.stringify(result, null, 4));

  if (result.errors) throw result.errors;

  

  const postEdges = result.data.allSanityBlog.edges;

  console.log("Post found: " + postEdges.length)
  console.log("First Post: "+ postEdges[0].node.title)

  postEdges.forEach((edge) => {
      // console.log("Edge: " + edge)
      // console.log("types: " + typeof(edge.node.id))
      // console.log("Edge ID: " + edge.node)
      // console log the edge object


      // const id = edge.node.id;
      const path = `/blog/${edge.node.slug.current}`;

      createPage({
        path: path,
        component: require.resolve("./src/templates/blog/blog-template.js"),
        context: { 
          post: edge.node, 
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
  await createBlogPostPages(graphql, actions)
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
