import React from "react";
import { Carousel } from "react-bootstrap";
import nisha1 from "./Nisha 1.webp";
import nisha2 from "./Nisha 2.webp";
import t1 from "./t1.jpeg";
import t2 from "./t2.webp";
import t3 from "./t3.jpeg";
import t4 from "./t4.webp";
import { SRLWrapper } from "simple-react-lightbox";
import SimpleReactLightbox from "simple-react-lightbox";
const Theatre = () => {
  return (
    <div id="theatre">
      <div style={{ backgroundColor: "#116466" }}>
        <div className="community-heading">
          <span
            className="community-heading__line"
            style={{ backgroundColor: "#fff" }}
          ></span>
          <h1 className="community-heading__text" style={{ color: "#fff" }}>
            Theatre and Debate{" "}
          </h1>
        </div>
        <div className="community-first">
          <div className="community-first__content" style={{ color: "#fff" }}>
            I have won Trinity Debating communication Level 6, Drama Level 4
            awards. Right from my 4th grade I have associated myself with school
            plays. Shaped through workshops of Indian Debating Society,
            CreaShakti, Theater Nisha and World Story Telling institute. I have
            been an active member of Theatre Nisha Drama troupe involved in
            photographing and documenting the rehearsal process, participating
            in script reading and analysis, suggestions and assistance in music
            composition, and aiding with set and stage design.
          </div>

          <div className="community-first__carousel box-shadow">
            <SimpleReactLightbox>
              <SRLWrapper>
            <Carousel variant="dark">
              <Carousel.Item>
                <img
                  className="d-block w-100 slider"
                  src={nisha1}
                  alt="Second slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100 slider"
                  src={nisha2}
                  alt="Third slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100 slider"
                  src={t1}
                  alt="Third slide"
                />
              </Carousel.Item>{" "}
              <Carousel.Item>
                <img
                  className="d-block w-100 slider"
                  src={t2}
                  alt="Third slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100 slider"
                  src={t3}
                  alt="Third slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100 slider"
                  src={t4}
                  alt="Third slide"
                />
              </Carousel.Item>
            </Carousel>
            </SRLWrapper>
            </SimpleReactLightbox>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Theatre;
