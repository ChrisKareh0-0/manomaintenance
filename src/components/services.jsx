// Made by wirestorm - https://wirestorm.software
import React from "react";

export const Services = (props) => {
  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Our Services</h2>
          <p>
            Professional maintenance and repair services for homes, businesses, and everything in between — done right, every time.
          </p>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div
                  key={`${d.name}-${i}`}
                  className={`col-md-4 col-sm-6 col-xs-12 ${i >= 3 && i <= 4 ? 'shift-left' : ''}`}
                >
                  <i className={d.icon}></i>
                  <div className="service-desc">
                    <p>{d.text}</p>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
// Made by wirestorm - https://wirestorm.software
