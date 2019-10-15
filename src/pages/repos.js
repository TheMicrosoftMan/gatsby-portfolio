import React, { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";
import { Pie } from "react-chartjs-2";
import GitHubRepo from "../components/GitHubRepo";
import Preloader from "../components/Preloader";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import Layout from "../components/Layout/layout";
import SEO from "../components/SEO/seo";

const colorsArr = [
  "#FFB900",
  "#F7630C",
  "#EF6950",
  "#D13438",
  "#C30052",
  "#C239B3",
  "#9A0089",
  "#881798",
  "#744DA9",
  "#8764B8",
  "#0063B1",
  "#0099BC",
  "#038387",
  "#00B294",
  "#00CC6A",
  "#10893E",
  "#68768A",
  "#567C73",
  "#847545"
];

const screens = {
  USER: "USER",
  REPO: "REPO"
};

const ReposPage = () => {
  const [gitHubUserInfo, setGitHubUserInfo] = useState({});
  const [githubRepos, setGithubRepos] = useState([]);
  const [activeRepo, setActiveRepo] = useState({});

  const [loadingState, setLoadingState] = useState({
    loadingRepos: false,
    loadingRepoInfo: false,
    loadingInfo: false
  });

  const [activeScreen, setActiveScreen] = useState(screens.USER);

  useEffect(() => {
    async function loadData() {
      const gitHubUserInfoJSON = await getGitHubUserInfo();
      setGitHubUserInfo({
        login: gitHubUserInfoJSON.data.login,
        avatar_url: gitHubUserInfoJSON.data.avatar_url,
        html_url: gitHubUserInfoJSON.data.html_url,
        name: gitHubUserInfoJSON.data.name,
        location: gitHubUserInfoJSON.data.location,
        public_repos: gitHubUserInfoJSON.data.public_repos,
        created_at: gitHubUserInfoJSON.data.created_at,
        updated_at: gitHubUserInfoJSON.data.updated_at
      });
      setLoadingState(loadingState => {
        return {
          ...loadingState,
          loadingRepos: true,
          loadingInfo: false
        };
      });

      const githubReposJSON = await getGithubRepos();
      setGithubRepos(
        githubReposJSON.data.map(repo => {
          return {
            id: repo.id,
            name: repo.name,
            description: repo.description,
            html_url: repo.html_url
          };
        })
      );
      setLoadingState(loadingState => {
        return { ...loadingState, loadingRepos: false };
      });
    }
    setLoadingState({ loadingRepos: true, loadingInfo: true });
    loadData();
  }, []);

  const getGitHubUserInfo = () => {
    return axios.get("https://api.github.com/users/themicrosoftman");
  };

  const getGithubRepos = () => {
    return axios.get(
      "https://api.github.com/users/themicrosoftman/repos?sort=updated"
    );
  };

  const getRepoInfo = repo_id => {
    setActiveScreen(screens.REPO);
    setLoadingState({ ...loadingState, loadingRepoInfo: true });
    axios
      .get(`https://api.github.com/repos/themicrosoftman/${repo_id}`)
      .then(async data => {
        const reposLanguages = await getReposLanguages(repo_id);
        const reposCommits = await getReposCommits(repo_id);

        const reposLanguagesArr = [];
        for (let lang in reposLanguages.data) {
          reposLanguagesArr.push({
            name: lang,
            bytes: reposLanguages.data[lang]
          });
        }

        let bytesSum = 0;
        reposLanguagesArr.forEach(lang => {
          bytesSum += lang.bytes;
        });

        const reposLanguagesDetailArr = reposLanguagesArr.map(lang => {
          return {
            name: lang.name,
            bytes: lang.bytes,
            percent: Math.round((lang.bytes * 100) / bytesSum)
          };
        });

        setActiveRepo({
          id: data.data.id,
          full_name: data.data.full_name,
          description: data.data.description,
          html_url: data.data.html_url,
          language: data.data.language,
          created_at: data.data.created_at,
          updated_at: data.data.updated_at,
          reposLanguages: reposLanguagesDetailArr,
          reposCommits: reposCommits.data.map(commit => {
            return {
              message: commit.commit.message,
              date: commit.commit.author.date
            };
          }),
          colors: getRandomColors(reposLanguagesDetailArr.length)
        });

        setLoadingState({ ...loadingState, loadingRepoInfo: false });
      })
      .catch(err => console.log(err));
  };

  const getReposLanguages = repo_id => {
    return axios.get(
      `https://api.github.com/repos/themicrosoftman/${repo_id}/languages`
    );
  };

  const getReposCommits = repo_id => {
    return axios.get(
      `https://api.github.com/repos/themicrosoftman/${repo_id}/commits`
    );
  };

  const getRandomColors = count => {
    let colorsSet = new Set();
    while (colorsSet.size < count) {
      const randomColor = colorsArr[getRandomValue(0, count)];
      colorsSet.add(randomColor);
    }
    return [...colorsSet];
  };

  const getRandomValue = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  return (
    <Layout>
      <SEO title="Repositories" />
      <div className="page github">
        <div className="PostsList">
          <div className="page">
            <div className="page-text">
              <span className="page-icon">
                <i className="mi mi-github" />
              </span>
              <span className="page-title">Repositories</span>
            </div>
          </div>
          <CSSTransition
            in={!loadingState.loadingRepos}
            timeout={1000}
            classNames="opacity-animation"
            unmountOnExit
          >
            <div>
              {loadingState.loadingRepos ? (
                <Preloader />
              ) : (
                githubRepos.map((repo, index) => {
                  return (
                    <div
                      key={repo.id}
                      to={repo.html_url}
                      className="post-link"
                      onClick={() => getRepoInfo(repo.name)}
                    >
                      <CSSTransition
                        in={
                          activeRepo.id === repo.id &&
                          !loadingState.loadingRepoInfo &&
                          activeScreen === screens.REPO
                        }
                        timeout={1000}
                        classNames="opacity-animation"
                        unmountOnExit
                      >
                        <div className="active" />
                      </CSSTransition>
                      {index + 1}. {repo.name}
                    </div>
                  );
                })
              )}
            </div>
          </CSSTransition>
        </div>
        <TransitionGroup style={{ width: "100%" }}>
          <CSSTransition
            key={activeScreen}
            timeout={1000}
            classNames="opacity-animation"
            unmountOnExit
          >
            <div style={{ width: "100%" }}>
              {activeScreen === screens.REPO && (
                <div className="repo_info">
                  <CSSTransition
                    in={!loadingState.loadingRepoInfo}
                    timeout={1000}
                    classNames="opacity-animation"
                    unmountOnExit
                  >
                    <div>
                      {activeRepo.hasOwnProperty("full_name") && (
                        <div>
                          <div className="repo_info_head">
                            <div
                              className="repo_info_close"
                              onClick={() => {
                                setActiveScreen(screens.USER);
                              }}
                            >
                              <i className="mi mi-Back"></i>
                            </div>
                            <img
                              src={gitHubUserInfo.avatar_url}
                              className="repo_info_head_avatar"
                              alt={gitHubUserInfo.avatar_url}
                            />
                            <a
                              href={activeRepo.html_url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="repo_info_name"
                            >
                              {activeRepo.full_name}
                            </a>
                          </div>
                          <div className="repo_info_text">
                            <p className="repo_info_text_desc">
                              {activeRepo.description}
                            </p>
                          </div>
                          <div className="repo_info_languages-commits-chart">
                            <div className="repo_info_languages-commits">
                              <div className="repo_info_text_at">
                                <div className="repo_info_text">
                                  <span className="repo_info_text_label">
                                    Created at:{" "}
                                  </span>
                                  <span className="repo_info_text_value">
                                    {moment(activeRepo.created_at).format(
                                      "DD.MM.YYYY HH:mm:ss"
                                    )}
                                  </span>
                                </div>
                                <div className="repo_info_text">
                                  <span className="repo_info_text_label">
                                    Updated at:{" "}
                                  </span>
                                  <span className="repo_info_text_value">
                                    {moment(activeRepo.updated_at).format(
                                      "DD.MM.YYYY HH:mm:ss"
                                    )}
                                  </span>
                                </div>
                              </div>
                              <div className="repo_info_languages">
                                <details open>
                                  <summary>
                                    <span className="repo_info_languages_title">
                                      Languages list
                                    </span>
                                  </summary>
                                  <ul className="repo_info_languages-list">
                                    {activeRepo.reposLanguages.map(
                                      (lang, index) => {
                                        return (
                                          <li
                                            key={index}
                                            className="repo_info_languages-list_item"
                                          >
                                            <span className="repo_info_languages-list_item_name">
                                              {lang.name}:
                                            </span>
                                            <span className="repo_info_languages-list_item_size">
                                              {lang.bytes} bytes
                                            </span>
                                            -
                                            <span className="repo_info_languages-list_item_percent">
                                              {lang.percent}%
                                            </span>
                                          </li>
                                        );
                                      }
                                    )}
                                  </ul>
                                </details>
                              </div>
                              <div className="repo_info_commits">
                                <details open>
                                  <summary>
                                    <span className="repo_info_commits_title">
                                      Commits list
                                    </span>
                                  </summary>
                                  <ul className="repo_info_commits-list">
                                    {activeRepo.reposCommits.map(
                                      (commit, index) => {
                                        return (
                                          <li
                                            key={index}
                                            className="repo_info_commits-list_item"
                                          >
                                            <span className="repo_info_commits-list_item_date">
                                              {moment(commit.date).format(
                                                "DD.MM.YYYY HH:mm:ss"
                                              )}
                                            </span>
                                            :
                                            <span className="repo_info_commits-list_item_msg">
                                              {commit.message}
                                            </span>
                                          </li>
                                        );
                                      }
                                    )}
                                  </ul>
                                </details>
                              </div>
                            </div>
                            <div className="repo_info_chart">
                              <Pie
                                data={{
                                  labels: activeRepo.reposLanguages.map(
                                    lang => {
                                      return lang.name;
                                    }
                                  ),
                                  datasets: [
                                    {
                                      data: activeRepo.reposLanguages.map(
                                        lang => {
                                          return lang.percent;
                                        }
                                      ),
                                      backgroundColor: activeRepo.colors,
                                      hoverBackgroundColor: activeRepo.colors
                                    }
                                  ]
                                }}
                                options={{
                                  legend: {
                                    position: "chartArea",
                                    labels: {
                                      fontFamily: "Selawik Regular",
                                      fontColor: "#fff",
                                      fontSize: 14
                                    }
                                  }
                                }}
                              />
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </CSSTransition>
                </div>
              )}
              {activeScreen === screens.USER && (
                <div className="user_info">
                  <CSSTransition
                    in={!loadingState.loadingInfo}
                    timeout={1000}
                    classNames="opacity-animation"
                    unmountOnExit
                  >
                    <div>
                      {gitHubUserInfo.hasOwnProperty("login") && (
                        <React.Fragment>
                          <div className="info">
                            <img
                              src={gitHubUserInfo.avatar_url}
                              className="info_avatar"
                              alt={gitHubUserInfo.avatar_url}
                            />
                            <div className="info_user">
                              <a
                                href={gitHubUserInfo.html_url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="info_user_login repo_info_name"
                              >
                                {gitHubUserInfo.login}
                              </a>
                              <span className="info_user_name">
                                {gitHubUserInfo.name}
                              </span>
                              <span className="info_user_at">
                                <i className="mi mi-Location"></i>
                                <span className="info_user_at_date">
                                  {gitHubUserInfo.location}
                                </span>
                              </span>
                              <span className="info_user_at">
                                <i className="mi mi-EmojiTabCelebrationObjects"></i>
                                <span className="info_user_at_date">
                                  {moment(gitHubUserInfo.created_at).format(
                                    "DD.MM.YYYY HH:mm:ss"
                                  )}
                                </span>
                                <span className="info_user_at_text">
                                  Joined to GitHub
                                </span>
                              </span>
                              <span className="info_user_at">
                                <i className="mi mi-DevUpdate"></i>
                                <span className="info_user_at_date">
                                  {moment(gitHubUserInfo.updated_at).format(
                                    "DD.MM.YYYY HH:mm:ss"
                                  )}
                                </span>
                                <span className="info_user_at_text">
                                  Last update
                                </span>
                              </span>
                            </div>
                          </div>
                          <div className="repos-block">
                            <h3 className="repos_head">
                              Public repositories{" "}
                              <span className="repos_head_repo-count">
                                {githubRepos.length || 0}
                              </span>
                            </h3>
                            <div className="repos">
                              {loadingState.loadingRepos &&
                              !loadingState.loadingInfo ? (
                                <Preloader />
                              ) : (
                                githubRepos.map((repo, index) => {
                                  return (
                                    <GitHubRepo
                                      key={index}
                                      id={index + 1}
                                      repo={repo}
                                    />
                                  );
                                })
                              )}
                            </div>
                          </div>
                        </React.Fragment>
                      )}
                    </div>
                  </CSSTransition>
                </div>
              )}
            </div>
          </CSSTransition>
        </TransitionGroup>
        <CSSTransition
          in={loadingState.loadingInfo || loadingState.loadingRepoInfo}
          timeout={1000}
          classNames="opacity-animation"
          unmountOnExit
        >
          <div className="github-preload">
            <Preloader />
          </div>
        </CSSTransition>
      </div>
    </Layout>
  );
};

export default ReposPage;
