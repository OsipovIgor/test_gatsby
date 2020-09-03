import React from "react"
import { StaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Article from '../components/Article'

const IndexPage = () => (
  <Layout>
  <StaticQuery
    query={graphql`
      {
        allContentfulArticle {
          edges {
            node {
              id
              title
              text {
                text
              }
              banner {
                file {
                  url
                }
              }
              publishedAt
            }
          }
        }
      }
    `}
    render={({
      allContentfulArticle: {
        edges
      }
    }) => (
      edges.map(({ node }) => (
        console.log(node) || <Article key={node.id} content={node} />
      ))
    )}
  />
</Layout>
)

export default IndexPage
