import React from "react";

import Layout from "../components/Layout/layout";
import Skill from "../components/Skill";
import Job from "../components/Job";
import SEO from "../components/SEO/seo";

const ContactPage = () => (
  <Layout>
    <SEO title="About" />
    <div className="page about">
      <div className="PostsList">
        <div className="page">
          <div className="page-text">
            <span className="page-icon">
              <i className="mi mi-ContactInfo" />
            </span>
            <span className="page-title">About</span>
          </div>
        </div>
        <div className="post-link">Introduction</div>
        <div className="post-link">Skills</div>
        <div className="post-link">Experience</div>
      </div>
      <div className="about_info">
        <div className="about_info__container">
          <div className="about_info__container_title">
            <h2>Introduction</h2>
          </div>

          <div className="about_info__container_description">
            <p>Text about me.</p>
          </div>
        </div>
        <div className="about_info__container">
          <div className="about_info__container_title">
            <h2>Skills</h2>
          </div>
          <div className="about_info__container_description">
            <div className="about_info__container_description_skill">
              <div className="skills_lists">
                <ol>
                  <li>
                    <Skill
                      title="Front end"
                      skills={[
                        "HTML",
                        "CSS",
                        "SASS/SCSS",
                        "JavaScript",
                        "ES6",
                        "React.js",
                        "Redux",
                        "Gatsby.js",
                        "Bootstrap",
                        "MaterializeCSS",
                        "REST API",
                        "Photoshop",
                        "Illustrator"
                      ]}
                      percent={90}
                    />
                  </li>
                  <li>
                    <Skill
                      title="Back end"
                      skills={["Node.js", "Express", "socket.io"]}
                      percent={60}
                    />
                  </li>
                  <li>
                    <Skill
                      title="Module Bundlers"
                      skills={["Gulp", "Webpack"]}
                      percent={80}
                    />
                  </li>
                  <li>
                    <Skill
                      title="Databases"
                      skills={["MySQL", "MongoDB"]}
                      percent={40}
                    />
                  </li>
                  <li>
                    <Skill
                      title="Other"
                      skills={["Git", "npm", "yarn"]}
                      percent={80}
                    />
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
        <div className="about_info__container">
          <div className="about_info__container_title">
            <h2>Experience</h2>
          </div>
          <div className="about_info__container_description_jobs">
            <div className="about_info__container_description_jobs_job">
              <Job
                title={"Front end Developer"}
                company={"CompanyName"}
                period={{
                  from: "05.05.2019"
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
);

export default ContactPage;
