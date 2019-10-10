import React from "react"

const Preloader = props => {
  return (
    <div className="preloader" style={props.style}>
      <div className="chars">
        <span className="char brace">{"{"}</span>
        <span className="dots">
          <span className="char dot _dot-1">.</span>
          <span className="char dot _dot-2">.</span>
          <span className="char dot _dot-3">.</span>
          <span className="char dot _dot-4">.</span>
          <span className="char dot _dot-5">.</span>
        </span>
        <span className="char brace">{"}"}</span>
      </div>
    </div>
  )
}

export default Preloader
