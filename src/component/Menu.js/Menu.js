import React from "react";

function Menu(props) {
  const current = props.current;

  // const homeRef = React.useRef();
  // const homeTop = homeRef.current.getBoundingClientRect().top;

  // const aboutmeRef = React.useRef();
  // const experienceRef = React.useRef();

  return (
    <div className={`menu ${current === 0 ? "notDisplay" : ""}`}>
      <div
        // ref={homeRef}
        className={`${current === 0 ? "orange" : ""}`}
        onClick={() => {
          // window.scrollBy(0, (0 - current) * window.innerHeight);
          // window.scrollBy(
          //   0,
          //   props.appRef.current
          //     .querySelector(".background")
          //     .getBoundingClientRect().top
          // );
          props.setCurrent(0);
        }}
      >
        Home
      </div>
      <div
        // ref={aboutmeRef}
        className={`${current === 1 ? "orange" : ""}`}
        onClick={() => {
          // window.scrollBy(0, (1 - current) * window.innerHeight);
          // window.scrollBy(
          //   0,
          //   props.appRef.current
          //     .querySelector(".AboutMe")
          //     .getBoundingClientRect().top
          // );
          props.setCurrent(1);
        }}
      >
        About
      </div>
      <div
        // ref={experienceRef}
        className={`${current === 2 ? "orange" : ""}`}
        onClick={() => {
          // window.scrollBy(
          //   0,
          //   props.appRef.current
          //     .querySelector(".Experience")
          //     .getBoundingClientRect().top
          // );
          // console.log(
          //   props.appRef.current
          //     .querySelector(".Experience")
          //     .getBoundingClientRect().top
          // );
          props.setCurrent(2);
        }}
      >
        Experience
      </div>
      <div
        className={`${current === 3 ? "orange" : ""}`}
        onClick={() => {
          // window.scrollBy(
          //   0,
          //   props.appRef.current
          //     .querySelector(".Project")
          //     .getBoundingClientRect().top
          // );
          props.setCurrent(3);
        }}
      >
        Project
      </div>
      <div
        className={`${current === 4 ? "orange" : ""}`}
        onClick={() => {
          // window.scrollBy(
          //   0,
          //   props.appRef.current
          //     .querySelector(".Contact")
          //     .getBoundingClientRect().top
          // );
          props.setCurrent(4);
        }}
      >
        Contact
      </div>
    </div>
  );
}

export default Menu;
