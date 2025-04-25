// Made by wirestorm - https://wirestorm.software
import { Image } from "./image";
import React from "react";

export const Gallery = (props) => {
  const contactData = props.contactData || {};
  return (
    <div id="portfolio" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Gallery</h2>
          <p>
            This is our previous work !
          </p>
        </div>
        <div className="row">
          <div className="portfolio-items">
            {props.data
              ? props.data.map((d, i) => (
                  <div
                    key={`${d.title}-${i}`}
                    className="col-sm-6 col-md-4 col-lg-4"
                  >
                    <Image
                      title={d.title}
                      largeImage={d.largeImage}
                      smallImage={d.smallImage}
                    />
                  </div>
                ))
              : "Loading..."}
          </div>
        </div>
      </div>
      <div id="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              {/* Left column empty */}
            </div>

            <div className="col-md-4 text-center footer-contact-info">
              <h4>Contact Us</h4>
              <p>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contactData.address || "16192 Coastal Hwy, Lewes, DE 19958")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-map-marker"></i> {contactData.address || "16192 Coastal Hwy, Lewes, DE 19958"}
                </a>
              </p>
              <p>
                <a href={`tel:${contactData.phone?.replace(/\s+/g, '') || "(302) 550-8833"}`}>
                  <i className="fa fa-phone"></i> {contactData.phone || "(302) 550-8833"}
                </a>
              </p>
              <p>
                <a href={`mailto:${contactData.email || "service@manomaintenance.com"}`}>
                  <i className="fa fa-envelope"></i> {contactData.email || "service@manomaintenance.com"}
                </a>
              </p>
              <p className="copyright">
                &copy; {new Date().getFullYear()} ManoMaintenance<br />
                Made by{" "}
                <a href="https://wirestorm.software" rel="nofollow">
                  Wirestorm Software
                </a>
              </p>
            </div>

            <div className="col-md-4">
              {/* Right column empty */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
// Made by wirestorm - https://wirestorm.software
