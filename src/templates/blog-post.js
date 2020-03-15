import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import Post from '../components/Post'
import SEO from '../components/Seo'

const BlogPost = ({ data, pageContext }) => {
  const {
    fields: { slug },
    timeToRead,
    html,
    frontmatter: { title, date, description, image, tags }
  } = data.markdownRemark

  const { nextPost, previousPost } = pageContext

  return (
    <Layout>
      <SEO 
        title={title}
        description={description}
        image={image}
      />
      <Post 
        date={date}
        timeToRead={timeToRead}
        title={title}
        html={html}
        tags={tags}
        nextPost={nextPost}
        previousPost={previousPost}
        slug={slug}
      />
    </Layout>
  )
}

export const query = graphql`
  query Post($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      fields {
        slug
      }
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY", locale: "en_us"),
        tags
        description
        image
      }
      timeToRead
      html
    }
  }
`

export default BlogPost