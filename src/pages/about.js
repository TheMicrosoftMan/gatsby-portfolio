import React from "react";

import Layout from "../components/Layout/layout";
import Skill from "../components/Skill";
import SEO from "../components/SEO/seo";

const skills = {
  technologies: [
    {
      name: "HTML",
      percent: 100
    },
    {
      name: "CSS",
      percent: 100
    },
    {
      name: "JavaScript",
      percent: 100
    },
    {
      name: "SASS/SCSS",
      percent: 100
    },
    {
      name: "Bootstrap",
      percent: 100
    },
    {
      name: "MaterializeCSS",
      percent: 100
    },
    {
      name: "NodeJS",
      percent: 100
    },
    {
      name: "ReactJS",
      percent: 100
    },
    {
      name: "AJAX",
      percent: 100
    },
    {
      name: "MySQL",
      percent: 100
    },
    {
      name: "MongoDB",
      percent: 100
    },
    {
      name: "Git",
      percent: 100
    },
    {
      name: "Photoshop",
      percent: 100
    },
    {
      name: "Illustrator",
      percent: 100
    },
    {
      name: "C#",
      percent: 100
    },
    {
      name: "WPF",
      percent: 100
    },
    {
      name: "WinForms",
      percent: 100
    },
    {
      name: "Gulp",
      percent: 100
    },
    {
      name: "Webpack",
      percent: 100
    }
  ]
};

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
              <h3>Technologies</h3>
              <div className="skills_lists">
                <ol>
                  {skills.technologies.map((skill, index) => {
                    return (
                      <li key={index}>
                        <Skill name={skill.name} percent={skill.percent} />
                      </li>
                    );
                  })}
                </ol>
              </div>
            </div>
            <div className="about_info__container_description_skill">
              <h3>Technologies</h3>
              <div className="skills_lists">
                <ol>
                  <li></li>
                </ol>
              </div>
            </div>
          </div>
        </div>
        <div className="about_info__container">
          <div className="about_info__container_title">
            <h2>Experience</h2>
          </div>
          <div className="about_info__container_description jobs">
            <div className="about_info__container_description_job">
              <h3>Title</h3>
              <h4>Company</h4>
              <p>Description</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
);

export default ContactPage;
