import React from "react";
import { Link } from "gatsby";
import moment from "moment";

const PostsList = ({ page, posts }) => {
  return (
    <div className="PostsList">
      <div className="page">
        <div className="page-text">
          <span className="page-icon">{page.icon}</span>
          <span className="page-title">{page.title}</span>
        </div>
      </div>
      {posts.map(post => {
        return (
          <Link
            key={post.node.id}
            to={post.node.frontmatter.path}
            className="post-link"
          >
            <span className="post-link-icon">
              <i class="mi mi-Page" />
            </span>
            <div className="post-link-text">
              <span className="post-link-title">
                {post.node.frontmatter.title}
              </span>
              <div className="post-link-detail">
                <span className="post-link-short">
                  {post.node.frontmatter.short.slice(0, 20)}...
                </span>
                <span className="post-link-date">
                  {moment(post.node.frontmatter.date).format("DD.MM.YYYY")}
                </span>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};
export default PostsList;
