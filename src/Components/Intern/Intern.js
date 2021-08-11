import React from "react";
import "./intern.scss";
const Intern = () => {
  return (
    <div className="intern" id="internship">
      <div className="intern-heading">
        <span className="intern-heading__line"></span>
        <div className="intern-heading__text">
          <p>INTERNSHIP</p>
          <p>(FROM 2019 - PRESENT)</p>
        </div>
      </div>
      <div className="intern-content">
        <div className="intern-content-left">
          <span className="text-bold">Inspace Technologies</span> : My effort
          involved in working with the technical team to write parts of code to
          automate a student information system, a partner with Chalo Schools
          Automated.
          <br />
          <br />
          Total Number of Hours: 25
          <br />
          <br />
          March 2020 - on going
        </div>
        <div className="intern-content-right">
          <span className="text-bold"> Goglint.co.in </span>: I am helping
          goglint.co.in an aggregator for Car wash services: My role involved in
          analyzing the new feature where customers can come and schedule
          appointment a for car wash based on time, day and capacity
          availability, and capturing the report metrics of predictability in
          demand and smoothening of the demand.
          <br />
          <br />
          Total Number of hours: 40+
          <br />
          <br />
          March 2021 - on going
        </div>
      </div>
      <div className="certificate">
        <p>
          Young Entrepreneur Course - TIE india Attended 4 week sessions on
          Entrepreneurship and Leadership. Brainstormed ideas with the team to
          develop a business plan . Competed at Regional Level competition to
          present our business plan. Total Number of hours: 120+ Dec 2020 to Jan
          2021
        </p>
      </div>
    </div>
  );
};

export default Intern;
