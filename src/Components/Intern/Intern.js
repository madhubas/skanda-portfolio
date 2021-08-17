import React from "react";
import "./intern.scss";
import tye from "./tieentre.webp";
const Intern = () => {
  return (
    <div className="intern" id="internship">
      <div className="about-heading">
        <div
          className="about-heading__text head-intern"
          style={{ color: "#000" }}
        >
          Internship
        </div>
        <span
          className="about-heading__line"
          style={{ backgroundColor: "#000" }}
        ></span>
      </div>
      <div className="intern-content">
        <div className="intern-content-left">
          <span className="text-bold">Inspace Technologies</span>: My effort
          involved in working with the technical team to write parts of code to
          automate a student information system, a partner with Chalo Schools
          Automated.
          <br />
          <br />
          May 2020 - June 2020(10hrs per week)
        </div>
        <div className="intern-content-right">
          <span className="text-bold"> Goglint.co.in</span>: I am helping
          goglint.co.in an aggregator for Car wash services: My role involved in
          analyzing the new feature where customers can come and schedule
          appointment a for car wash based on time, day and capacity
          availability, and capturing the report metrics of predictability in
          demand and smoothening of the demand.
          <br />
          <br />
          March 2021 - on going(3hrs per week)
        </div>
      </div>
      <div className="certificate">
        <p className="tye-content">
          <span className="text-bold">Young Entrepreneur Course:</span> TIE
          india Attended 4 week sessions on Entrepreneurship and Leadership.
          Brainstormed ideas with the team to develop a business plan . Competed
          at regional level competition to present our business plan.
          <br />
          <br />
          Total Number of hours: 45+
          <br />
          <br /> Dec 2020 to Jan 2021
        </p>
        <img src={tye} alt="" className="tye-certificate box-shadow" />
      </div>
    </div>
  );
};

export default Intern;
