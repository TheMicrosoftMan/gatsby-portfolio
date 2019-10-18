import React from "react";

import { CSSTransition } from "react-transition-group";
import Img from "gatsby-image";
import moment from "moment";

const Education = ({ schoolLogo, school, degree, fieldOfStudy, period }) => {
  return (
    <div className="Education">
      <div className="Education__image-block">
        <CSSTransition
          in={true}
          appear={true}
          timeout={700}
          classNames="Job__duration"
        >
          <Img fluid={schoolLogo} className="Education__image-block_image" />
        </CSSTransition>
      </div>
      <div className="Education__info">
        <span className="Education__info_school">{school}</span>
        <span className="Education__info_degree-field">
          {degree} <i class="mi mi-CircleRingBadge12"></i> {fieldOfStudy}
        </span>
        <span className="Education__info_period">{`${moment(period.from).format(
          "YYYY"
        )} - ${
          period.to ? moment(period.to).format("YYYY") : "present"
        }`}</span>
      </div>
    </div>
  );
};

export default Education;
