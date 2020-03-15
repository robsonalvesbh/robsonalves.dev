import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import SEO from '../components/Seo'
import Layout from '../components/Layout'
import PostItem from '../components/PostItem'


const IndexPage = () => {
  const { allMarkdownRemark } = useStaticQuery(graphql`
    query PostList {
      allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}, limit: 8) {
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
  `)

  const postList = allMarkdownRemark.edges

  return (
    <Layout>
      <SEO title="Home" />
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

export default IndexPage