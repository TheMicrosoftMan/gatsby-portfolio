import React from "react";
import { CSSTransition } from "react-transition-group";

import Layout from "../components/Layout/layout";
import SEO from "../components/SEO/seo";

import EmptyBox from "../images/empty.svg";

const ProjectsPage = () => {
  return (
    <Layout>
      <SEO title="Projects" />
      <div className="page projects">
        <div className="PostsList">
          <div className="page">
            <div className="page-text">
              <span className="page-icon">
                <i className="mi mi-github" />
              </span>
              <span className="page-title">Projects</span>
            </div>
          </div>
          {/* <CSSTransition
            in={true}
            timeout={1000}
            classNames="opacity-animation"
            unmountOnExit
          >
            <div>
              <div className="post-link">
                <CSSTransition
                  in={true}
                  timeout={1000}
                  classNames="opacity-animation"
                  unmountOnExit
                >
                  <div className="active" />
                </CSSTransition>
                {1}
              </div>
            </div>
          </CSSTransition> */}
        </div>
        <div className="projects-container">
          <div className="projects-container__list">
            <div className="projects-container__list_empty">
              <EmptyBox />
              Nothing to show
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProjectsPage;
