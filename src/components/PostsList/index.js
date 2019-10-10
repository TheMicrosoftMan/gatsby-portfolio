import React from "react"
import { Link } from "gatsby"

const PostsList = ({ posts }) => (
  <div className="PostsList">
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
          {post.node.frontmatter.title}{" "}
          <span className="post-link-date">{post.node.frontmatter.date}</span>
        </Link>
      )
    })}
  </div>
)

export default PostsList
