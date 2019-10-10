import React from "react"
import Sidebar from "../Sidebar"

const Content = props => (
  <main className="content">
    <Sidebar />
    <div className="content-container">
      <div className="content-container-row">{props.children}</div>
    </div>
  </main>
)

export default Content
