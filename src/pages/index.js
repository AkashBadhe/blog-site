import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import Reactmarkdown from "react-markdown"

import "../styles/global.css"
import Layout from "../layouts/one-col-layout";

const IndexPage = ({ data }) => (
  <Layout>
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
  query IndexQuery {
    allStrapiArticle {
      edges {
        node {
          id
          image {
            childImageSharp {
              fixed(width: 200, height: 125) {
                ...GatsbyImageSharpFixed
              }
            }
          }
          title
          content
        }
      }
    }
  }
`
