// Made by wirestorm - https://wirestorm.software
import React from "react";

export const Image = ({ title, beforeImage, afterImage, description }) => {
  return (
    <div className="portfolio-item">
      <div className="before-after-container">
        <div className="before-section">
          <h4>Before</h4>
          <div className="hover-bg">
            <a href={beforeImage} title={`${title} - Before`} data-lightbox-gallery="gallery1">
              <div className="hover-text">
                <h4>{title}</h4>
                <p>Before</p>
              </div>
              <img src={beforeImage} className="img-responsive gallery-img" alt={`${title} - Before`} />
            </a>
          </div>
        </div>
        <div className="after-section">
          <h4>After</h4>
          <div className="hover-bg">
            <a href={afterImage} title={`${title} - After`} data-lightbox-gallery="gallery1">
              <div className="hover-text">
                <h4>{title}</h4>
                <p>After</p>
              </div>
              <img src={afterImage} className="img-responsive gallery-img" alt={`${title} - After`} />
            </a>
          </div>
        </div>
      </div>
      <div className="project-description">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};
// Made by wirestorm - https://wirestorm.software
