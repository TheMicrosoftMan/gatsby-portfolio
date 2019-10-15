import React from "react";

const GitHubRepo = ({ repo, id }) => {
  return (
    <a
      className={`repos__repo`}
      href={repo.html_url}
      target="_blank"
      rel="noopener noreferrer"
    >
      <span className="repos__repo_name">{repo.name}</span>
      <p className="repos__repo_description">
        {repo.description ? repo.description : <i>No description</i>}
      </p>
    </a>
  );
};

export default GitHubRepo;
