import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

export default function Template({ data }) {
    const { markdownRemark: post } = data
    return(
        <Layout pageTitle={post.frontmatter.title}>
        <div>
            <div dangerouslySetInnerHTML={{__html: post.html}}></div>
        </div>
        </Layout>
    )
}

export const pageQuery = graphql `
query BlogPostBySlug($path: String!){
    markdownRemark(frontmatter: {path: {eq: $path} }){
        html
        frontmatter{
            path
            title
        }
    }
}
`
