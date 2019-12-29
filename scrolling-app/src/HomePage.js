import React, { useState, useEffect, Fragment } from "react";
import { Parallax, Background } from "react-parallax";
// import "./HomePage.css";
import { getPhotos } from "./requests";

const insideStyles = {
  background: "transparent",
  padding: 20,
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)",
};

function HomePage() {
  const [initialized, setInitialized] = useState(false);
  const [images, setImages] = useState([]);
  const [layers, setLayers] = useState([]);

  const loadImages = async () => {
    const response = await getPhotos();
    console.log(response)
    setImages(response.data.hits);
  };

  useEffect(() => {
    if (!initialized) {
      loadImages();
      setInitialized(true);
    }
  });
  return (
    <div className="home-page">
      {images.map((img, i) => {
        return (
          <Fragment key={i}>
            <Parallax

              blur={5}
              bgImage={img.userImageURL}
              bgImageAlt={img.tags}
              strength={600}
              renderLayer={percentage => (
                <div>
                  <div
                    style={{
                      position: "absolute",
                      left: "50%",
                      top: "10%",
                      transform: "translate(-50%,-50%)",
                      width: percentage * 500,
                      height: percentage * 500,
                    }}
                  />
                </div>
              )}
            >
              <div style={{ height: 500 }}>
                <div style={insideStyles}>{img.tags}</div>
              </div>
            </Parallax>
          </Fragment>
        );
      })}
    </div>
  );
}
export default HomePage;
