import React from "react";
import "./Commercial.css";
import { Link } from "react-router-dom";
const Commercial = () => {
  const projects = [
    {
      imgSrc: "https://www.wallprinting.com/siteuploads/photogalleryimg/23image11.jpg",
      alt: "Project 1",
    },
    {
      imgSrc: "https://www.wallprinting.com/siteuploads/photogalleryimg/23image11.jpg",
      alt: "Project 2",
    },
    {
      imgSrc: "https://www.wallprinting.com/siteuploads/photogalleryimg/23image11.jpg",
      alt: "Project 3",
    },
  ];


  return (
    <section className="our-work">
      <h1 className="section-title">Our Work</h1>
      <div className="work-gallery">
        {projects.map((project, index) => (
          <div key={index} className="work-item">
            <img src={project.imgSrc} alt={project.alt} />
          </div>
        ))}
      </div>
     <Link to={"/contact"}><button className="read-more-btn">READ MORE</button></Link>
    </section>
  );
};

export default Commercial;
