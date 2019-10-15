import React from "react";
import Twitter from "../../images/social/twitter.svg";
import Facebook from "../../images/social/facebook.svg";
// import VK from "../../images/social/vk.svg";
import Reddit from "../../images/social/reddit.svg";
import Linkedin from "../../images/social/linkedin.svg";

const ShareBlock = props => {
  return (
    <div className="ShareBlock">
      <a
        className="ShareBlock__btn"
        href={`https://twitter.com/share?url=${props.link}&amp;text=${props.title}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Twitter />
      </a>
      <a
        className="ShareBlock__btn"
        href={`https://www.facebook.com/sharer/sharer.php?u=${props.link}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Facebook />
      </a>
      <a
        className="ShareBlock__btn"
        href={`https://reddit.com/submit?url=${props.link}&amp;title=${props.title}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Reddit />
      </a>
      {/* <button className="ShareBlock__btn">
        <VK />
      </button> */}
      <a
        className="ShareBlock__btn"
        href={`https://www.linkedin.com/shareArticle?mini=true&amp;url=${props.link}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Linkedin />
      </a>
      <a
        className="ShareBlock__btn mail"
        href={`mailto:subject=${props.title}&body="${props.title},${props.link}"`}
      >
        <i className="mi mi-Share"></i>
      </a>
    </div>
  );
};

export default ShareBlock;
