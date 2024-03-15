import React from "react";
import Menu from "../component/Menu.js/Menu";

function Contact({ appRef, hidden, setCurrent, current }) {
  return (
    <div className={`Contact ${hidden === true ? "notDisplay" : ""}`}>
      <Menu appRef={appRef} current={current} setCurrent={setCurrent} />
      <div className="main-content">
        <div className="contact-email">
          <b>Email: </b>646634309@qq.com
        </div>
        <div className="contact-phone">
          <b>Phone: </b>0424986648
        </div>
      </div>
    </div>
  );
}

export default Contact;
