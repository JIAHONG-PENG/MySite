import React from "react";

import "./App.css";
import FrontPage from "./page/FrontPage";
import AboutMe from "./page/AboutMe";
import Experience from "./page/Experience";
import Project from "./page/Project";
import Contact from "./page/Contact";
import Menu from "./component/Menu.js/Menu";

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
      <Menu appRef={appRef} current={current} setCurrent={setCurrent} />

      <FrontPage appRef={appRef} current={current} setCurr={setCurrent} />
      <AboutMe appRef={appRef} hidden={hidden} current={current} />
      <Experience appRef={appRef} hidden={hidden} current={current} />
      <Project appRef={appRef} current={current} hidden={hidden} />
      <Contact appRef={appRef} current={current} hidden={hidden} />
    </div>
  );
}

export default App;
