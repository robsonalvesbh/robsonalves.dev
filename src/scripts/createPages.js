const path = require('path')

exports.createPageByPost = (createPage, nodes) => {
  nodes.map(({
    node,
    next,
    previous
  }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve('./src/templates/blog-post.js'),
      context: {
        slug: node.fields.slug,
        nextPost: previous,
        previousPost: next,
      }
    })
  })
}

exports.createPageByTags = (createPage, nodes) => {
  const tags = []

  nodes.map(({
    node
  }) => tags.push(...node.frontmatter.tags))

  const uniqueTags = [...new Set(tags)]

  uniqueTags.map(tag => {
    createPage({
      path: `/tags/${tag.toLowerCase()}`,
      component: path.resolve('./src/templates/post-by-tags.js'),
      context: {
        tag: tag,
      }
    })
  })
}