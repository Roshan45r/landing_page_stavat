import React from "react";
import "./Contact.css";
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";
import Header from "../../component/Header/Header";
import Query from "../../component/Query/Query";

const Contact = () => {
  return (
    <div className="contact-page">
      <Header />

      <section
        className="contact-banner"
        style={{
          background: "linear-gradient(to right, rgb(239, 237, 214), rgb(248, 125, 203))",
        }}
      >
        <h1>CONTACT</h1>
      </section>

      <section className="contact-content">
        <h2 className="connect-title">Connect With Us!</h2>
        <p className="connect-text">
          Please fill out this contact form, and one of our design team members
          will reach out to you to schedule a time to go over your project ideas!
        </p>
      </section>

      {/* Contact Information Section */}
      <div className="contact-info-container">
        <div className="contact-card">
          <FaPhoneAlt className="icon" />
          <h3 className="contact-title">GIVE US A CALL</h3>
          <p>M-F 9AM-6PM EST</p>
          <p>(954) 495-4774</p>
        </div>

        <div className="contact-card">
          <FaMapMarkerAlt className="icon" />
          <h3>AREAS WE COVER</h3>
          <p>Currently Serving South East Florida</p>
        </div>

        <div className="contact-card">
          <FaEnvelope className="icon" />
          <h3>SEND US AN EMAIL</h3>
          <p>Inquiry@WallPrinting.com</p>
        </div>
      </div>
      <Query />
    </div>

  );
};

export default Contact;
