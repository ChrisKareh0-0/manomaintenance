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
                <i className="fa fa-map-marker"></i> {contactData.address || "4321 California St, San Francisco, CA 12345"}
              </p>
              <p>
                <i className="fa fa-phone"></i> {contactData.phone || "+1 123 456 1234"}
              </p>
              <p>
                <i className="fa fa-envelope"></i> {contactData.email || "info@company.com"}
              </p>
              <p className="copyright">
                &copy; {new Date().getFullYear()} ManoMaintenance<br />
                Powered by{" "}
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
