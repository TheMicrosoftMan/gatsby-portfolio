import React from "react"
import SkillsCloud from "../components/SkillsCloud"

import Layout from "../components/Layout/layout"
import SEO from "../components/SEO/seo"

const skills = [
  { value: "React" },
  { value: "Redux" },
  { value: "REST API" },
  { value: "Gatsby.js" },
  { value: "JavaScript" },
  { value: "Node.js" },
  { value: "Express.js" },
  { value: "HTML5" },
  { value: "CSS3" },
  { value: "SCSS" },
  { value: "bootstrap" },
  { value: "webpack" },
  { value: "MongoDB" },
  { value: "MySQL" },
  { value: "PWA" },
  { value: "Galp" },
]

const SkillsPage = () => {
  return (
    <Layout>
      <SEO title="Skills" />
      <div className="contact-page skills">
        <SkillsCloud skills={skills} />
      </div>
    </Layout>
  )
}

export default SkillsPage
