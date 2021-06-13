import * as React from "react"
import Layout from '../components/layout'
import { Link, graphql, useStaticQuery } from 'gatsby'



const Blog = () => {

    const data = useStaticQuery(graphql`
    query {
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                path
                title
                date
              }
            }
          }
        }
      }
      
    `)

    

    const blogList = data.allMarkdownRemark.edges.map((edge) => {
        console.log(edge.node.frontmatter.title)
        return (
            <li><Link to={edge.node.frontmatter.path}>{edge.node.frontmatter.title}</Link></li>
        )
    })

    return (

        <Layout pageTitle="Blog">
            <h1></h1>
            <p>I'm making this by following the Gatsby Tutorial.</p>
            {blogList}

        </Layout>

    )
}

export default Blog
