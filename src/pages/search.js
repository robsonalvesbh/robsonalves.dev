import React from 'react'

import SEO from '../components/Seo'
import Layout from '../components/Layout'

import Search from '../components/Search'

const SearchPage = () => (
  <Layout>
    <SEO title="Search" />
    <Search />
  </Layout>
)

export default SearchPage
