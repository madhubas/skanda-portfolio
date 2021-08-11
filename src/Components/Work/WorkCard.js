import React from "react";
import "./WorkCard.css";

const WorkCard = ({ date, heading, content, readmore }) => {
  return (
    <div className="WorkCard">
      <h5 className="work-date">{date}</h5>
      <h3 className="work-heading">{heading}</h3>
      <p className="work-content">{content}</p>
      {readmore && (
        <a href={readmore} className="read-more">
          Read More
        </a>
      )}
    </div>
  );
};

export default WorkCard;
