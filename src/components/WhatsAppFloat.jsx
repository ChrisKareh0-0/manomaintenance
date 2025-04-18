import React from "react";

export const WhatsAppFloat = () => {
  const phoneNumber = "1234567890"; // Replace with your actual phone number
  const message = "Hello! I'm interested in your services."; // Optional pre-filled message
  
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  
  return (
    <a 
      href={whatsappUrl}
      className="whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
    >
      <i className="fa fa-whatsapp"></i>
    </a>
  );
};