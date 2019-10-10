import React from "react";
import { graphql, Link } from "gatsby";
import moment from "moment";

import Layout from "../components/Layout/layout";
import PostsList from "../components/PostsList";
import SEO from "../components/SEO/seo";

const BlogPage = ({ data }) => (
  <Layout>
    <SEO title="Posts" />
    <div className="page blog">
      <PostsList posts={data.allMarkdownRemark.edges} />
      {data && (
        <div className="blog__list">
          {data.allMarkdownRemark.edges.map(data => {
            return (
              <Link className="blog__list_item" to={data.node.frontmatter.path}>
                <span className="blog__list_item_title">
                  {data.node.frontmatter.title}
                </span>
                <p className="blog__list_item_short">
                  {data.node.frontmatter.short}
                </p>
                <span className="blog__list_item_date">
                  {moment(data.node.frontmatter.date).format("DD.MM.YYYY")}
                </span>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  </Layout>
);

export const pageQuery = graphql`
  query PostQuery {
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

export default BlogPage;
