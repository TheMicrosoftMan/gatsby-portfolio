import React from "react"

const SkillsCloud = props => {
  return (
    <div className="skills-cloud">
      {props.skills.map((skill, index) => {
        return (
          <span
            key={index}
            className="skills-cloud__item"
            style={{
              animationDelay: `${Math.random() * 2}s`,
            }}
          >
            {skill.value}
          </span>
        )
      })}
    </div>
  )
}

export default SkillsCloud
