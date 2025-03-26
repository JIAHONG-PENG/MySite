import React from "react";

import parse from "html-react-parser";
import "./App.scss";

function App() {
  React.useEffect(() => {
    const skill_section = document.querySelector(".skill");
    const about_section = document.querySelector(".about");
    const project_section = document.querySelector(".project");
    // const footer_img = document.querySelector(".footer-img");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target); // Stop observing after it's loaded
          }
        });
      },
      { threshold: 0.2 }
    ); // Trigger when 20% of the section is visible

    observer.observe(skill_section);
    observer.observe(about_section);
    observer.observe(project_section);

    const handleScroll = () => {
      const bottomReached =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 1;

      if (bottomReached) {
        setTimeout(() => {
          about_section.classList.add("move-up");
        }, 500);
      }
    };

    // if window is currently at bottom
    if (
      window.innerHeight + window.scrollY >=
      document.documentElement.scrollHeight - 1
    ) {
      setTimeout(() => {
        about_section.classList.add("move-up");
      }, 500);
    }

    window.addEventListener("scroll", handleScroll);

    // footer_img.addEventListener("transitionend", () => {
    //   footer_img.style.position = "absolute";
    // });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  // function P_onMouseEnter() {
  //   const p = document.querySelector(".P");

  //   var position = 0;
  //   var v = 3;
  //   var a = 9.8;
  //   var t = 1;

  //   var interval = setInterval(() => {
  //     // v = v + (a * t) / 2;
  //     t = t + 0.03;
  //     position = v * t + (a * t * t) / 2;
  //     console.log(position);

  //     if (position >= 300) {
  //       v = -v;
  //       t = 0;
  //       position = 300;
  //       p.style.transform = `translateY(${position}px)`;

  //       // clearInterval(interval);
  //     } else {
  //       p.style.transform = `translateY(${position}px)`;
  //     }
  //   }, 30);
  // }

  const projects = [
    {
      name: "Sorting Algorithm Visualizer",
      description: `The aim of this app is to <b>visualize</b> the sorting process of
            some algorithms, such as <u>bubble sort</u>, <u>merge sort</u>,
            <u>quick sort</u>, etc.`,
      link: "https://glowing-conkies-a1fa52.netlify.app/",
    },
    {
      name: "Submitter, Score board (Samsung Flip event)",
      description: `- Submitter receives input from user and sends to database on
                  AWS <br />- Scoreboard ranks scores and reranks when a new
                  record received`,
    },
  ];

  function handleMouseEnter(index) {
    if (index !== 0) {
      document.querySelectorAll(".project-item")[
        index - 1
      ].style.transform = `translateX(-${index * 50}px)`;
    }
  }

  function handleMouseLeave(index) {
    if (index !== 0) {
      document.querySelectorAll(".project-item")[
        index - 1
      ].style.transform = `translateX(-${(index - 1) * 50}px)`;
    }
  }

  const project_items = projects.map(({ name, description, link }, index) => {
    return (
      <li
        className="project-item"
        key={index}
        onMouseEnter={() => {
          handleMouseEnter(index);
        }}
        onMouseLeave={() => {
          handleMouseLeave(index);
        }}
      >
        <a
          className="text-decoration-none"
          target={link && "_blank"}
          href={link || ""}
          rel="noreferrer"
        >
          {name}
        </a>
        <br />
        <br />
        {parse(description)}
      </li>
    );
  });

  function projectOnClick() {
    document.querySelector(".project").scrollIntoView();
  }

  function skillOnClick() {
    document.querySelector(".skill").scrollIntoView();
  }

  function aboutOnClick() {
    document.querySelector(".about").scrollIntoView();
  }

  return (
    <div className="App overpass-regular">
      <div className="container-sm menu">
        <div className="row">
          <div className="col-md-1"></div>

          <div className="col-md-4 text-center">
            <h4>Chris Peng</h4>
            <p>Software Developer | Tech Enthusiast</p>
          </div>

          <div className="col-md-6">
            <div className="row height100">
              <div className="col-md-4 flex-display align-item-center flex-direction-column ">
                <h5 className="menu-item" onClick={aboutOnClick}>
                  About
                  <div className="line"></div>
                </h5>
              </div>
              <div className="col-md-4 flex-display align-item-center  flex-direction-column ">
                <h5 className="menu-item" onClick={projectOnClick}>
                  Project
                  <div className="line"></div>
                </h5>
              </div>
              <div className="col-md-4 flex-display align-item-center flex-direction-column ">
                <h5 className="menu-item" onClick={skillOnClick}>
                  Skills
                  <div className="line"></div>
                </h5>
              </div>
            </div>
          </div>

          <div className="col-md-1"></div>
        </div>

        {/* <div className="overflow-hidden flex-display align-item-center justify-content-center">
          <div className="picture"></div>
        </div> */}
        <div className="picture">
          <div className="">
            <div className="P">
              <svg
                viewBox="0 0 128 128"
                xmlns="http://www.w3.org/2000/svg"
                // xmlns:xlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                className="iconify iconify--noto"
                preserveAspectRatio="xMidYMid meet"
                fill="#000000"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    d="M72.51 15.42H34.65c-.15 0-.28.06-.42.08h-6.47c-1.24 0-2.24 1-2.24 2.24v100.97c0 1.24 1 2.24 2.24 2.24h21.9c1.24 0 2.24-1 2.24-2.24V86.63h20.61c19.83 0 35.96-15.97 35.96-35.6c.01-19.63-16.13-35.61-35.96-35.61zm-1.72 50.22c-.35.03-.7.06-1.06.06H52.28c-.05 0-.09-.04-.14-.06a.513.513 0 0 1-.24-.1a.577.577 0 0 1-.21-.43V36.94c0-.18.09-.32.21-.43c.06-.06.14-.07.22-.09c.06-.02.09-.06.15-.06h17.45c.4 0 .8.03 1.19.06c7.25.63 12.97 6.94 12.97 14.61c.01 7.71-5.77 14.05-13.09 14.61z"
                    fill="#ffffff"
                  ></path>
                </g>
              </svg>
            </div>
            <div className="O">
              <svg
                viewBox="0 0 128 128"
                xmlns="http://www.w3.org/2000/svg"
                // xmlns:xlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                className="iconify iconify--noto"
                preserveAspectRatio="xMidYMid meet"
                fill="#000000"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <radialGradient
                    id="IconifyId17ecdb2904d178eab5646"
                    cx="63.6"
                    cy="1696.9"
                    r="56.96"
                    gradientTransform="translate(0 -1634)"
                    gradientUnits="userSpaceOnUse"
                  >
                    {" "}
                    <stop offset=".5" stopColor="#fde030">
                      {" "}
                    </stop>{" "}
                    <stop offset=".92" stopColor="#f7c02b">
                      {" "}
                    </stop>{" "}
                    <stop offset="1" stopColor="#f4a223">
                      {" "}
                    </stop>{" "}
                  </radialGradient>{" "}
                  <path
                    d="M63.6 118.8c-27.9 0-58-17.5-58-55.9S35.7 7 63.6 7c15.5 0 29.8 5.1 40.4 14.4c11.5 10.2 17.6 24.6 17.6 41.5s-6.1 31.2-17.6 41.4c-10.6 9.3-25 14.5-40.4 14.5z"
                    fill="url(#IconifyId17ecdb2904d178eab5646)"
                  >
                    {" "}
                  </path>{" "}
                  <path
                    d="M111.49 29.67c5.33 8.6 8.11 18.84 8.11 30.23c0 16.9-6.1 31.2-17.6 41.4c-10.6 9.3-25 14.5-40.4 14.5c-18.06 0-37-7.35-48.18-22.94c10.76 17.66 31 25.94 50.18 25.94c15.4 0 29.8-5.2 40.4-14.5c11.5-10.2 17.6-24.5 17.6-41.4c0-12.74-3.47-24.06-10.11-33.23z"
                    fill="#eb8f00"
                  >
                    {" "}
                  </path>{" "}
                  <g>
                    {" "}
                    <path
                      d="M64.6 85.6c3.81.01 7.61-.19 11.4-.6c.05-6.63-5.29-12.04-11.92-12.08S52.05 78.2 52 84.83c4.18.52 8.39.78 12.6.77z"
                      fill="#ffffff"
                    >
                      {" "}
                    </path>{" "}
                    <path
                      d="M52 84.83V97.4c0 6.63 5.37 12 12 12s12-5.37 12-12V85.6v-.63c-3.78.42-7.57.63-11.37.63c-4.22.01-8.44-.25-12.63-.77z"
                      fill="#422b0d"
                    >
                      {" "}
                    </path>{" "}
                    <g fill="#422b0d">
                      {" "}
                      <path d="M83.7 40.6c3.8 0 7.3 4.4 7.3 11.8s-3.5 11.8-7.3 11.8s-7.3-4.4-7.3-11.8s3.4-11.8 7.3-11.8z">
                        {" "}
                      </path>{" "}
                      <path d="M44.3 40.6c-4.1 0-7.7 4.4-7.7 11.8s3.7 11.8 7.7 11.8S52 59.8 52 52.4s-3.7-11.8-7.7-11.8z">
                        {" "}
                      </path>{" "}
                      <g>
                        {" "}
                        <path d="M45.6 28.9c2.3.2 3.2-2.9.8-3.6c-1.89-.51-3.85-.71-5.8-.6c-5.29.2-10.3 2.42-14 6.2c-1.7 1.8.7 4 2.5 2.7a26.231 26.231 0 0 1 16.5-4.7z">
                          {" "}
                        </path>{" "}
                        <path d="M82.2 28.9c5.9-.34 11.75 1.31 16.6 4.7c1.8 1.3 4.2-.9 2.5-2.7a20.906 20.906 0 0 0-14-6.2c-1.95-.11-3.91.09-5.8.6c-.98.28-1.55 1.29-1.27 2.27c.24.87 1.08 1.43 1.97 1.33">
                          {" "}
                        </path>{" "}
                      </g>{" "}
                    </g>{" "}
                    <path
                      d="M44.28 44.87a2.874 2.874 0 0 0-3.82 1.34c-.53 1.11-.29 2.44.6 3.3c1.42.68 3.13.08 3.82-1.34c.53-1.11.29-2.44-.6-3.3z"
                      fill="#896024"
                    >
                      {" "}
                    </path>{" "}
                    <g>
                      {" "}
                      <path
                        d="M83.31 44.87a2.869 2.869 0 0 0-3.81 1.37c-.52 1.11-.28 2.42.6 3.27c1.43.67 3.13.06 3.81-1.37c.52-1.1.28-2.42-.6-3.27z"
                        fill="#896024"
                      >
                        {" "}
                      </path>{" "}
                    </g>{" "}
                    <path
                      d="M76 85.6c-.58-2.94-2.12-5.61-4.37-7.6a11.615 11.615 0 0 0-15.26 0A13.753 13.753 0 0 0 52 85.6c-.56-3.35.44-6.77 2.71-9.29c4.49-5.13 12.3-5.65 17.43-1.15c.41.36.79.74 1.15 1.15c1.13 1.28 1.96 2.79 2.44 4.43c.46 1.58.55 3.24.27 4.86z"
                      fill="#eb8f00"
                    >
                      {" "}
                    </path>{" "}
                  </g>{" "}
                </g>
              </svg>
            </div>
            <div className="R">
              <svg
                viewBox="0 0 128 128"
                xmlns="http://www.w3.org/2000/svg"
                // xmlns:xlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                className="iconify iconify--noto"
                preserveAspectRatio="xMidYMid meet"
                fill="#000000"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    d="M110.7 117.03L85.59 83.64c13.01-5.37 22.18-18.08 22.18-32.87c0-19.63-16.13-35.61-35.96-35.61H33.95c-.15 0-.28.06-.42.09h-6.46c-1.24 0-2.24 1-2.24 2.24v100.96c0 1.24 1 2.24 2.24 2.24h21.89c1.24 0 2.24-1 2.24-2.24V86.37h8.64l25.2 33.51c.45.59 1.15.94 1.89.94h21.89c.9 0 1.72-.51 2.11-1.31c.4-.8.31-1.76-.23-2.48zM70.12 65.38c-.36.03-.72.06-1.08.06H51.57c-.05 0-.09-.04-.14-.06c-.09-.02-.18-.04-.24-.1a.577.577 0 0 1-.21-.43V36.67c0-.17.08-.32.21-.43c.06-.05.14-.07.22-.09c.06-.02.1-.07.16-.07h17.46c.42 0 .84.03 1.25.07c7.22.66 12.9 6.96 12.9 14.61c.01 7.72-5.76 14.04-13.06 14.62z"
                    fill="#ffffff"
                  ></path>
                </g>
              </svg>
            </div>
            <div className="T">
              <svg
                viewBox="0 0 128 128"
                xmlns="http://www.w3.org/2000/svg"
                // xmlns:xlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                className="iconify iconify--noto"
                preserveAspectRatio="xMidYMid meet"
                fill="#000000"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    d="M111.84 15.36H16.16c-1.24 0-2.24 1-2.24 2.24v17.99c0 1.24 1 2.24 2.24 2.24h34.65v80.73c0 1.24 1 2.24 2.24 2.24h21.9c1.24 0 2.24-1 2.24-2.24V37.83h34.65c1.24 0 2.24-1 2.24-2.24V17.6c0-1.24-1-2.24-2.24-2.24z"
                    fill="#ffffff"
                  ></path>
                </g>
              </svg>
            </div>
            <div className="F">
              <svg
                viewBox="0 0 128 128"
                xmlns="http://www.w3.org/2000/svg"
                // xmlns:xlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                className="iconify iconify--noto"
                preserveAspectRatio="xMidYMid meet"
                fill="#000000"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    d="M101.15 15.54H34.86c-1.23 0-2.24 1-2.24 2.24v100.97c0 1.24 1.01 2.24 2.24 2.24h21.89c1.24 0 2.24-1 2.24-2.24v-44H94.1c1.24 0 2.24-1 2.24-2.24V55.79c0-1.24-1-2.24-2.24-2.24H58.99v-16.8h42.16c1.24 0 2.24-1 2.24-2.24V17.78c0-1.24-1-2.24-2.24-2.24z"
                    fill="#ffffff"
                  ></path>
                </g>
              </svg>
            </div>
            <div className="O">
              <svg
                viewBox="0 0 128 128"
                xmlns="http://www.w3.org/2000/svg"
                // xmlns:xlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                className="iconify iconify--noto"
                preserveAspectRatio="xMidYMid meet"
                fill="#000000"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <radialGradient
                    id="IconifyId17ecdb2904d178eab5533"
                    cx="63.6"
                    cy="1696.9"
                    r="56.96"
                    gradientTransform="translate(0 -1634)"
                    gradientUnits="userSpaceOnUse"
                  >
                    {" "}
                    <stop offset=".5" stopColor="#fde030">
                      {" "}
                    </stop>{" "}
                    <stop offset=".92" stopColor="#f7c02b">
                      {" "}
                    </stop>{" "}
                    <stop offset="1" stopColor="#f4a223">
                      {" "}
                    </stop>{" "}
                  </radialGradient>{" "}
                  <path
                    d="M63.6 118.8c-27.9 0-58-17.5-58-55.9S35.7 7 63.6 7c15.5 0 29.8 5.1 40.4 14.4c11.5 10.2 17.6 24.6 17.6 41.5s-6.1 31.2-17.6 41.4c-10.6 9.3-25 14.5-40.4 14.5z"
                    fill="url(#IconifyId17ecdb2904d178eab5533)"
                  >
                    {" "}
                  </path>{" "}
                  <path
                    d="M111.49 29.67c5.33 8.6 8.11 18.84 8.11 30.23c0 16.9-6.1 31.2-17.6 41.4c-10.6 9.3-25 14.5-40.4 14.5c-18.06 0-37-7.35-48.18-22.94c10.76 17.66 31 25.94 50.18 25.94c15.4 0 29.8-5.2 40.4-14.5c11.5-10.2 17.6-24.5 17.6-41.4c0-12.74-3.47-24.06-10.11-33.23z"
                    fill="#eb8f00"
                  >
                    {" "}
                  </path>{" "}
                  <g>
                    {" "}
                    <path
                      d="M52.7 103c-3.35 0-6.45-1.74-8.2-4.6a8 8 0 0 1 .4-8.9c4.3-6 10.9-9.2 19.1-9.2s14.8 3.2 19.1 9.2a8 8 0 0 1 .4 8.9a9.606 9.606 0 0 1-8.2 4.6c-1.05-.01-2.1-.18-3.1-.5a26.56 26.56 0 0 0-16.4 0c-1 .31-2.05.48-3.1.5z"
                      fill="#422b0d"
                    >
                      {" "}
                    </path>{" "}
                    <g fill="#422b0d">
                      {" "}
                      <path d="M83.4 31.31h-.1c-1.01.08-1.9-.67-1.99-1.68c-.08-1.01.67-1.9 1.68-1.99c1.93-.29 3.9-.27 5.83.05c5.23.8 9.96 3.56 13.22 7.73c1.49 2-1.14 3.9-2.79 2.4c-4.4-3.89-9.98-6.18-15.85-6.51z">
                        {" "}
                      </path>{" "}
                      <path d="M44.85 31.31H45c1.02.02 1.85-.79 1.87-1.81c.02-.92-.66-1.72-1.57-1.85c-1.93-.29-3.9-.27-5.83.05c-5.24.79-9.97 3.56-13.23 7.73c-1.48 2 1.15 3.9 2.79 2.4a26.23 26.23 0 0 1 15.82-6.52z">
                        {" "}
                      </path>{" "}
                    </g>{" "}
                    <path
                      d="M44 49.94c-4.19 0-8 3.54-8 9.42s3.81 9.41 8 9.41c4.2 0 8-3.54 8-9.41s-3.76-9.42-8-9.42z"
                      fill="#422b0d"
                    >
                      {" "}
                    </path>{" "}
                    <path
                      d="M43.65 53.87a2.874 2.874 0 0 0-3.82 1.34c-.53 1.11-.29 2.44.6 3.3c1.42.68 3.13.08 3.82-1.34c.53-1.11.29-2.44-.6-3.3z"
                      fill="#896024"
                    >
                      {" "}
                    </path>{" "}
                    <path
                      d="M82.4 49.94c-4.19 0-8 3.54-8 9.42s3.81 9.41 8 9.41c4.19 0 8-3.54 8-9.41s-3.81-9.42-8-9.42z"
                      fill="#422b0d"
                    >
                      {" "}
                    </path>{" "}
                    <g>
                      {" "}
                      <path
                        d="M82 53.87a2.874 2.874 0 0 0-3.82 1.34c-.53 1.11-.29 2.44.6 3.3c1.42.68 3.13.08 3.82-1.34c.53-1.11.29-2.44-.6-3.3z"
                        fill="#896024"
                      >
                        {" "}
                      </path>{" "}
                    </g>{" "}
                  </g>{" "}
                </g>
              </svg>
            </div>
            <div className="L">
              <svg
                viewBox="0 0 128 128"
                xmlns="http://www.w3.org/2000/svg"
                // xmlns:xlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                className="iconify iconify--noto"
                preserveAspectRatio="xMidYMid meet"
                fill="#000000"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    d="M102.89 99.51H57.24v-82c0-1.24-1-2.24-2.24-2.24H33.11c-1.24 0-2.24 1-2.24 2.24v100.96c0 1.24 1 2.24 2.24 2.24h69.79c1.24 0 2.24-1 2.24-2.24v-16.72a2.251 2.251 0 0 0-2.25-2.24z"
                    fill="#ffffff"
                  ></path>
                </g>
              </svg>
            </div>
            <div className="I">
              <svg
                viewBox="0 0 128 128"
                xmlns="http://www.w3.org/2000/svg"
                // xmlns:xlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                className="iconify iconify--noto"
                preserveAspectRatio="xMidYMid meet"
                fill="#000000"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    d="M76.32 16.27H51.68c-1.29 0-2.33 1.05-2.33 2.33v99.96c0 1.29 1.04 2.33 2.33 2.33h24.64c1.29 0 2.33-1.04 2.33-2.33V18.6c0-1.28-1.04-2.33-2.33-2.33z"
                    fill="#ffffff"
                  ></path>
                </g>
              </svg>
            </div>
            <div className="O">
              <svg
                viewBox="0 0 128 128"
                xmlns="http://www.w3.org/2000/svg"
                // xmlns:xlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                className="iconify iconify--noto"
                preserveAspectRatio="xMidYMid meet"
                fill="#000000"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <radialGradient
                    id="IconifyId17ecdb2904d178eab5797"
                    cx="63.6"
                    cy="216.9"
                    r="56.96"
                    gradientTransform="translate(0 -154)"
                    gradientUnits="userSpaceOnUse"
                  >
                    {" "}
                    <stop offset=".5" stopColor="#fde030">
                      {" "}
                    </stop>{" "}
                    <stop offset=".92" stopColor="#f7c02b">
                      {" "}
                    </stop>{" "}
                    <stop offset="1" stopColor="#f4a223">
                      {" "}
                    </stop>{" "}
                  </radialGradient>{" "}
                  <path
                    d="M63.6 118.8c-27.9 0-58-17.5-58-55.9S35.7 7 63.6 7c15.5 0 29.8 5.1 40.4 14.4c11.5 10.2 17.6 24.6 17.6 41.5s-6.1 31.2-17.6 41.4c-10.6 9.3-25 14.5-40.4 14.5z"
                    fill="url(#IconifyId17ecdb2904d178eab5797)"
                  >
                    {" "}
                  </path>{" "}
                  <path
                    d="M111.49 29.67c5.33 8.6 8.11 18.84 8.11 30.23c0 16.9-6.1 31.2-17.6 41.4c-10.6 9.3-25 14.5-40.4 14.5c-18.06 0-37-7.35-48.18-22.94c10.76 17.66 31 25.94 50.18 25.94c15.4 0 29.8-5.2 40.4-14.5c11.5-10.2 17.6-24.5 17.6-41.4c0-12.74-3.47-24.06-10.11-33.23z"
                    fill="#eb8f00"
                  >
                    {" "}
                  </path>{" "}
                  <path
                    d="M101.7 72.21a5.8 5.8 0 0 0-7.14-2.6c-9 2.8-20 3.83-31.08 3.84A111.07 111.07 0 0 1 31.89 69a5.8 5.8 0 0 0-7.14 2.6c-1.36 2.51-.37 5.42.77 7.93C32 93.65 46.1 102.09 63.4 102.14h.16c17.3 0 30.94-7.9 37.37-22c1.14-2.51 2.13-5.42.77-7.93z"
                    fill="#ffffff"
                  >
                    {" "}
                  </path>{" "}
                  <g fill="#422b0d">
                    {" "}
                    <path d="M49 56.89l-.15-.2l-.43-.55l-.53-.57c-.22-.25-.48-.49-.73-.75s-.56-.51-.84-.72c-.26-.2-.54-.39-.84-.54c-.2-.11-.42-.2-.65-.25a.739.739 0 0 0-.21 0H44.45h.27h-.55c-.15 0-.05 0 0 0h.08c.08 0 0 0 0 0h-.11c-.23.05-.45.13-.66.25c-.29.16-.58.34-.84.54c-.29.22-.57.46-.83.72c-.53.51-1 1-1.3 1.39l-.52.6l-.23.27a4.231 4.231 0 0 1-5.62.61a3.54 3.54 0 0 1-1.47-3.48s.07-.4.26-1.11c.3-1.01.72-1.99 1.25-2.91c.85-1.5 2-2.81 3.38-3.85c.91-.7 1.92-1.26 3-1.65c.3-.12.61-.21.92-.29c.33-.1.66-.17 1-.23l.61-.09l.51-.06h1.85c.34 0 .67.09 1 .14c.64.11 1.28.28 1.89.51c1.08.39 2.09.95 3 1.65c1.38 1.04 2.53 2.35 3.38 3.85c.31.52.58 1.07.8 1.63c.19.45.35.9.48 1.37c.07.24.13.48.16.72v.25c.3 2.04-1.12 3.94-3.16 4.24c-.05.01-.1.01-.15.02c-1.46.21-2.92-.37-3.85-1.51z">
                      {" "}
                    </path>{" "}
                    <path d="M88.46 56.89l-.16-.2l-.43-.55l-.53-.57c-.22-.25-.48-.49-.73-.75s-.56-.51-.84-.72c-.26-.2-.54-.39-.84-.54c-.2-.11-.42-.2-.65-.25a.739.739 0 0 0-.21 0H83.9h.27h-.55c-.15 0-.05 0 0 0h.08c.08 0 0 0 0 0h-.11c-.23.05-.45.13-.66.25c-.29.15-.57.34-.83.54c-.3.22-.58.46-.84.72c-.53.51-1 1-1.3 1.39l-.52.6l-.22.27a4.244 4.244 0 0 1-5.63.61a3.54 3.54 0 0 1-1.47-3.48s.07-.4.27-1.11c.3-1.02.71-2 1.25-2.91c.85-1.5 1.99-2.81 3.37-3.85c.91-.7 1.92-1.26 3-1.65c.3-.12.61-.21.92-.29c.33-.1.66-.17 1-.23l.62-.09l.5-.06h1.85c.34 0 .67.09 1 .14c.65.11 1.28.28 1.89.51c1.08.39 2.09.95 3 1.65c1.38 1.04 2.53 2.35 3.38 3.85c.31.52.58 1.07.8 1.63c.19.44.35.89.48 1.35c.07.24.13.48.16.72v.25a3.74 3.74 0 0 1-3.12 4.27c-.03 0-.06.01-.09.01c-1.49.25-3-.33-3.94-1.51z">
                      {" "}
                    </path>{" "}
                  </g>{" "}
                  <path
                    d="M100.89 75.83c-.09.06-6.2 4.63-17.69 7.59v-11.3c-1.31.2-2.65.37-4 .52v11.68c-4.65.92-9.38 1.43-14.12 1.53V73.43h-4v12.42c.43.01.43.02 0 .02l-.02-.02c-4.63-.08-9.24-.52-13.8-1.33V72.33c-1.36-.18-2.69-.39-4-.62v11.97c-11.82-2.81-17.76-7.3-17.84-7.37a1.96 1.96 0 0 0-1.16-.42c.28 1.26.7 2.49 1.26 3.66c.35.77.73 1.51 1.13 2.25a63.036 63.036 0 0 0 16.61 6v9.86c1.3.63 2.64 1.2 4 1.69V88.6c4.56.76 9.18 1.18 13.8 1.25l.02.02h-.02v12.21c.77 0 1.55.08 2.34.08h1.66V89.85H65h.06c4.74-.09 9.47-.57 14.14-1.43v11.21c1.36-.46 2.7-1 4-1.61V87.57c6.1-1.4 11.97-3.69 17.41-6.79c.1-.22.22-.42.32-.64c.73-1.48 1.21-3.07 1.4-4.71c-.51-.06-1.03.09-1.44.4z"
                    fill="#b3b3b3"
                  >
                    {" "}
                  </path>{" "}
                  <path
                    d="M102.11 71.63A5.877 5.877 0 0 0 94.92 69c-10.26 2.99-20.9 4.48-31.58 4.43A111.05 111.05 0 0 1 31.75 69a5.802 5.802 0 0 0-7.13 2.6c-1.36 2.51-.38 5.42.77 7.93c.51 1.13 1.08 2.24 1.71 3.31c0 0-2.1-7.78-.28-10.04a3.55 3.55 0 0 1 2.8-1.62c.47 0 .93.08 1.38.22c10.44 3.07 21.27 4.62 32.16 4.6h.35c10.89.02 21.72-1.53 32.16-4.6c.45-.14.91-.22 1.38-.22c1.14.06 2.19.66 2.81 1.62c1.85 2.26-.28 10.07-.28 10.07c.62-1.07 1.24-2.17 1.76-3.31c1.14-2.51 2.13-5.41.77-7.93z"
                    fill="#eb8f00"
                  >
                    {" "}
                  </path>{" "}
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div className="container-xl skill">
        <div className="container-sm">
          <h3 className="heading">
            <b>Skills</b>
          </h3>
          <div className="row">
            <div className="col-md-3 col-sm-6 col-6">
              <svg
                className="html5"
                fill="#000000"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                //   xmlns:xlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 512 512"
                enableBackground="new 0 0 512 512"
                //   xml:space="preserve"
              >
                <g id="c133de6af664cd4f011a55de6b000d0b">
                  <path
                    display="inline"
                    d="M108.669,0.501h23.032v22.756h21.069V0.501h23.034V69.41h-23.032V46.334h-21.069V69.41h-23.032V0.501
		H108.669z M206.091,23.353h-20.275V0.501h63.594v22.852h-20.285V69.41h-23.032V23.353H206.091z M259.502,0.501h24.02l14.771,24.213
		l14.759-24.213h24.023V69.41h-22.938V35.256l-15.845,24.5h-0.395l-15.856-24.5V69.41h-22.539V0.501z M348.54,0.501h23.038v46.133
		h32.391V69.41H348.54V0.501z M74.987,100.926l32.946,369.533l147.844,41.04L404.031,470.4l32.981-369.475H74.987z M368.289,188.62
		l-2.063,22.977l-0.906,10.188h-0.149H256h-0.158h-63.956l4.142,46.407h59.814H256h92.98h12.214l-1.106,12.172l-10.65,119.32
		l-0.682,7.652L256,433.045v0.008l-0.208,0.059l-92.839-25.774l-6.351-71.161h20.97h24.527l3.227,36.146l50.474,13.632l0.042-0.013
		v-0.004l50.551-13.64l5.257-58.781H256h-0.158H154.578L143.439,188.62l-1.085-12.157h113.488H256h113.374L368.289,188.62z"
                  ></path>
                </g>
              </svg>
            </div>

            <div className="col-md-3 col-sm-6 col-6">
              <svg
                className="js"
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0" />
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <g id="SVGRepo_iconCarrier">
                  <title>file_type_js_official</title>
                  <rect x="2" y="2" width="28" height="28" />
                  <path
                    fill="#ffffff"
                    d="M20.809,23.875a2.866,2.866,0,0,0,2.6,1.6c1.09,0,1.787-.545,1.787-1.3,0-.9-.716-1.222-1.916-1.747l-.658-.282c-1.9-.809-3.16-1.822-3.16-3.964,0-1.973,1.5-3.476,3.853-3.476a3.889,3.889,0,0,1,3.742,2.107L25,18.128A1.789,1.789,0,0,0,23.311,17a1.145,1.145,0,0,0-1.259,1.128c0,.789.489,1.109,1.618,1.6l.658.282c2.236.959,3.5,1.936,3.5,4.133,0,2.369-1.861,3.667-4.36,3.667a5.055,5.055,0,0,1-4.795-2.691Zm-9.295.228c.413.733.789,1.353,1.693,1.353.864,0,1.41-.338,1.41-1.653V14.856h2.631v8.982c0,2.724-1.6,3.964-3.929,3.964a4.085,4.085,0,0,1-3.947-2.4Z"
                  />
                </g>
              </svg>
            </div>

            <div className="col-md-3 col-sm-6 col-6">
              <svg
                className="css"
                fill="#000000"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                //   xmlns:xlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 512 512"
                enableBackground="new 0 0 512 512"
                //   xml:space="preserve"
              >
                <g id="c133de6af664cd4f011a55de6b001a2b">
                  <path
                    display="inline"
                    d="M204.064,46.682v22.018h-56.302V0.501h56.302v24.13h-32.172v22.051H204.064z M261.941,24.631h22.492
		V0.501h-56.308c0,0,0,12.112,0,24.13c7.533,7.533,11.461,11.139,22.356,22.034c-6.369,0-22.356,0.022-22.356,0.021v22.014h56.308
		V46.682L261.941,24.631z M341.746,24.631h22.49V0.501H307.93c0,0,0,12.112,0,24.13c7.531,7.533,11.461,11.139,22.355,22.034
		c-6.365,0-22.355,0.022-22.355,0.021v22.014h56.307V46.682L341.746,24.631z M438.395,101.112l-34.203,370.486l-148.193,39.9
		l-148.196-39.9L73.605,101.112H438.395z M369.477,176.444H255.865h-115.62l5.529,44.739h110.091h6.184l-6.184,2.574
		l-106.067,44.177l3.518,43.73l102.549,0.333l54.963,0.175l-3.521,58.311l-51.442,14.484v-0.046l-0.422,0.116l-49.684-12.542
		l-3.015-36.195h-0.164h-46.085h-0.162l6.032,69.876l93.5,27.649v-0.05l0.168,0.05l93-27.146L361.1,267.935H255.865h-0.26
		l0.26-0.112l109.086-46.639L369.477,176.444z"
                  ></path>
                </g>
              </svg>
            </div>

            <div className="col-md-3 col-sm-6 col-6">
              <svg
                className="git"
                viewBox="0 -74 256 256"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                //   xmlns:xlink="http://www.w3.org/1999/xlink"
                preserveAspectRatio="xMidYMid"
                fill="#000000"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0" />
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <g>
                    {" "}
                    <path
                      d="M152.983963,37.213516 C147.387032,37.213516 143.218557,39.9617169 143.218557,46.5756347 C143.218557,51.5588676 145.965589,55.0189589 152.682374,55.0189589 C158.37516,55.0189589 162.242046,51.6640731 162.242046,46.3698995 C162.242046,40.3696804 158.781954,37.213516 152.983963,37.213516 L152.983963,37.213516 L152.983963,37.213516 Z M141.793607,83.9153973 C140.469187,85.5402374 139.149443,87.2679452 139.149443,89.3054247 C139.149443,93.3722009 144.334904,94.5960913 151.458484,94.5960913 C157.359342,94.5960913 165.397041,94.1822831 165.397041,88.6964018 C165.397041,85.435032 161.530155,85.2339726 156.643945,84.9277078 L141.793607,83.9153973 L141.793607,83.9153973 Z M171.906922,37.5209498 C173.73516,39.8611872 175.670941,43.1178813 175.670941,47.7971872 C175.670941,59.089242 166.819653,65.7008219 154.004457,65.7008219 C150.745425,65.7008219 147.794995,65.2951963 145.965589,64.7867032 L142.607196,70.1778995 L152.576,70.7869224 C170.178046,71.9091142 180.551306,72.4187763 180.551306,85.9435251 C180.551306,97.6458813 170.278575,104.255123 152.576,104.255123 C134.162703,104.255123 127.14316,99.5758174 127.14316,91.5392877 C127.14316,86.9605114 129.178301,84.5244201 132.738922,81.1613516 C129.38053,79.7422466 128.263014,77.1997808 128.263014,74.4515799 C128.263014,72.2118721 129.38053,70.1778995 131.214612,68.2432877 C133.045187,66.3133516 135.07916,64.3775708 137.521096,62.1402009 C132.536694,59.6982648 128.771507,54.4075982 128.771507,46.8783927 C128.771507,35.1807123 136.50411,27.1465205 152.066338,27.1465205 C156.441717,27.1465205 159.088219,27.5486393 161.428457,28.1635068 L181.267872,28.1635068 L181.267872,36.8078904 L171.906922,37.5209498 L171.906922,37.5209498 Z"
                      fill="#2F27072F2707"
                    >
                      {" "}
                    </path>{" "}
                    <path
                      d="M199.165662,19.0340091 C193.365333,19.0340091 190.009279,15.6744475 190.009279,9.87294977 C190.009279,4.0796347 193.365333,0.92347032 199.165662,0.92347032 C205.066521,0.92347032 208.423744,4.0796347 208.423744,9.87294977 C208.423744,15.6744475 205.066521,19.0340091 199.165662,19.0340091 L199.165662,19.0340091 L199.165662,19.0340091 Z M186.039525,80.1712511 L186.039525,72.1382283 L191.229662,71.4286758 C192.654612,71.2229406 192.85684,70.9190137 192.85684,69.3900274 L192.85684,39.4801096 C192.85684,38.3637626 192.552913,37.6483653 191.53242,37.3456073 L186.039525,35.4109954 L187.15821,27.1734064 L208.219178,27.1734064 L208.219178,69.3900274 C208.219178,71.0207123 208.31737,71.2229406 209.847525,71.4286758 L215.036493,72.1382283 L215.036493,80.1712511 L186.039525,80.1712511 L186.039525,80.1712511 Z"
                      fill="#2F27072F2707"
                    >
                      {" "}
                    </path>{" "}
                    <path
                      d="M255.267068,76.2272146 C250.890521,78.3617169 244.482338,80.2951598 238.68084,80.2951598 C226.575196,80.2951598 221.998758,75.4171324 221.998758,63.9158356 L221.998758,37.2626119 C221.998758,36.653589 221.998758,36.2456256 221.181662,36.2456256 L214.061589,36.2456256 L214.061589,27.1909406 C223.016913,26.1716164 226.575196,21.6945388 227.693881,10.6058813 L237.359927,10.6058813 L237.359927,25.0564384 C237.359927,25.7659909 237.359927,26.0734247 238.174685,26.0734247 L252.517699,26.0734247 L252.517699,36.2456256 L237.359927,36.2456256 L237.359927,60.5586119 C237.359927,66.5611689 238.786046,68.8990685 244.276603,68.8990685 C247.12884,68.8990685 250.075763,68.188347 252.517699,67.2730594 L255.267068,76.2272146"
                      fill="#2F27072F2707"
                    >
                      {" "}
                    </path>{" "}
                    <path
                      d="M104.528658,49.5295708 L58.0126393,3.01705936 C55.3357443,0.337826484 50.990758,0.337826484 48.3103562,3.01705936 L38.6513242,12.6760913 L50.9042557,24.9290228 C53.7518174,23.9669772 57.0166941,24.6122374 59.2867945,26.8823379 C61.5674155,29.1664658 62.208,32.4593973 61.2225753,35.3163105 L73.0313059,47.1250411 C75.8882192,46.1407854 79.1846575,46.777863 81.4664475,49.0631598 C84.6553425,52.2508858 84.6553425,57.4176438 81.4664475,60.6077078 C78.2763836,63.7977717 73.1096256,63.7977717 69.9183927,60.6077078 C67.5197078,58.2066849 66.9270502,54.6834703 68.141589,51.7283653 L57.1289132,40.7156895 L57.1277443,69.6962922 C57.9050959,70.0820457 58.6391963,70.5952146 59.2867945,71.2404749 C62.4756895,74.4282009 62.4756895,79.5949589 59.2867945,82.7873607 C56.0967306,85.9762557 50.9276347,85.9762557 47.7422466,82.7873607 C44.5533516,79.5949589 44.5533516,74.4282009 47.7422466,71.2404749 C48.5301187,70.4537717 49.4418995,69.8587763 50.4144658,69.4589954 L50.4144658,40.2083653 C49.4418995,39.8109224 48.5312877,39.2194338 47.7422466,38.4268858 C45.3260274,36.0141735 44.7450594,32.4687489 45.9829772,29.5019543 L33.9053881,17.4220274 L2.01059361,49.314484 C-0.669808219,51.9960548 -0.669808219,56.3410411 2.01059361,59.020274 L48.5266119,105.533954 C51.2046758,108.213187 55.5484932,108.213187 58.2300639,105.533954 L104.528658,59.2365297 C107.20789,56.5561279 107.20789,52.2088037 104.528658,49.5295708"
                      fill="#2F2707"
                    >
                      {" "}
                    </path>{" "}
                  </g>{" "}
                </g>
              </svg>
            </div>

            <div className="col-md-3 col-sm-6 col-6">
              <svg
                className="vue"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M2 4L16 28L30 4H24.5L16 18.5L7.5 4H2Z"
                    fill="#000000"
                  ></path>{" "}
                  <path
                    d="M7.5 4L16 18.5L24.5 4H19.5L16.0653 10.0126L12.5 4H7.5Z"
                    fill="#000000"
                  ></path>{" "}
                </g>
              </svg>
            </div>

            <div className="col-md-3 col-sm-6  col-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                enableBackground="new 0 0 128 128"
                viewBox="0 0 128 128"
                className="react"
              >
                <a
                  href="https://iconscout.com/icons/react"
                  className="text-underline font-size-sm"
                  target="_blank"
                  rel="noreferrer"
                >
                  React
                </a>{" "}
                by{" "}
                <a
                  href="https://iconscout.com/contributors/icon-mafia"
                  className="text-underline font-size-sm"
                >
                  Icon Mafia
                </a>{" "}
                on{" "}
                <a
                  href="https://iconscout.com"
                  className="text-underline font-size-sm"
                >
                  IconScout
                </a>
                <g>
                  <circle cx="64" cy="47.5" r="9.3"></circle>
                  <path
                    fill="#000000"
                    d="M64 81.7c7.3 7.1 14.5 11.3 20.3 11.3 1.9 0 3.7-.4 5.2-1.3 5.2-3 7.1-10.5 5.3-21.2-.3-1.9-.7-3.8-1.2-5.8 2-.6 3.8-1.2 5.6-1.8 10.1-3.9 15.7-9.3 15.7-15.2 0-6-5.6-11.4-15.7-15.2-1.8-.7-3.6-1.3-5.6-1.8.5-2 .9-3.9 1.2-5.8 1.7-10.9-.2-18.5-5.4-21.5-1.5-.9-3.3-1.3-5.2-1.3-5.7 0-13 4.2-20.3 11.3-7.2-7.1-14.4-11.3-20.2-11.3-1.9 0-3.7.4-5.2 1.3-5.2 3-7.1 10.5-5.3 21.2.3 1.9.7 3.8 1.2 5.8-2 .6-3.8 1.2-5.6 1.8-10.1 3.9-15.7 9.3-15.7 15.2 0 6 5.6 11.4 15.7 15.2 1.8.7 3.6 1.3 5.6 1.8-.5 2-.9 3.9-1.2 5.8-1.7 10.7.2 18.3 5.3 21.2 1.5.9 3.3 1.3 5.2 1.3 5.8.2 13-4 20.3-11zm-5.6-13.5c1.8.1 3.7.1 5.6.1 1.9 0 3.8 0 5.6-.1-1.8 2.4-3.7 4.6-5.6 6.7-1.9-2.1-3.8-4.3-5.6-6.7zm-12.4-10.3c1 1.7 1.9 3.3 3 4.9-3.1-.4-6-.9-8.8-1.5.9-2.7 1.9-5.5 3.1-8.3.8 1.6 1.7 3.3 2.7 4.9zm-5.8-24.1c2.8-.6 5.7-1.1 8.8-1.5-1 1.6-2 3.2-3 4.9-1 1.7-1.9 3.3-2.7 5-1.3-2.9-2.3-5.7-3.1-8.4zm5.5 13.7c1.3-2.7 2.7-5.4 4.3-8.1 1.5-2.6 3.2-5.2 4.9-7.8 3-.2 6-.3 9.1-.3 3.2 0 6.2.1 9.1.3 1.8 2.6 3.4 5.2 4.9 7.8 1.6 2.7 3 5.4 4.3 8.1-1.3 2.7-2.7 5.4-4.3 8.1-1.5 2.6-3.2 5.2-4.9 7.8-3 .2-6 .3-9.1.3-3.2 0-6.2-.1-9.1-.3-1.8-2.6-3.4-5.2-4.9-7.8-1.6-2.7-3-5.4-4.3-8.1zm39.1-5.4l-2.7-5c-1-1.7-1.9-3.3-3-4.9 3.1.4 6 .9 8.8 1.5-.9 2.8-1.9 5.6-3.1 8.4zm0 10.8c1.2 2.8 2.2 5.6 3.1 8.3-2.8.6-5.7 1.1-8.8 1.5 1-1.6 2-3.2 3-4.9.9-1.5 1.8-3.2 2.7-4.9zm2.3 34.7c-.8.5-1.8.7-2.9.7-4.9 0-11-4-17-10 2.9-3.1 5.7-6.6 8.5-10.5 4.7-.4 9.2-1.1 13.4-2.1.5 1.8.8 3.6 1.1 5.4 1.4 8.5.3 14.6-3.1 16.5zm5.2-52.7c11.2 3.2 17.9 8.1 17.9 12.6 0 3.9-4.6 7.8-12.7 10.9-1.6.6-3.4 1.2-5.2 1.7-1.3-4.1-2.9-8.3-4.9-12.6 2-4.3 3.7-8.5 4.9-12.6zm-8-28.2c1.1 0 2 .2 2.9.7 3.3 1.9 4.5 7.9 3.1 16.5-.3 1.7-.7 3.5-1.1 5.4-4.2-.9-8.7-1.6-13.4-2.1-2.7-3.9-5.6-7.4-8.5-10.5 6-5.9 12.1-10 17-10zm-14.7 20.1c-1.8-.1-3.7-.1-5.6-.1s-3.8 0-5.6.1c1.8-2.4 3.7-4.6 5.6-6.7 1.9 2.1 3.8 4.4 5.6 6.7zm-28.7-19.4c.8-.5 1.8-.7 2.9-.7 4.9 0 11 4 17 10-2.9 3.1-5.7 6.6-8.5 10.5-4.7.4-9.2 1.1-13.4 2.1-.5-1.8-.8-3.6-1.1-5.4-1.4-8.5-.3-14.5 3.1-16.5zm-5.2 52.7c-11.2-3.2-17.9-8.1-17.9-12.6 0-3.9 4.6-7.8 12.7-10.9 1.6-.6 3.4-1.2 5.2-1.7 1.3 4.1 2.9 8.3 4.9 12.6-2 4.3-3.7 8.6-4.9 12.6zm2.1 11c.3-1.7.7-3.5 1.1-5.4 4.2.9 8.7 1.6 13.4 2.1 2.7 3.9 5.6 7.4 8.5 10.5-6 5.9-12.1 10-17 10-1.1 0-2-.2-2.9-.7-3.4-1.9-4.5-8-3.1-16.5zM33.6 112.3c2.2-2.7 2.3-5.7 1.1-8.7-1.2-3-3.7-4.4-6.8-4.5-3.7-.1-7.5 0-11.2 0h-.7v25.9h3v-9.8h4.7c.6 0 1.1.2 1.4.7l6 9.3c.1.2.4.5.6.5h3.9c-2.4-3.7-4.7-7.2-7.1-10.8 2.1-.3 3.9-1 5.1-2.6zm-14.6-.2v-9.9h1.1c2.3 0 4.7-.1 7 .1 2.7.1 4.6 2.2 4.6 4.9s-2.2 4.8-4.9 4.9c-2.4.1-4.8 0-7.8 0zM57.7 113.4c-1.6-7-8-8.8-12.9-6.6-3.8 1.7-5.5 5-5.6 9.1-.1 3.1.8 5.9 3.2 8 2.7 2.4 6 2.7 9.4 2.1 1.9-.4 3.6-1.3 4.9-2.7-.5-.7-1-1.4-1.5-2-2.8 2.4-5.9 3.2-9.3 1.6-2.2-1.1-3.3-3.8-3.5-5.8h15.5v-1.3c.1-.9 0-1.7-.2-2.4zm-15.1 1.6c-.3-3 2.7-6.2 6-6.2 3.8-.1 6.2 2.2 6.3 6.2h-12.3zM73.3 106.3c-1.5-.3-3.1-.4-4.6-.3-2.4.2-4.5 1.3-6.2 3.1.5.7.9 1.4 1.5 2.2.2-.2.4-.4.6-.5 1.6-1.5 3.5-2.3 5.8-2.1 1.8.1 3.5.7 4 2.5.4 1.4.3 2.9.4 4.4-.3 0-.4-.1-.5-.2-2.4-2-5.1-2.4-8-1.7-2.7.7-4.4 2.8-4.6 5.5-.2 3.1 1.2 5.4 3.9 6.5 1.7.7 3.6.7 5.4.3 1.4-.3 2-1.1 4-2.2v1.3h2.8c0-4 .1-8.9 0-13.5 0-2.9-1.7-4.7-4.5-5.3zm1.4 12.6c-.1.3 0 .6 0 .9 0 2.1-.5 2.8-2.5 3.6-1.4.5-2.9.7-4.4.2-1.7-.5-2.9-2-2.9-3.7-.1-1.7 1-3.4 2.7-3.9 2.3-.8 4.4-.3 6.3 1.1.6.5 1 1 .8 1.8zM90.3 109c2.6-.8 5-.3 6.8 1.9l.3.2c.7-.6 1.3-1.2 2.1-1.9-.3-.3-.4-.5-.6-.8-2.9-3.1-8.6-3.5-12.1-1-4.9 3.6-4.8 10.6-2.4 14.3 2.3 3.5 5.6 4.7 9.5 4.2 2.3-.3 4.2-1.4 5.7-3.3-.7-.6-1.4-1.2-2.1-1.9-.2.2-.3.3-.4.5-2.7 3-7.2 2.7-9.6-.5-1.4-1.9-1.7-4.1-1.3-6.3.2-2.5 1.5-4.5 4.1-5.4zM111.1 122.6c-.2.1-.3.2-.3.2-.8.6-1.6.7-2.5.4-.9-.4-1-1.2-1.1-2v-11.4c0-.2 0 .2.1-.8h3.8v-3h-4v-5h-3v5.4h-2.6c-.2 0-.5.2-.5.4-.1.7 0 1.2 0 2.2h3.2v12.799999999999999c0 1.6.4 3 1.8 3.8 1.5.9 4.4.7 5.7-.4.2-.1.3-.5.3-.6-.3-.6-.6-1.3-.9-2z"
                  ></path>
                </g>
              </svg>
            </div>

            <div className="col-md-3 col-sm-6 col-6">
              <svg
                className="sass"
                fill="#000000"
                viewBox="0 -4 32 32"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path d="m27.533 13.796c.039-.001.085-.002.132-.002.834 0 1.623.194 2.323.54l-.031-.014c.638.311 1.162.771 1.541 1.335l.009.014c.299.436.477.975.477 1.555 0 .042-.001.084-.003.125v-.006c-.031.579-.294 1.09-.698 1.448l-.002.002c-.221.217-.488.387-.785.495l-.015.005q-.25.05-.275-.075t.225-.275c.452-.274.779-.716.898-1.237l.003-.013c.003-.042.005-.091.005-.141 0-.311-.074-.605-.205-.865l.005.011c-.217-.453-.541-.825-.94-1.094l-.01-.006c-.597-.384-1.313-.636-2.083-.699l-.016-.001c-.262-.039-.564-.061-.872-.061-.801 0-1.566.151-2.27.426l.042-.015c.145.339.236.732.249 1.144v.005c-.016.845-.47 1.58-1.145 1.99l-.011.006c-.31.22-.664.413-1.041.563l-.035.012c-.229.112-.498.177-.782.177-.033 0-.065-.001-.097-.003h.005q-.949-.199-.45-1.65c.145-.421.348-.786.605-1.107l-.006.007c.329-.43.69-.807 1.089-1.141l.011-.009-.098-.146c-.183-.312-.351-.675-.486-1.054l-.014-.046q-.15-.5-.25-.949l-.05-.35-.5.949q-.65 1.2-1.25 2.099l-.15.25c.168.408.292.881.348 1.375l.002.025c.004.047.006.103.006.159 0 .758-.374 1.428-.948 1.837l-.007.005c-.274.169-.601.344-.94.5l-.06.025c-.353.153-.762.253-1.191.275h-.009c-.033.002-.072.004-.111.004-.25 0-.487-.057-.699-.158l.01.004c-.127-.109-.207-.269-.207-.448 0-.091.021-.178.058-.255l-.002.004c.4-.561.794-1.049 1.213-1.515l-.013.015 1.1-1.399-.199-.45c-.16-.294-.313-.641-.436-1.001l-.014-.048q-.15-.5-.25-.949l-.05-.35-.5 1.2q-.599 1.399-1.1 2.399-.747 1.5-1.25 2.3l-.1.15q-.599.949-1.15.949t-.747-.7c-.096-.344-.152-.739-.152-1.147 0-.036 0-.072.001-.108v.005l.1-.7v.05q-.4.949-.8 1.749c-.177.346-.359.641-.563.919l.013-.019c-.206.216-.496.35-.817.35-.003 0-.005 0-.008 0-.021.002-.045.002-.069.002-.253 0-.483-.096-.657-.253l.001.001c-.349-.358-.608-.805-.742-1.304l-.005-.021c-.164-.455-.258-.981-.258-1.529 0-.071.002-.141.005-.21v.01c.079-.796.238-1.525.471-2.22l-.021.071-1.799 1.05v.05c.261.542.414 1.178.414 1.85 0 .123-.005.245-.015.365l.001-.016c-.053 1.03-.382 1.973-.913 2.77l.013-.02c-.557.884-1.36 1.567-2.314 1.962l-.033.012c-.537.241-1.165.382-1.825.382-.418 0-.824-.056-1.208-.162l.032.007c-.318-.107-.578-.319-.743-.593l-.003-.006c-.233-.338-.38-.751-.403-1.196v-.006c-.011-.101-.017-.218-.017-.337 0-.513.117-.999.326-1.432l-.009.02c.574-.979 1.368-1.772 2.316-2.33l.03-.016c.671-.465 1.442-.916 2.247-1.309l.106-.047.25-.15q-.45-.35-1.65-1.2c-1.069-.716-1.998-1.439-2.874-2.221l.025.022c-.847-.729-1.464-1.703-1.741-2.812l-.008-.038c-.026-.154-.041-.331-.041-.511 0-.564.145-1.094.399-1.555l-.008.017c.56-1.204 1.336-2.219 2.288-3.035l.012-.01c1.03-.973 2.196-1.82 3.462-2.506l.087-.043c1.131-.653 2.452-1.26 3.829-1.747l.17-.052c1.279-.468 2.756-.742 4.296-.747h.002c.07-.002.153-.004.236-.004 1.241 0 2.415.287 3.459.798l-.046-.021c.9.41 1.574 1.182 1.844 2.126l.006.024c.083.322.13.692.13 1.073 0 .632-.131 1.234-.366 1.78l.011-.029c-.428 1.037-1.037 1.92-1.797 2.647l-.003.003c-.77.763-1.693 1.373-2.718 1.78l-.055.019c-1.074.461-2.321.751-3.63.799l-.019.001c-.192.022-.414.034-.639.034-.592 0-1.163-.085-1.703-.244l.043.011c-.483-.154-.9-.393-1.254-.703l.004.003c-.248-.202-.45-.451-.594-.734l-.006-.013q-.15-.4-.025-.475t.175-.025l.25.25c.279.259.612.463.98.593l.02.006c.506.176 1.09.278 1.697.278.195 0 .387-.01.576-.031l-.023.002c1.618-.191 3.077-.743 4.336-1.573l-.037.023c1.064-.633 1.925-1.503 2.531-2.54l.018-.034c.301-.442.481-.988.481-1.576 0-.361-.068-.707-.192-1.025l.007.019c-.374-.591-.979-1.007-1.685-1.122l-.014-.002c-.548-.135-1.178-.213-1.825-.213-.521 0-1.031.05-1.524.146l.05-.008c-1.687.304-3.195.825-4.586 1.541l.091-.043q-6.148 3.1-6.349 6.349v.049c0 .873.343 1.666.902 2.252l-.001-.001c.637.708 1.341 1.333 2.11 1.873l.039.026c.701.524 1.321 1.065 1.898 1.649l.001.002.1.1 3.2-1.749c.365-.528.804-.974 1.308-1.334l.016-.011c.4-.336.908-.555 1.465-.599l.009-.001c.02-.002.043-.002.067-.002.373 0 .693.225.831.547l.002.006c.105.235.166.51.166.799 0 .088-.006.175-.017.261l.001-.01-.097.493.15-.1c.104-.079.235-.126.377-.126.09 0 .175.019.252.053l-.004-.002c.192.05.331.222.331.426 0 .035-.004.069-.012.102l.001-.003-.15.55q-.45 1.799-.599 2.599c-.05.173-.078.372-.078.578 0 .043.001.085.004.127v-.006q.025.3.075.3t.199-.3l.15-.35q.05 0 0 .05l.55-1.15q1.95-4.298 2.099-4.8l.3-.949q.05-.1.4-.199c.237-.064.508-.101.788-.101.023 0 .046 0 .068.001h-.003q.7 0 .7.35l-.05.25c-.112.308-.223.693-.309 1.087l-.011.063c-.02.129-.032.277-.032.429 0 .202.02.399.059.59l-.003-.019.05.199c.102.417.257.783.46 1.117l-.01-.017q.599-.999 1.15-2.049c.29-.483.56-1.043.777-1.629l.023-.07c.075-.377.161-.695.266-1.005l-.016.056q.05-.15.427-.225c.238-.048.511-.075.79-.075h.036-.002q.7 0 .747.35l-.1.199c-.119.336-.223.74-.293 1.155l-.006.045c-.009.097-.015.209-.015.323 0 .239.024.473.069.699l-.004-.023v.199c.115.436.286.819.51 1.166l-.01-.016.15.35c.835-.41 1.817-.65 2.855-.65h.039-.002zm-21.439 7.253c.695-.718 1.124-1.698 1.124-2.778 0-.417-.064-.819-.182-1.197l.008.028-.8.5c-.816.465-1.522.984-2.161 1.574l.008-.007c-.485.446-.843 1.023-1.019 1.674l-.006.025q-.225.925.225 1.2c.183.084.398.133.623.133.246 0 .479-.058.684-.162l-.009.004c.594-.216 1.097-.559 1.497-.998l.003-.003zm6.697-4.604q.25-.65.55-1.55.4-1.2.275-1.399t-.475-.05c-.278.135-.511.32-.697.547l-.003.004c-.208.263-.406.557-.582.866l-.018.034c-.202.331-.373.712-.492 1.116l-.009.034c-.193.523-.305 1.128-.305 1.758 0 .085.002.169.006.253v-.012q.05.999.32 1.075t.625-.725c.229-.413.433-.893.585-1.396l.014-.054q.149-.354.204-.501zm5.546 2.65c.693-.311 1.181-.966 1.249-1.741l.001-.008v-.05l-.55.7-.999 1.1c-.015.012-.025.03-.025.05 0 .02.01.038.024.05q.048.049.3-.1zm4.299-.95c.756-.216 1.3-.901 1.3-1.712 0-.013 0-.026 0-.039v.002c-.01-.2-.046-.388-.105-.566l.004.015c-.389.346-.708.76-.939 1.227l-.011.023q-.451.899-.252 1.048z"></path>
                </g>
              </svg>
            </div>

            <div className="col-md-3 col-sm-6 col-6">
              <svg
                className="bootstrap"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 128 128"
              >
                <path d="M9.531 112.586h4.161c1.896 0 3.273.27 4.129.81.857.54 1.285 1.398 1.285 2.575 0 .799-.188 1.454-.563 1.966s-.874.82-1.496.924v.091c.848.189 1.459.543 1.834 1.061s.563 1.207.563 2.067c0 1.22-.44 2.171-1.322 2.854-.881.683-2.078 1.024-3.59 1.024h-5.001v-13.372zm2.835 5.296h1.646c.768 0 1.325-.119 1.669-.356.345-.238.517-.631.517-1.18 0-.512-.187-.879-.562-1.102s-.968-.334-1.779-.334h-1.491v2.972zm0 2.25v3.485h1.848c.78 0 1.356-.149 1.729-.448s.558-.756.558-1.372c0-1.109-.793-1.665-2.378-1.665h-1.757zM34.252 119.254c0 2.213-.549 3.915-1.646 5.104s-2.67 1.784-4.719 1.784-3.622-.595-4.719-1.784c-1.098-1.189-1.646-2.896-1.646-5.122s.55-3.925 1.651-5.099 2.678-1.761 4.733-1.761 3.626.592 4.715 1.774c1.087 1.183 1.631 2.885 1.631 5.104zm-9.758 0c0 1.494.283 2.619.851 3.375.567.756 1.414 1.134 2.542 1.134 2.262 0 3.393-1.503 3.393-4.509 0-3.012-1.125-4.518-3.375-4.518-1.128 0-1.979.379-2.552 1.139s-.859 1.885-.859 3.379zM49.161 119.254c0 2.213-.549 3.915-1.646 5.104s-2.67 1.784-4.719 1.784-3.622-.595-4.719-1.784c-1.098-1.189-1.646-2.896-1.646-5.122s.55-3.925 1.651-5.099 2.678-1.761 4.733-1.761 3.626.592 4.715 1.774c1.086 1.183 1.631 2.885 1.631 5.104zm-9.759 0c0 1.494.283 2.619.851 3.375.567.756 1.414 1.134 2.542 1.134 2.262 0 3.393-1.503 3.393-4.509 0-3.012-1.125-4.518-3.375-4.518-1.128 0-1.979.379-2.552 1.139s-.859 1.885-.859 3.379zM57.09 125.958h-2.835v-11.012h-3.631v-2.36h10.097v2.36h-3.631v11.012zM70.671 122.245c0 1.208-.434 2.159-1.303 2.854-.869.695-2.078 1.043-3.626 1.043-1.427 0-2.689-.269-3.786-.805v-2.634c.902.402 1.666.686 2.291.851s1.196.247 1.715.247c.622 0 1.099-.119 1.431-.356.333-.238.499-.591.499-1.061 0-.262-.073-.495-.219-.7-.146-.204-.361-.401-.645-.59s-.861-.491-1.733-.905c-.817-.384-1.43-.753-1.838-1.107-.409-.354-.735-.765-.979-1.234-.244-.47-.366-1.019-.366-1.646 0-1.183.401-2.113 1.203-2.79s1.91-1.015 3.325-1.015c.695 0 1.358.082 1.989.247.631.165 1.291.396 1.98.695l-.915 2.204c-.713-.292-1.303-.497-1.77-.613-.467-.116-.925-.174-1.376-.174-.537 0-.948.125-1.235.375-.287.25-.43.576-.43.979 0 .25.058.468.174.654.116.186.3.366.553.54.253.174.852.486 1.797.938 1.25.598 2.107 1.197 2.57 1.797s.694 1.334.694 2.206zM78.254 125.958h-2.835v-11.012h-3.631v-2.36h10.097v2.36h-3.631v11.012zM86.778 120.827v5.131h-2.835v-13.372h3.896c1.817 0 3.161.331 4.033.992.872.662 1.308 1.667 1.308 3.014 0 .787-.216 1.486-.649 2.099s-1.046 1.093-1.838 1.44c2.012 3.006 3.323 4.948 3.933 5.826h-3.146l-3.192-5.131h-1.51zm0-2.305h.915c.896 0 1.558-.149 1.985-.448s.64-.769.64-1.409c0-.634-.218-1.085-.654-1.354-.436-.268-1.111-.402-2.026-.402h-.86v3.613zM104.494 125.958l-.97-3.183h-4.875l-.97 3.183h-3.055l4.719-13.426h3.466l4.738 13.426h-3.053zm-1.647-5.561c-.896-2.884-1.401-4.515-1.514-4.893-.113-.378-.193-.677-.242-.896-.201.78-.777 2.71-1.729 5.789h3.485zM118.469 116.757c0 1.439-.45 2.54-1.349 3.301-.899.763-2.178 1.144-3.837 1.144h-1.216v4.756h-2.835v-13.372h4.271c1.622 0 2.855.349 3.7 1.047.844.699 1.266 1.74 1.266 3.124zm-6.402 2.122h.933c.872 0 1.524-.172 1.957-.517.433-.345.649-.846.649-1.504 0-.665-.182-1.156-.544-1.473-.363-.317-.932-.476-1.706-.476h-1.29v3.97zM73.951 56.759c-1.983-.653-4.838-.759-8.565-.759h-13.386v20h14.424c2.502 0 4.259-.249 5.271-.437 1.783-.318 3.274-.93 4.472-1.676 1.198-.744 2.183-1.869 2.955-3.293.771-1.424 1.158-3.087 1.158-4.951 0-2.184-.559-3.98-1.677-5.59-1.117-1.611-2.668-2.642-4.652-3.294zM71.895 48.147c1.97-.586 3.455-1.646 4.452-3.003.999-1.357 1.498-3.103 1.498-5.154 0-1.943-.466-3.675-1.398-5.154-.932-1.478-2.263-2.481-3.992-3.027-1.732-.544-4.7-.809-8.906-.809h-11.549v18h12.507c3.435 0 5.897-.399 7.388-.853zM117 16.126c0-7.802-6.325-14.126-14.127-14.126h-77.746c-7.802 0-14.127 6.324-14.127 14.126v77.748c0 7.802 6.325 14.126 14.127 14.126h77.746c7.802 0 14.127-6.324 14.127-14.126v-77.748zm-30.43 57.144c-1.157 2.356-2.589 4.173-4.292 5.451-1.704 1.277-3.841 2.446-6.41 3.098-2.569.653-5.717 1.181-9.444 1.181h-22.424v-59h22.065c4.473 0 8.059.62 10.761 1.804 2.703 1.185 4.818 3.021 6.351 5.483 1.53 2.463 2.296 5.046 2.296 7.735 0 2.502-.68 4.861-2.036 7.071-1.358 2.21-3.408 3.995-6.15 5.352 3.54 1.038 6.263 2.811 8.166 5.313 1.903 2.503 2.855 5.458 2.855 8.866-.001 2.742-.579 5.291-1.738 7.646z"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>

      <br />

      <div className="container-sm project">
        <h3 className="heading">Projects</h3>
        <ul className="flex-display">{project_items}</ul>
      </div>

      <br />

      <div className="container-xl about">
        <div className="container-sm">
          <div className="row">
            <div className="col-md-5 description">
              <h3>About Me</h3>
              <p>
                I am passionate about building software solutions and exploring
                emerging technologies. I'm also a big fan of fitness 🏋️‍♂️.
              </p>

              <div>
                <u style={{ fontSize: "20px" }}>Education:</u> <br />
                Bachelor of Computing, majoring in computer science (usyd){" "}
                <br />
                Master of IT (usyd) <br />
              </div>

              <br />
            </div>

            <div className="col-md-4 form ">
              {/* <div className="photo mx-auto"></div> */}
              <h3>Hey!</h3>
              <form>
                <label htmlFor="name">Name:</label> <br />
                <input type="text" id="name" name="name" required />
                <br />
                <label htmlFor="email">Email:</label>
                <br />
                <input type="email" id="email" name="email" required />
                <br />
                <label htmlFor="message">Message:</label>
                <br />
                <textarea id="message" name="message" required></textarea>{" "}
                <br />
                <button type="submit">Send</button>
              </form>
              <br />
            </div>

            <div className="col-md-3 social">
              <h3>Social</h3>
              <ul>
                <li>
                  <a
                    href="https://github.com/JIAHONG-PENG"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <svg
                      className="main-about__social-icon-svg"
                      viewBox="0 0 1024 1024"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        className="main-about__social-icon"
                        d="M512 0C229.25 0 0 229.25 0 512c0 226.25 146.688 418.125 350.156 485.812 25.594 4.688 34.938-11.125 34.938-24.625 0-12.188-0.469-52.562-0.719-95.312C242 908.812 211.906 817.5 211.906 817.5c-23.312-59.125-56.844-74.875-56.844-74.875-46.531-31.75 3.53-31.125 3.53-31.125 51.406 3.562 78.47 52.75 78.47 52.75 45.688 78.25 119.875 55.625 149 42.5 4.654-33 17.904-55.625 32.5-68.375C304.906 725.438 185.344 681.5 185.344 485.312c0-55.938 19.969-101.562 52.656-137.406-5.219-13-22.844-65.094 5.062-135.562 0 0 42.938-13.75 140.812 52.5 40.812-11.406 84.594-17.031 128.125-17.219 43.5 0.188 87.312 5.875 128.188 17.281 97.688-66.312 140.688-52.5 140.688-52.5 28 70.531 10.375 122.562 5.125 135.5 32.812 35.844 52.625 81.469 52.625 137.406 0 196.688-119.75 240-233.812 252.688 18.438 15.875 34.75 47 34.75 94.75 0 68.438-0.688 123.625-0.688 140.5 0 13.625 9.312 29.562 35.25 24.562C877.438 930 1024 738.125 1024 512 1024 229.25 794.75 0 512 0z"
                      ></path>
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/chris-peng-88b76a214"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <svg
                      version="1.1"
                      viewBox="0 0 512 512"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g>
                        <rect
                          height="512"
                          rx="64"
                          ry="64"
                          fill="#151515"
                          width="512"
                          x="0"
                          y="5.6843419e-014"
                        ></rect>
                        <g transform="matrix(1.5537946,0,0,1.5537946,-140.87332,-132.64552)">
                          <rect
                            height="166.021"
                            style={{ fill: "#151515" }}
                            width="55.194"
                            x="129.957"
                            y="200.35699"
                          ></rect>
                          <path
                            d="m 157.927,120.303 c -18.884,0 -31.222,12.415 -31.222,28.687 0,15.93 11.963,28.687 30.491,28.687 h 0.357 c 19.245,0 31.224,-12.757 31.224,-28.687 -0.357,-16.272 -11.978,-28.687 -30.85,-28.687 z"
                            id="path13-0"
                            style={{ fill: "#151515" }}
                          ></path>
                          <path
                            d="m 320.604,196.453 c -29.277,0 -42.391,16.101 -49.734,27.41 v -23.506 h -55.18 c 0.732,15.573 0,166.021 0,166.021 h 55.179 V 273.66 c 0,-4.963 0.357,-9.924 1.82,-13.471 3.982,-9.911 13.068,-20.178 28.313,-20.178 19.959,0 27.955,15.23 27.955,37.539 v 88.828 h 55.182 v -95.206 c 0,-50.996 -27.227,-74.719 -63.535,-74.719 z"
                            id="path15"
                            style={{ fill: "#151515" }}
                          ></path>
                        </g>
                      </g>
                    </svg>
                  </a>
                </li>
                <li>
                  pjh646634309@gmail.com <br /> 424 986 648
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* <img className="footer-img" src="/footer_pic.png"></img> */}
        {/* <div className="footer-img"></div> */}
      </div>
    </div>
  );
}

export default App;
