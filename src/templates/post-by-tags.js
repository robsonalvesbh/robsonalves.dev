import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import PostItem from '../components/PostItem'
import SEO from '../components/Seo'
import PageTitle from '../components/PageTitle'

const PostsByTag = ({ data, pageContext }) => {
  const postList = data.allMarkdownRemark.edges

  return (
    <Layout>
      <SEO title='Tags' />
      <PageTitle>TAG: {pageContext.tag}</PageTitle>
      

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