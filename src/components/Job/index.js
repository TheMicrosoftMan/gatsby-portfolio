import React from "react";
import { CSSTransition } from "react-transition-group";

import moment from "moment";

const Job = ({ title, company, description, period }) => {
  const duration = () => {
    const durationFrom = moment(period.from, "DD.MM.YYYY");
    const durationTo = period.to ? moment(period.to, "DD.MM.YYYY") : moment();

    const days = durationTo.diff(durationFrom, "days");
    const months = durationTo.diff(durationFrom, "months");
    const years = durationTo.diff(durationFrom, "years");

    let duration = "";
    if (years !== 0) {
      duration = `${years} ${years === 1 ? " year" : " years"}`;
    } else if (months !== 0) {
      duration = `${months} ${months === 1 ? " month" : " months"}`;
    } else {
      duration = `${days} ${days === 1 ? " day" : " days"}`;
    }
    return duration;
  };

  return (
    <div className="Job">
      <CSSTransition
        in={true}
        appear={true}
        timeout={700}
        classNames="Job__duration"
      >
        <div className="Job__duration">{duration()}</div>
      </CSSTransition>
      <div className="Job__info">
        <span className="Job__info_title">{title}</span>
        <div className="Job__info_company-period">
          <span className="Job__info_company">{company}</span>
          <i class="mi mi-CircleRingBadge12"></i>
          <div className="Job__info_period">{`${moment(period.from).format(
            "DD.MM.YYYY"
          )} - ${
            period.to ? moment(period.to).format("DD.MM.YYYY") : "present"
          }`}</div>
        </div>
        {description && <p className="Job__info_description">{description}</p>}
      </div>
    </div>
  );
};

export default Job;
