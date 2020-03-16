import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import PostItem from '../components/PostItem'
import SEO from '../components/Seo'

const PostsByTag = ({ data }) => {
  const postList = data.allMarkdownRemark.edges

  return (
    <Layout>
      <SEO title='Tags' />
      <h1>Tags</h1>
      <hr />
      {postList.map(({
        node: { 
          fields: { slug },
          frontmatter: { title, date, description, tags },
          timeToRead
        },
      }, i) => (
        <PostItem 
          key={i}
          slug={slug}
          title={title}
          date={date}
          description={description}
          timeToRead={timeToRead}
          tags={tags}
        />
      ))}
    </Layout>
  )
}

export const query = graphql`
  query PostsByTag($tag: String!) {
    allMarkdownRemark(filter: {frontmatter: {tags: {eq: $tag}}}) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            description
            tags
            title
            date(formatString: "MMMM DD, YYYY", locale: "en_us")
            image
          }
          timeToRead
        }
      }
    }
  }
`

export default PostsByTag