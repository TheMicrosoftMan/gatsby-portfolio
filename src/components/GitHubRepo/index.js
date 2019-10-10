import React, { useState } from "react"

const GitHubRepo = ({ repo, id }) => {
  const [isHover, setHover] = useState(false)
  return (
    <a
      className={`repos__repo${isHover ? " hovered" : ""}`}
      href={repo.html_url}
      target="_blank"
      rel="noopener noreferrer"
      onMouseOver={() => setHover(true)}
      onMouseOut={() => setHover(false)}
    >
      <span className="repos__repo_number">{id}.</span>
      <span className="repos__repo_name">{repo.name}</span>
    </a>
  )
}

export default GitHubRepo
