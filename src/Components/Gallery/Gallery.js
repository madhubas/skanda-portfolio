import React, { useEffect, useState } from "react";
import "./Gallery.css";
import { SRLWrapper } from "simple-react-lightbox";
import SimpleReactLightbox from "simple-react-lightbox";
import { LazyLoadImage } from "react-lazy-load-image-component";
import g1 from "./machinelearning-Skanda Vyas Srinivasan.webp";
import g2 from "./SPMASTER-page-001.webp";
import g3 from "./spcertificatefoundation-page-001.webp";
import g4 from "./SPCERTIFICATEBEGINNER-page-001.webp";
import g5 from "./munparticipation.webp";

const images = [
  {
    id: "1",
    imageName: g1,
    tag: "Certificate",
  },

  {
    id: "2",
    imageName: g2,
    tag: "Certificate",
  },

  {
    id: "3",
    imageName: g3,
    tag: "Certificate",
  },

  {
    id: "4",
    imageName: g4,
    tag: "Certificate",
  },

  {
    id: "6",
    imageName: "https://www.youtube.com/embed/KZbZ_Er95E4",
    tag: "Videos",
  },
  {
    id: "7",
    imageName: "https://www.youtube.com/embed/oMD09B1rgeA",
    tag: "Videos",
  },
  {
    id: "8",
    imageName: "https://www.youtube.com/embed/_U9NHfBlUpc",
    tag: "Videos",
  },
  {
    id: "9",
    imageName: "https://www.youtube.com/embed/ftb0oAHSWBQ",
    tag: "Videos",
  },
];

function Gallery() {
  const [tag, setTag] = useState("Certificate");
  const [filteredImages, setFilteredImages] = useState([]);

  useEffect(() => {
    tag === "all"
      ? setFilteredImages(images.filter((image) => image.tag !== "Videos"))
      : setFilteredImages(images.filter((image) => image.tag === tag));
  }, [tag]);

  return (
    <div id="gallery">
      <div className="community-heading">
        <span className="community-heading__line"></span>
        <h1 className="community-heading__text">Training And Certifications</h1>
      </div>
      <SimpleReactLightbox>
        <div className="gallery">
          <div className="tags">
            <TagButton
              name="Certificate"
              tagActive={tag === "Certificate" ? true : false}
              handleSetTag={setTag}
            />{" "}
            <TagButton
              name="Videos"
              tagActive={tag === "Videos" ? true : false}
              handleSetTag={setTag}
            />
          </div>
          <SRLWrapper>
            <div className="container-2">
              {filteredImages.map((image) => {
                return (
                  <div key={image.id} className="image-card">
                    {image.tag === "Videos" ? (
                      <iframe
                        width="100%"
                        height="100%"
                        src={image.imageName}
                        title="Youtube video player"
                      />
                    ) : (
                      <a href={image.imageName}>
                        <LazyLoadImage
                          effect="blur"
                          className="image"
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
      </SimpleReactLightbox>
    </div>
  );
}

const TagButton = ({ name, handleSetTag, tagActive }) => {
  return (
    <button
      className={`tag ${tagActive ? "active1" : null}`}
      onClick={() => handleSetTag(name)}
    >
      {name.toUpperCase()}
    </button>
  );
};
export default Gallery;
