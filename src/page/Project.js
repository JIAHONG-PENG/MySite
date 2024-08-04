import React from "react";
import Menu from "../component/Menu.js/Menu";
import SideBarRight from "../component/SideBarRight";

function Project({ appRef, hidden, current, setCurrent }) {
  return (
    <div className={`Project ${current === 3 ? "display" : ""}`}>
      {/* <Menu appRef={appRef} current={current} setCurrent={setCurrent} /> */}

      <div className="box container">
        <div className="row">
          <div className="col-12 col-md-3 section-name">Project</div>
          <div className="col-12 col-md-9 main-content">
            <div className="project-container">
              <div className="project">
                <div className="project-content">
                  <div className="title">Algorithm sorting app</div>
                  <div className="text">
                    The aim of this app is to <b>visualize</b> the sorting
                    process of some algorithms, such as <u>bubble sort</u>,{" "}
                    <u>merge sort</u>, <u>quick sort</u>, etc. It's an{" "}
                    <i>React</i> app.
                  </div>
                  <a
                    target="_blank"
                    href="https://glowing-conkies-a1fa52.netlify.app/"
                    rel="noreferrer"
                  >
                    Link
                  </a>
                </div>
              </div>
              <div className="project">
                <div className="project-content">
                  <div className="title">
                    Submitter, Score board <br />
                    (for Samsung Flip event)
                  </div>
                  <div className="text">
                    - Submitter receives input from user and sends to database
                    on AWS <br />- Scoreboard ranks scores and reranks when a
                    new record detected in database
                  </div>
                </div>
              </div>
            </div>
            <SideBarRight />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
