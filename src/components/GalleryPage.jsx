// Made by wirestorm - https://wirestorm.software
import React, { useState, useEffect } from "react";
import { Image } from "./image";
import { Navigation } from "./navigation";
import { Link } from "react-router-dom";

export const GalleryPage = (props) => {
  const [fullscreenImage, setFullscreenImage] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const openFullscreen = (imageUrl) => {
    setFullscreenImage(imageUrl);
  };

  const closeFullscreen = () => {
    setFullscreenImage(null);
  };

  return (
    <div>
      <Navigation />
      <div id="gallery-page" className="text-center">
        <div className="container">
          <div className="section-title">
            <h2>Our Gallery</h2>
            <p>Take a look at our previous work!</p>
            <Link to="/" className="btn btn-custom btn-lg">
              Back to Home
            </Link>
          </div>
          <div className="row">
            <div className="portfolio-items">
              {props.data
                ? props.data.map((d, i) => (
                    <div
                      key={`${d.title}-${i}`}
                      className="col-12"
                    >
                      <div className="project-card">
                        <div className="project-description">
                          <h3>{d.title}</h3>
                          <p>{d.description}</p>
                        </div>
                        <div className="before-after-pair">
                          <div className="before-section">
                            <h3>Before</h3>
                            <div className="hover-bg">
                              <div onClick={() => openFullscreen(d.beforeImage)}>
                                <div className="hover-text">
                                  <h4>{d.title}</h4>
                                  <p>Before</p>
                                </div>
                                <img src={d.beforeImage} className="img-responsive gallery-img" alt={`${d.title} - Before`} />
                              </div>
                            </div>
                          </div>
                          <div className="after-section">
                            <h3>After</h3>
                            <div className="hover-bg">
                              <div onClick={() => openFullscreen(d.afterImage)}>
                                <div className="hover-text">
                                  <h4>{d.title}</h4>
                                  <p>After</p>
                                </div>
                                <img src={d.afterImage} className="img-responsive gallery-img" alt={`${d.title} - After`} />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                : "Loading..."}
            </div>
          </div>
        </div>
      </div>

      {fullscreenImage && (
        <div className="fullscreen-overlay" onClick={closeFullscreen}>
          <button className="exit-fullscreen" onClick={(e) => {
            e.stopPropagation();
            closeFullscreen();
          }}>
            ×
          </button>
          <img 
            src={fullscreenImage} 
            className="fullscreen-image" 
            alt="Fullscreen view"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
};
// Made by wirestorm - https://wirestorm.software 