import React from "react";
import Menu from "../component/Menu.js/Menu";
import SideBarRight from "../component/SideBarRight";
import ExperienceElement from "../component/ExperienceElement";

function Experience(props) {
  const exps = [
    {
      time: "JUNE - SEP 2023",
      title: "Website Developer (internship)",
      location: "Sydney",
      text: "During the internship, I was responsible for maintaining the frontend of platforms using Vue and interacting with database using SQL. I also have experience using AWS, including database, S3 and serverless API.",
    },
  ];

  const exps_elements = [];
  exps.forEach(({ time, title, text, location }) => {
    exps_elements.push(
      <ExperienceElement
        time={time}
        title={title}
        text={text}
        location={location}
      />
    );
  });

  // React.useLayoutEffect(() => {}, []);

  // const expRef = React.useRef();

  return (
    <div className={`Experience ${props.hidden ? "notDisplay" : ""}`}>
      <Menu
        current={props.current}
        setCurrent={props.setCurrent}
        appRef={props.appRef}
      />

      <div className="box container">
        <div className="row">
          <div className="col-12 col-md-3 section-name">Experience</div>
          <div className="col-12 col-md-9 main-content">
            <div className="exp-container">
              <div className="side-bar-left-container">
                <div className="side-bar-left"></div>
              </div>
              <div>{exps_elements}</div>
            </div>
            <SideBarRight />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
