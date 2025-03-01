import React from "react";
import "./Surface.css";
import business from "../../assets/business.png";

const surfaces = [
  { id: 1, image: business, name: "Concrete Wall" },
  { id: 2, image: business, name: "Plaster Wall" },
  { id: 3, image: business, name: "Brick Wall" },
  { id: 4, image: business, name: "Glass Wall" },
  { id: 5, image: business, name: "Metal Wall" },
  { id: 6, image: business, name: "Wooden Wall" },
];

const Surface = () => {
  return (
    <div className="surfaces-container">
      <h3 className="surfaces-title">Surfaces We Work On</h3>
      <h1 className="surfaces-heading">
        Any Image. Any Wall. Indoors or Outdoors.
      </h1>
      <p className="surfaces-subheading">
        You provide us with a digital copy of the artwork. Need help? No problem.
        <br />
        We can do the design for you. Just let us know what you're looking for.
      </p>

      <div className="surfaces-grid">
        {surfaces.map((surface) => (
          <div key={surface.id} className="surface-card">
            <img src={surface.image} alt={surface.name} className="surface-image" />
            <p className="surface-name">{surface.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Surface;
