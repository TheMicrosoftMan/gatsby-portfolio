/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import "../../styles/micon.min.css"
import "../../styles/style.scss"

import Content from "../Content"

const Layout = props => {
  return (
    <div className="app">
      <Content>{props.children}</Content>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
