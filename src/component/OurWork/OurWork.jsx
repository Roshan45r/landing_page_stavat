import React from "react";
import "./OurWork.css";
import business from "../../assets/business.png";
import business1 from "../../assets/business1.png";
import { Link } from "react-router-dom";

const OurWork = () => {
  return (
    <div className="services-container">
      <h2 className="services-title">Our Services</h2>
      <h1 className="services-heading">
        Transform plain walls into <br />
        <span>stunning, vibrant, eye-catching art designs</span>
      </h1>
      <p className="services-subheading">Our wall printers can make it real!</p>

      <div className="services-grid">
        <div className="service-card commercial">
          <div className="service-content">
            <h2>Commercial Wall Printing</h2>
            <p>
              Our experts can help get your walls printed at Restaurants,
              Hospitals, Hotels, Medical Offices, Warehouses & More.
            </p>
            <Link to={"/commercial"}><button className="read-more-btn">READ MORE</button></Link>
          </div>
          <div className="service-icon">
            <img src={business} alt="Commercial Wall Printing Icon" />
          </div>
        </div>

        <div className="service-card residential">
          <div className="service-content">
            <h2>Residential Wall Printing</h2>
            <p>
              Same-day printing made easy to enhance your Living Room, Game
              Room, Play Room, Bed Rooms & More.
            </p>
           <Link to={"/residential"}> <button className="read-more-btn">READ MORE</button></Link>
          </div>
          <div className="service-icon">
            <img src={business1} alt="Residential Wall Printing Icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurWork;
