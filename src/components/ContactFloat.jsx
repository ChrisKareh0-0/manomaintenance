// Made by wirestorm - https://wirestorm.software
import React, { useState, useEffect } from "react";
import JsonData from "../data/data.json";

export const ContactFloat = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [contactData, setContactData] = useState({});

  useEffect(() => {
    setContactData(JsonData.Contact || {});
  }, []);

  const togglePopup = (e) => {
    e.preventDefault();
    setIsPopupVisible(!isPopupVisible);
  };

  const closePopup = () => {
    setIsPopupVisible(false);
  };

  return (
    <>
      <a
        href="#contact"
        className="contact-float"
        onClick={togglePopup}
      >
        <i className="fa fa-envelope"></i>
      </a>

      {isPopupVisible && (
        <div className="contact-popup-overlay" onClick={closePopup}>
          <div className="contact-popup" onClick={(e) => e.stopPropagation()}>
            <button className="close-popup" onClick={closePopup}>
              <i className="fa fa-times"></i>
            </button>
            <h3>Contact Us</h3>
            <div className="popup-contact-info">
              <p>
                <a href={`tel:${contactData.phone?.replace(/\s+/g, '') || "(302)5508833"}`}>
                  <i className="fa fa-phone"></i> {contactData.phone || "(302) 550-8833"}
                </a>
              </p>
              <p>
                <a href={`mailto:${contactData.email || "service@manomaintenance.com"}`}>
                  <i className="fa fa-envelope"></i> {contactData.email || "service@manomaintenance.com"}
                </a>
              </p>
              <p>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contactData.address || "16192 Coastal Hwy, Lewes, DE 19958")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-map-marker"></i> {contactData.address || "16192 Coastal Hwy, Lewes, DE 19958"}
                </a>
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
// Made by wirestorm - https://wirestorm.software
