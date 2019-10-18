import React from "react";
import { CSSTransition } from "react-transition-group";

const Skill = ({ title, skills, percent, showPercent }) => {
  return (
    <div className="skill-item">
      <div className="skill-item__head">
        <div className="skill-item__head_title-name">
          {title && <span className="skill-item__head_title">{title}</span>}
          {skills && (
            <div className="skill-item__head_names">
              {skills.map((skill, index) => {
                if (index + 1 === skills.length) {
                  return `${skill}.`;
                }
                return `${skill}, `;
              })}
            </div>
          )}
        </div>
        {showPercent && (
          <div
            className="skill-item__head_bar"
            style={{ width: `${percent}%` }}
          >
            <CSSTransition
              in={true}
              appear={true}
              timeout={700}
              classNames="skill-item__head_bar_percent"
            >
              <span className="skill-item__head_bar_percent">{percent}%</span>
            </CSSTransition>
          </div>
        )}
      </div>
      <div className="progress">
        <div className="bar" style={{ width: `${percent}%` }}>
          <CSSTransition
            in={true}
            appear={true}
            timeout={700}
            classNames="bar__fill"
          >
            <div className="bar__fill" />
          </CSSTransition>
        </div>
      </div>
    </div>
  );
};

export default Skill;
