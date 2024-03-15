import React from "react";

function ExperienceElement({ time, title, text, location, expRef }) {
  return (
    <div className="exp" ref={expRef}>
      <div className="time">
        {time}
        <div className="bag">
          <div></div>
        </div>
      </div>
      <div className="description">
        <div className="title">{title}</div>
        <div className="location">{location}</div>
        <div className="text">{text}</div>
      </div>
    </div>
  );
}

export default ExperienceElement;
