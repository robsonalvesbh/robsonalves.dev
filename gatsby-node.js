const {
  createFilePath
} = require('gatsby-source-filesystem')

const {
  createPageByPost,
  createPageByTags
} = require('./src/scripts/createPages')

// Add slug field to each post
exports.onCreateNode = ({
  node,
  actions,
  getNode
}) => {
  const {
    createNodeField
  } = actions

  if (node.internal.type === 'MarkdownRemark') {
    const slug = createFilePath({
      node,
      getNode,
      basePath: 'pages'
    })

    createNodeField({
      name: 'slug',
      node,
      value: `/${slug.slice(12)}`,
    })
  }
}

// create pages
exports.createPages = ({
  graphql,
  actions
}) => {
  const {
    createPage
  } = actions

  return graphql(`
    {
      allMarkdownRemark(sort: {order: DESC, fields: [frontmatter___date]}) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              tags
            }
          }
          next {
            frontmatter {
              title
            }
            fields {
              slug
            }
          }
          previous {
            fields {
              slug
            }
            frontmatter {
              title
            }
          }
        }
      }
    }
  `).then(result => {
    const nodes = result.data.allMarkdownRemark.edges

    // create pages for post
    createPageByPost(createPage, nodes)

    // create pages for tags
    createPageByTags(createPage, nodes)
  })
}