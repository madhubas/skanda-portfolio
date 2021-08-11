import React from "react";
import "./Community.scss";
import { Carousel } from "react-bootstrap";
import a1 from "../Gallery/images/a1.webp";
import a2 from "../Gallery/images/a2.webp";
import a3 from "../Gallery/images/a3.png";
import a4 from "../Gallery/images/a4.png";

import b1 from "./0001.jpg";
import b2 from "./0002.jpg";

const Community = () => {
  return (
    <div className="community" id="communityservice">
      <div className="community-heading">
        <span className="community-heading__line"></span>
        <h1 className="community-heading__text">Community Service</h1>
      </div>
      <div className="community-subheading">
        <h1 className="community-subheading__text">
          1. Health - Fund raising to the tune of 53,000 dollars between April
          2021 to May 2021
        </h1>
        <span className="community-subheading__line"></span>
      </div>
      <div className="community-first">
        <div className="community-first__content">
          With the help of the Rotary group, I raised funds of a little over
          $53,000 as donations for helping Chennai Hospitals with Medical
          Equipments and Supplies for Covid-19. I have visited hospitals ,
          collected requirements, built campaigns and worked with donors,
          corporates and vendors to deliver Critical ICU ventilators, Oxy
          Meters, and ICU monitors for managing the critical care during
          Covid-19 Pandemic.
          <br />
          <br />
          <a
            href="https://www.thehindu.com/news/cities/chennai/chennai-youth-raises-funds-helps-two-hospitals-with-covid-19-relief/article34809804.ece"
            target="_blank"
            className="community-anchor"
          >
            Read More{" "}
          </a>{" "}
          <br />
          <br />
          <b> Total Number of hours : More than 150 hours</b>
        </div>
        <div className="community-first__carousel">
          <Carousel variant="dark">
            <Carousel.Item>
              <img
                className="d-block w-100 slider"
                src={a1}
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 slider"
                src={a2}
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 slider"
                src={a3}
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 slider"
                src={a4}
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
      {/* second division */}
      <div className="community-subheading">
        <h1 className="community-subheading__text">
          2. Community Service - Education - Time From 2017-2018 onwards
        </h1>
        <span className="community-subheading__line"></span>
      </div>

      <div className="community-second">
        <div className="community-second__carousel">
          <Carousel variant="dark">
            <Carousel.Item>
              <img
                className="d-block w-100 slider"
                src={b1}
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 slider"
                src={b2}
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
        </div>
        <div className="community-second__content">
          {/* <h3>a. Two community Schools</h3> */}I crave acquiring knowledge
          in math and science, and have an insatiable desire to share my
          learnings with my peers. Right from my
          <b> 8th grade</b> I dedicated myself with research work to dig deeper
          to find creative ways to engage/present complex concepts in a simpler
          way to students.<br></br> With my hand-writing challenges in my
          earlier days, I find fascination in developing models to present
          experiments to explain the key concepts in a simpler way to children.
          Models prepared includes flashcards, color charts, pictures, with
          household items etc to showcase concepts in simple experiments <br />
          From 2017-2018 , I volunteered to help school children of
          <b>
            {" "}
            “Little flower Matriculation and Domestic workers association” with
            Math and Science labs.(More than 250 hours)
          </b>
          <br />
          <br />
        </div>
      </div>
    </div>
  );
};

export default Community;
