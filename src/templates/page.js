import React, { Component } from "react"
import { graphql } from "gatsby"
import Layout from '../components/layout'
import SEO from '../components/seo'
import PageHeader from '../components/page-header'

class Page extends Component {
  render() {
    const StaticPage = this.props.data.wordpressPage
    return (
      <Layout header={
        <PageHeader title={StaticPage.title} />
      }>
        <SEO title={StaticPage.title} />
        <div dangerouslySetInnerHTML={{__html: StaticPage.content}}></div>
      </Layout>
    )
  }
}

export default Page

export const pageQuery = graphql`
  query($id: String!) {
    wordpressPage(id: { eq: $id }) {
      title
      content
    }
    site {
      id
      siteMetadata {
        title
        description
      }
    }
  }
`
