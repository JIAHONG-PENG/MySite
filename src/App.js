import React from "react";

import "./App.css";
// import FrontPage from "./page/FrontPage";
// import AboutMe from "./page/AboutMe";
// import Experience from "./page/Experience";
// import Project from "./page/Project";
// import Contact from "./page/Contact";
// import Menu from "./component/Menu.js/Menu";

function App() {
  // const [hidden, setHidden] = React.useState(true);
  // const [current, setCurrent] = React.useState(0);

  // window.onbeforeunload = function () {
  //   setHidden(true);
  // };

  // React.useEffect(() => {
  //   setHidden(false);
  // }, []);

  // React.useEffect(() => {
  //   setHidden(true);
  // }, [current]);

  const appRef = React.useRef();

  return (
    <div className="App" ref={appRef}>
      {/* <Menu appRef={appRef} current={current} setCurrent={setCurrent} /> */}

      {/* <FrontPage appRef={appRef} current={current} setCurr={setCurrent} />
      <AboutMe appRef={appRef} hidden={hidden} current={current} />
      <Experience appRef={appRef} hidden={hidden} current={current} />
      <Project appRef={appRef} current={current} hidden={hidden} />
      <Contact appRef={appRef} current={current} hidden={hidden} /> */}

      {/* <header>
        <h1>Jia Hong Png</h1>
        <p>Software Developer | Tech Enthusiast</p>
      </header> */}

      {/* <section id="bio">
        <h2>About Me</h2>
        <p>
          Hi, I'm Jia Hong! I am passionate about building software solutions
          and exploring emerging technologies.
        </p>
      </section>

      <section id="projects">
        <h2>Projects</h2>
        <ul>
          <li>
            <a href="#">Project 1</a> - Description of project 1.
          </li>
          <li>
            <a href="#">Project 2</a> - Description of project 2.
          </li>
          <li>
            <a href="#">Project 3</a> - Description of project 3.
          </li>
        </ul>
      </section>

      <section id="resume">
        <h2>Resume</h2>
        <p>
          <a href="resume.pdf" download>
            Download My Resume
          </a>
        </p>
      </section>

      <section id="contact">
        <h2>Contact</h2>
        <p>
          Email:{" "}
          <a href="mailto:your.email@example.com">your.email@example.com</a>
        </p>
        <p>
          LinkedIn:{" "}
          <a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            rel="noreferrer"
          >
            linkedin.com/in/yourprofile
          </a>
        </p>
        <p>
          GitHub:{" "}
          <a
            href="https://github.com/yourgithub"
            target="_blank"
            rel="noreferrer"
          >
            github.com/yourgithub
          </a>
        </p>
      </section>

      <footer>
        <p>&copy; 2025 Jia Hong Png. All Rights Reserved.</p>
      </footer> */}

      <div class="container-sm overpass-regular">
        <div class="text-center">
          <h2>Jiahong Peng (Chris)</h2>
          <p>Software Developer | Tech Enthusiast</p>
          <br />
        </div>
        <div class="row">
          <div class="col-md-1"></div>

          <div class="col-md-4 text-center">
            <div class="black-box mx-auto"></div>
            <br />
            {/* <h4>Contact Chris</h4>
            <p></p> */}
          </div>
          <div class="col-md-6">
            <section id="bio">
              <h4>About Me</h4>
              <p>
                Hi, I'm Jiahong! I am passionate about building software
                solutions and exploring emerging technologies. I'm also a big
                fan of fitness 🏋️‍♂️.
              </p>

              <div>
                <u style={{ fontSize: "20px" }}>Education:</u> <br />
                Bachelor of Computing, majoring in computer science (usyd){" "}
                <br />
                Master of IT (usyd) <br />
                <u style={{ fontSize: "20px" }}>Skill:</u> <br />
                Java, Javascript, Python, React, Vue, Node, AWS
              </div>
            </section>
            <br />

            <section id="projects">
              <h4>Projects</h4>
              <ul>
                <li>
                  <a
                    className="text-decoration-none"
                    target="_blank"
                    href="https://glowing-conkies-a1fa52.netlify.app/"
                    rel="noreferrer"
                  >
                    Sorting Algorithm Visualizer
                  </a>{" "}
                  <br />
                  The aim of this app is to <b>visualize</b> the sorting process
                  of some algorithms, such as <u>bubble sort</u>,{" "}
                  <u>merge sort</u>, <u>quick sort</u>, etc.
                  {/* It's an{" "} <i>React</i> app. */}
                </li>

                <br />

                <li>
                  <a className="disabled-link">
                    Submitter, Score board (Samsung Flip event) <br />
                  </a>
                  - Submitter receives input from user and sends to database on
                  AWS <br />- Scoreboard ranks scores and reranks when a new
                  record received
                </li>
              </ul>
            </section>

            <section id="contact">
              <h4>Contact</h4>
              <p>
                Email:{" "}
                <a
                  className="text-decoration-none"
                  href="mailto:pjh646634309@gmail.com"
                >
                  pjh646634309@gmail.com
                </a>
              </p>
              <p>
                LinkedIn:{" "}
                <a
                  className="text-decoration-none"
                  href="https://www.linkedin.com/in/chris-peng-88b76a214"
                  target="_blank"
                  rel="noreferrer"
                >
                  www.linkedin.com/in/chris-peng-88b76a214
                </a>
              </p>
              <p>
                GitHub:{" "}
                <a
                  className="text-decoration-none"
                  href="https://github.com/JIAHONG-PENG"
                  target="_blank"
                  rel="noreferrer"
                >
                  github.com/JIAHONG-PENG
                </a>
              </p>
            </section>
          </div>

          <div class="col-md-1"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
