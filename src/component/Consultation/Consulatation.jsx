import React from "react";
import imageproject from "../../assets/imageproject.png";
import "./Consulatation.css";
import { Link } from "react-router-dom";

const Consultation = () => {
  return (
    <div className="wall-printing-container">
      <div className="text-section">
        <h2 className="highlight-text" style={{ color: 'black' }}>
          Wish your walls had a fresh new look?
        </h2>
        <p>
          Have some cool ideas for your walls? Do you want your designs to be
          both easy on the budget and eye-catching, vibrant, and high-definition
          digital quality as your preferences change? Perhaps it’s time to
          change perspectives. Wall printing allows you to make considerable
          design changes without breaking the bank.
        </p>
       <Link to={"/contact"}> <button className="consultation-btn">FREE CONSULTATION</button></Link>
      </div>
      <div className="image-section">
        <img src={imageproject} alt="Wall Printing Machine" />
      </div>
      <div className="features-section">
        <div className="highlight-container">
          <h2 className="highlight-text">Any Surface.<br/><span>Any Color.</span><br/> <span>Any Size</span></h2>
        
        </div>
        <ul className="features-list">
          <li>
            <span className="icon">🌞</span> UV Protected Ink
          </li>
          <li>
            <span className="icon">🎨</span> High Precision 3D Digital Artwork Printer
          </li>
          <li>
            <span className="icon">🚚</span> Same-Day Printing
          </li>
          <li>
            <span className="icon">🛡️</span> Safe & Contactless
          </li>
          <li>
            <span className="icon">🛡️</span> Safe & Contactless
          </li>
        </ul>
      </div>
      
    </div>
    
  );
};

export default Consultation;