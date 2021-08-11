import React from "react";
import { Row, Col } from "react-bootstrap";
import "./Learning.css";

const Learning = ({ date, heading, content, video }) => {
  return (
    <div className="learning-card">
      <h5 className="work-date">{date}</h5>
      <h3 className="work-heading">{heading}</h3>
      <Row>
        <Col md={4} className="yt-content">
          <p className="work-content">{content}</p>
        </Col>
        <Col md={8}>
          {video && (
            <iframe
              width="90%"
              height="170"
              src={video}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          )}
        </Col>
      </Row>
    </div>
  );
};

export default Learning;
