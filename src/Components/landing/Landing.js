import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import "./Landing.scss";
const Landing = () => {
  return (
    <div className="landing">
      <div className="landing-content">
        <h3 className="landing-content_1">Hi I'm</h3>
        <h3 className="landing-content_2">Skanda Vyas Srinivasan</h3>
      </div>
      <div className="landing-social">
        <a className="landing-social_icon">
          <FaFacebookF style={{ width: "30px", height: "30px" }} />
        </a>
        <a className="landing-social_icon">
          <FaLinkedinIn style={{ width: "30px", height: "30px" }} />
        </a>
        <a className="landing-social_icon">
          <FaInstagram style={{ width: "30px", height: "30px" }} />
        </a>
      </div>
    </div>
  );
};

export default Landing;
