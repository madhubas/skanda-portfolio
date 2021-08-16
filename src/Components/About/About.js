import React from "react";
import "./About.scss";
import skanda from "./about.webp";
const About = () => {
  return (
    <div className="about" id="about">
      <div className="about-heading">
        <div className="about-heading__text">About Me</div>
        <span className="about-heading__line"></span>
      </div>
      <div className="about-quotes">
        <div>“If I waited for perfection, I would never write a word.”</div>
        <div>-Margaret Atwood</div>
      </div>
      <div className="about-content">
        <div className="about-content__text">
          <b>
            Life wants us to touch, taste and see the grandeur of the world’s
            unfathomable variety.
          </b>
          <br />
          <br />I am an aspiring STEM major, who pauses and observes the
          mechanics of things around me. I contribute in my own way to my
          friends and communities, always curious and try at a variety of
          activities with success, shortcomings and challenges. I am excited
          about math and science by forcing me to challenge myself, and share
          ideas with friends and teachers. I become peaceful when i am involved
          in one of these - math, soccer, punch boxing, teaching, theater ,
          robotics and designing games.
        </div>
        <div className="about-content__image">
          <img
            className="about-content__image box-shadow"
            src={skanda}
            alt="skanda"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
