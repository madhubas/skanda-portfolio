import React from "react";
import "./Work.css";
import WorkCard from "./WorkCard";
import { Row, Col } from "react-bootstrap";
import Learning from "./Learning";
const Work = () => {
  return (
    <div className="work">
      <div className="learning-container">
        <h1 className="work_title">
          Skanda Experiential Learning - Math, Physics, Robotics , Drama and
          Debates
        </h1>
        <p className="work-subtitle">Learning through Experiences</p>
        <Row>
          <Col md={6}>
            <Learning
              date="2020"
              heading="Trignometry Clarifying Session"
              content="Clarifying Session on Math"
              video="https://www.youtube.com/embed/oMD09B1rgeA"
            />{" "}
          </Col>
          <Col md={6}>
            <Learning
              date="Jan 2020"
              heading="Trignometry Lesson"
              content="Teaching by Skanda on Trignometry End to End Concepts"
              video="https://www.youtube.com/embed/_U9NHfBlUpc"
            />
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <Learning
              date="Jan 2019"
              heading="Skanda on Debating (Trinity Grade 6)"
              content="Skanda Preparing For Trinity Grade6 Communication Skills"
              video="https://www.youtube.com/embed/ftb0oAHSWBQ"
            />{" "}
          </Col>
          <Col md={6}>
            <Learning
              date="Jan 2018"
              heading="Skanda Explaining his Temperature control project"
              content="Automation"
              video="https://www.youtube.com/embed/_U9NHfBlUpc"
            />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Work;
