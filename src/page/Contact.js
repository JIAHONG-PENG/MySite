import React from "react";
import ReactDOM from "react-dom/client";
import bootstrap from "bootstrap";
import Menu from "../component/Menu.js/Menu";

function Contact({ appRef, hidden, setCurrent, current }) {
  return (
    <div className={`Contact ${hidden === true ? "notDisplay" : ""}`}>
      <Menu appRef={appRef} current={current} setCurrent={setCurrent} />
      <div className="main-content">
        <div className="contact-email">Email: 646634309@qq.com</div>
        <div className="contact-phone">Phone: 0424986648</div>
      </div>
    </div>
  );
}

export default Contact;
