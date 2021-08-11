import React, { useEffect, useState } from "react";
import "./Gallery.css";
import { SRLWrapper } from "simple-react-lightbox";
import SimpleReactLightbox from "simple-react-lightbox";
import { LazyLoadImage } from "react-lazy-load-image-component";
import a1 from "./images/a1.webp";
import a2 from "./images/a2.webp";
import a3 from "./images/a3.png";
import a4 from "./images/a4.png";
import c1 from "./images/c1.webp";
import c2 from "./images/c2.webp";
import c3 from "./images/c3.webp";
import c4 from "./images/c4.webp";
import c5 from "./images/c5.webp";
import c6 from "./images/c6.webp";
import c7 from "./images/c7.webp";
import c8 from "./images/c8.webp";
import c9 from "./images/c9.webp";
import c10 from "./images/c10.webp";
import c11 from "./images/c11.webp";
import c12 from "./images/c12.webp";

const images = [
  {
    id: "5",
    imageName: c1,
    tag: "Certificates",
  },
  {
    id: "6",
    imageName: c2,
    tag: "Certificates",
  },
  {
    id: "7",
    imageName: c3,
    tag: "Certificates",
  },
  {
    id: "8",
    imageName: c4,
    tag: "Certificates",
  },
  {
    id: "9",
    imageName: c5,
    tag: "Certificates",
  },
  {
    id: "10",
    imageName: c6,
    tag: "Certificates",
  },
  {
    id: "11",
    imageName: c7,
    tag: "Certificates",
  },
  {
    id: "12",
    imageName: c8,
    tag: "Certificates",
  },
  {
    id: "13",
    imageName: c9,
    tag: "Certificates",
  },
  {
    id: "14",
    imageName: c10,
    tag: "Certificates",
  },
  {
    id: "15",
    imageName: c11,
    tag: "Certificates",
  },
  {
    id: "16",
    imageName: c12,
    tag: "Certificates",
  },
  {
    id: "1",
    imageName: a1,
    tag: "Achievements",
  },
  {
    id: "2",
    imageName: a2,
    tag: "Achievements",
  },
  {
    id: "3",
    imageName: a3,
    tag: "Achievements",
  },
  {
    id: "4",
    imageName: a4,
    tag: "Achievements",
  },
];

function Gallery() {
  const [tag, setTag] = useState("all");
  const [filteredImages, setFilteredImages] = useState([]);

  useEffect(() => {
    tag === "all"
      ? setFilteredImages(images.filter((image) => image.tag !== "Videos"))
      : setFilteredImages(images.filter((image) => image.tag === tag));
  }, [tag]);

  return (
    <SimpleReactLightbox>
      <div className="gallery-section">
        <div>
          <h1 className="gallery-heading">Theatre and Art</h1>
          <div className="gallery-content">
            I have won Trinity Debating communication Level 6, Drama Level 4
            awards. Right from my 4th grade I have associated myself with school
            plays. Shaped through workshops of Indian Debating Society,
            CreaShakti, Theater Nisha and World Story Telling institute. I have
            been an active member of Theatre Nisha Drama troupe including
            photographing and documenting the rehearsal process, participating
            in script reading and analysis, suggestions and assistance in music
            composition, and aiding with set and stage design.
          </div>
        </div>
        <div className="gallery" id="certificate">
          <div className="tags">
            <TagButton
              name="all"
              tagActive={tag === "all" ? true : false}
              handleSetTag={setTag}
            />{" "}
            <TagButton
              name="Achievements"
              tagActive={tag === "Achievements" ? true : false}
              handleSetTag={setTag}
            />{" "}
            <TagButton
              name="Certificates"
              tagActive={tag === "Certificates" ? true : false}
              handleSetTag={setTag}
            />{" "}
            <TagButton
              name="Photos"
              tagActive={tag === "Photos" ? true : false}
              handleSetTag={setTag}
            />
          </div>
          <SRLWrapper>
            <div className="container-2">
              {filteredImages.map((image) => {
                return (
                  <div key={image.id} className="image-card1">
                    {image.tag === "Photos" ? (
                      <iframe
                        width="420"
                        height="250"
                        src={image.imageName}
                        title="Youtube video player"
                      />
                    ) : (
                      <a href={image.imageName}>
                        <LazyLoadImage
                          effect="blur"
                          className="image1"
                          src={`${image.imageName}`}
                          alt=""
                        />
                      </a>
                    )}
                  </div>
                );
              })}
            </div>
          </SRLWrapper>
        </div>
      </div>
    </SimpleReactLightbox>
  );
}

const TagButton = ({ name, handleSetTag, tagActive }) => {
  return (
    <button
      className={`tag ${tagActive ? "active" : null}`}
      onClick={() => handleSetTag(name)}
    >
      {name.toUpperCase()}
    </button>
  );
};
export default Gallery;
