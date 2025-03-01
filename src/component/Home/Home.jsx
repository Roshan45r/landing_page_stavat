import React from "react";
import testvideo from "../../assets/testvideo.mp4";
import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="home-container">
            <video autoPlay loop muted playsInline className="background-video">
                <source src={testvideo} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="overlay-text">
                <h3>Endless Creativity & </h3>
                <h3>High Definition Quality with</h3>
                <h1>Our Latest Vertical</h1>
                <h1>Wall Printing Machine</h1>
                <h4>We Print Directly On Your Walls, With Your Custom Art</h4>
                <Link to={"/contact"}><button className="quote-button" >Get your free quote Today!</button>
                </Link>  </div>
        </div>
    );
};

export default Home;
