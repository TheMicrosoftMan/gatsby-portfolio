import React from "react"

import Layout from "../components/Layout/layout"
import SEO from "../components/SEO/seo"

const ContactPage = () => (
  <Layout>
    <SEO title="Contact" />
    <div className="f-column contact-page">
      <h1>Contact</h1>
      <div className="social-links">
        <span className="social-links__item">
          <i class="mi mi-facebook-f" />
        </span>
        <span className="social-links__item">
          <i class="mi mi-vk" />
        </span>
        <span className="social-links__item">
          <i class="mi mi-twitter-square" />
        </span>
        <span className="social-links__item">
          <i class="mi mi-github" />
        </span>
        <span className="social-links__item">
          <i class="mi mi-skype" />
        </span>
        <span className="social-links__item">
          <i class="mi mi-telegram-plane" />
        </span>
        <span className="social-links__item">
          <i class="mi mi-Mail" />
        </span>
      </div>
      <div className="write-me-cont">
        <h2>Write me</h2>
        <textarea className="write-me-cont__area" />
        <button className="write-me-cont__btn">Send</button>
      </div>
    </div>
  </Layout>
)

export default ContactPage
