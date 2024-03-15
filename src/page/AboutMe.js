import React from "react";
import ReactDOM from "react-dom/client";
import bootstrap from "bootstrap";
import Menu from "../component/Menu.js/Menu";
import SideBarRight from "../component/SideBarRight";

function AboutMe(props) {
  return (
    <div className={`AboutMe ${props.hidden ? "notDisplay" : ""}`}>
      <Menu
        current={props.current}
        setCurrent={props.setCurrent}
        appRef={props.appRef}
      />

      <div className="box container">
        <div className="row">
          <div className="col-12 col-md-4 section-name">About Me</div>
          <div className="col-12 col-md-8 main-content">
            <div>
              <div className="title">
                A big fan of <b>fitness</b> and <b>soccer</b>!
              </div>
              <div className="discription">
                <u>Education:</u> <br />
                Bachelor of Computing (usyd) <br />
                Master of IT (usyd, in progress) <br />
                <br />
                <u>Skill:</u> <br />
                Java, Javascript, Python, React, Vue, Node, AWS
              </div>
              <div className="photo"></div>
            </div>
            {/* <div className="side-bar">
              <div className="bar"></div>
              <div className="linkin-img"></div>
              <div className="git-img"></div>
              <div className="bar"></div>
            </div> */}
            <SideBarRight />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
