import logo from "./logo.svg";
import React from "react";
import { ReactDOM } from "react";

import "./App.css";
import FrontPage from "./page/FrontPage";
import AboutMe from "./page/AboutMe";
import Experience from "./page/Experience";
import Project from "./page/Project";
import Contact from "./page/Contact";

function App() {
  const [hidden, setHidden] = React.useState(true);
  const [current, setCurrent] = React.useState(0);

  window.onbeforeunload = function () {
    setHidden(true);
  };

  React.useEffect(() => {
    setHidden(false);
  }, []);

  // React.useEffect(() => {
  //   setHidden(true);
  // }, [current]);

  const appRef = React.useRef();

  return (
    <div className="App" ref={appRef}>
      <FrontPage
        appRef={appRef}
        current={current}
        setCurr={setCurrent}
        setHidden={setHidden}
      />
      <AboutMe
        appRef={appRef}
        hidden={hidden}
        current={current}
        setCurrent={setCurrent}
      />
      <Experience
        appRef={appRef}
        hidden={hidden}
        current={current}
        setCurrent={setCurrent}
      />
      <Project
        appRef={appRef}
        current={current}
        hidden={hidden}
        setCurrent={setCurrent}
      />
      <Contact
        appRef={appRef}
        current={current}
        hidden={hidden}
        setCurrent={setCurrent}
      />
    </div>
  );
}

export default App;
