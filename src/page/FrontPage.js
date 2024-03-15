import React from "react";

import Resume from "../assets//Resume.pdf";

function FrontPage(props) {
  return (
    <div className={`background ${props.hidden ? "notDisplay" : ""}`}>
      <div className="box">
        <p className="text">
          Hi, I'm<span className="orange">Chris</span>
        </p>
        <a
          className="CV"
          href={Resume}
          download="Resume.pdf"
          rel="noopener noreferrer"
          target="_blank"
        >
          Download CV
        </a>
      </div>

      <div
        className="aboutme"
        onClick={() => {
          // window.scrollBy(0, (1 - props.current) * window.innerHeight);
          window.scrollBy(
            0,
            props.appRef.current
              .querySelector(".AboutMe")
              .getBoundingClientRect().top
          );
          // console.log(
          //   props.appRef.current.querySelector(".AboutMe")
          //   // .getBoundingClientRect().top
          // );
          props.setCurr(1);
        }}
      >
        <div>About Me</div>
        <div className="image"></div>
      </div>
    </div>
  );
}

export default FrontPage;
