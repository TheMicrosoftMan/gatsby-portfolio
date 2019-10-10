import React from "react"
import { graphql } from "gatsby"

import SEO from "../../components/SEO/seo"
import Layout from "../../components/Layout/layout"
import PostsList from "../../components/PostsList"

const PostContent = ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <SEO title={post.frontmatter.title} />
      <div className="post">
        <PostsList posts={data.allMarkdownRemark.edges} />
        <div className="post-page">
          <h2 className="post-page__title">{post.frontmatter.title}</h2>
          <div
            dangerouslySetInnerHTML={{ __html: post.html }}
            className="post-page__content"
          />
          <h4 className="post-page__date">
            Posted by {post.frontmatter.author} on {post.frontmatter.date}
          </h4>
        </div>
      </div>
    </Layout>
  )
}

export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        author
        date
      }
    }
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            path
            title
            date
            author
          }
        }
      }
    }
  }
`

export default PostContent
