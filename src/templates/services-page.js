import React from "react"
import { graphql} from "gatsby"
import { HTMLContent } from "../components/content.js";
import Layout from "../components/layout"
import Seo from "../components/seo"
import ServicesPageBody from "./body/services-page-body.js";

export const pageQuery = graphql`
  query ServicesQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        subheading
        image {
          childImageSharp {
            gatsbyImageData(quality: 100, layout: FULL_WIDTH)
          }
        }
        contactSectionTitle,
        contactSectionText,
      }
    }
    serviceBoardItems:allMarkdownRemark (
      filter: { frontmatter: { template: { eq: "service-board-item" } } }
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          fields {
            slug
          }
          frontmatter {
            title
            description
          }
        }
      }
    }
  }
`


const ServicesPage = ({ data }) => {
  const { markdownRemark, serviceBoardItems } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark

  return (
    <Layout className="page">
      <Seo title={"RE Monitor - Usługi"} description={frontmatter.subheading} />
      <ServicesPageBody 
        title={frontmatter.title}
        subheading={frontmatter.subheading}
        image={frontmatter.image}
        serviceBoardItems={serviceBoardItems.edges}
        contactSectionTitle={frontmatter.contactSectionTitle}
        contactSectionText={frontmatter.contactSectionText}
        contentComponent={HTMLContent}
        content={html}
      />
    </Layout>
  )
}

export default ServicesPage
