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
    posts:allMarkdownRemark (
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { template: { eq: "blog-post" } } }
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            slug
            title
            description
          }
        }
      }
    }
  }
`


const ServicesPage = ({ data }) => {
  const { markdownRemark, posts } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  console.log(posts.edges)
  return (
    <Layout className="page">
      <Seo title={"RE Monitor - Usługi"} description={frontmatter.subheading} />
      <ServicesPageBody 
        title={frontmatter.title}
        subheading={frontmatter.subheading}
        image={frontmatter.image}
        posts={posts.edges}
        contactSectionTitle={frontmatter.contactSectionTitle}
        contactSectionText={frontmatter.contactSectionText}
        contentComponent={HTMLContent}
        content={html}
      />
    </Layout>
  )
}

export default ServicesPage
