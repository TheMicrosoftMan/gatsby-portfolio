import React from "react";
import { graphql } from "gatsby";
import moment from "moment";
import readingTime from "reading-time";

import SEO from "../../components/SEO/seo";
import Layout from "../../components/Layout/layout";
import PostsList from "../../components/PostsList";
import ShareBlock from "../../components/ShareBlock";

const PostContent = props => {
  const post = props.data.markdownRemark;
  const timeToRead = readingTime(post.html);
  return (
    <Layout>
      <SEO title={`${post.frontmatter.title} - Blog`} />
      <div className="post">
        <PostsList
          posts={props.data.allMarkdownRemark.edges}
          page={{
            icon: <i className="mi mi-Dictionary" />,
            title: "Blog"
          }}
          activePostURL={props.path}
        />
        <div className="post-page">
          <h2 className="post-page__title">{post.frontmatter.title}</h2>
          <div className="post-page__details">
            <span className="post-page__details_item">
              {moment(post.frontmatter.date).format("DD MMMM YYYY")}
            </span>
            <span className="post-page__details_item">
              <i className="mi mi-CircleRingBadge12"></i>
              {timeToRead.words} words
            </span>
            <span className="post-page__details_item">
              <i className="mi mi-CircleRingBadge12"></i>
              {timeToRead.text}
            </span>
          </div>
          <div
            dangerouslySetInnerHTML={{ __html: post.html }}
            className="post-page__content"
          />
          <ShareBlock
            link={props.location.href}
            title={post.frontmatter.title}
          />
        </div>
      </div>
    </Layout>
  );
};

export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        author
        date
        short
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
            short
          }
        }
      }
    }
  }
`;

export default PostContent;
