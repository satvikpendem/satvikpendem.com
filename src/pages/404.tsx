import React from "react"
import { graphql, PageProps } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

interface Props {
  data: any
  location: any
}

const NotFoundPage = ({ data, location }: PageProps<any>) => {
  const siteTitle: string = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title="404: Not Found"
        description="404: Page not found"
        lang="en"
        meta={[]}
      />
      <h1>Not Found</h1>
      <p>
        I can't find the page you're looking for. <a href="/">Go Home</a>
      </p>
    </Layout>
  )
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
