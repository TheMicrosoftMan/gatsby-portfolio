import React from "react";
import { CSSTransition } from "react-transition-group";

const Skill = ({ name, percent }) => {
  return (
    <div className="skill-item">
      <div className="skill-item__head">
        <span className="skill-item__head_name">{name}</span>
        <div className="skill-item__head_bar" style={{ width: `${percent}%` }}>
          <CSSTransition
            in={true}
            appear={true}
            timeout={700}
            classNames="skill-item__head_bar_percent"
          >
            <span className="skill-item__head_bar_percent">{percent}%</span>
          </CSSTransition>
        </div>
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
