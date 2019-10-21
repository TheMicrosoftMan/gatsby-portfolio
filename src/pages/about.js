import React from "react";

import { graphql } from "gatsby";
import moment from "moment";

import Layout from "../components/Layout/layout";
import Skill from "../components/Skill";
import Job from "../components/Job";
import Education from "../components/Education";
import SEO from "../components/SEO/seo";

const aboutMe = {
  birthday: moment("22.02.1997", "DD.MM.YYYY")
};

const ContactPage = ({ data }) => {
  return (
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
          <div className="about__aside">
            <div className="about__aside_head">
              <div className="about__aside_head_img">
                <i class="mi mi-Contact"></i>
              </div>
              <div className="about__aside_head_name-work">
                <span className="about__aside_head_name-work_name">
                  TheMicrosoftMan
                </span>
                <span className="about__aside_head_name-work_work">
                  Front end Developer
                </span>
              </div>
            </div>
            <div className="about__aside_details">
              <div className="about__aside_details_item">
                <span className="about__aside_details_item_title">
                  Birthday:
                </span>
                <span className="about__aside_details_item_value">
                  {aboutMe.birthday.format("DD.MM.YYYY")}
                </span>
              </div>
              <div className="about__aside_details_item">
                <span className="about__aside_details_item_title">Age:</span>
                <span className="about__aside_details_item_value">
                  {moment().diff(aboutMe.birthday, "years")}
                </span>
              </div>
            </div>
            <div className="about__aside_social">
              <a
                className="about__aside_social_link"
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i class="mi mi-linkedin"></i>
              </a>
              <a
                className="about__aside_social_link"
                href="https://www.github.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i class="mi mi-github"></i>
              </a>
              <a
                className="about__aside_social_link"
                href="mailto:themicrosoftman@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i class="mi mi-Mail"></i>
              </a>
            </div>
          </div>
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
          <div className="about_info__container">
            <div className="about_info__container_title">
              <h2>Education</h2>
            </div>
            <div className="about_info__container_description_jobs">
              <div className="about_info__container_description_jobs_job">
                <Education
                  schoolLogo={
                    data.Donetsk_National_University.childImageSharp.fluid
                  }
                  school="Donetsk National University"
                  degree="Master's degree"
                  fieldOfStudy="Computer Science"
                  period={{
                    from: "2016",
                    to: "2018"
                  }}
                />
              </div>
              <div className="about_info__container_description_jobs_job">
                <Education
                  schoolLogo={
                    data.Donetsk_National_University.childImageSharp.fluid
                  }
                  school="Donetsk National University"
                  degree="Bachelor's degree"
                  fieldOfStudy="Computer Science"
                  period={{
                    from: "2018",
                    to: "2020"
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query {
    Donetsk_National_University: file(
      relativePath: { eq: "Donetsk_National_University.png" }
    ) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default ContactPage;
