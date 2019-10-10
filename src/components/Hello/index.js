import React from "react";

const helloTo = ["world", "Bob", "users", "everybody"];

const Hello = () => {
  return (
    <div className="Hello">
      <div className="hello">
        <p>Hi</p>
        <div className="scroller">
          <div className="inner">
            {helloTo.map((item, index) => {
              return <span key={index}>{item}</span>;
            })}
          </div>
        </div>
      </div>
      <div className="im">
        <div className="im__left">
          <p>I'm</p>
        </div>
        <div className="im__right">
          <p className="im__right_name">TheMicrosoftMan</p>
          <p className="im__right_front">Front end developer</p>
        </div>
      </div>
    </div>
  );
};

export default Hello;
