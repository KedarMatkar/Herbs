import React from "react";
import "./HeroSection.css";
const HeroSection = () => {
    return (
        <div className="hero-container">
            <div className="hero-content">
                <h1>Welcome to Virtual Herbal Garden</h1>
                <p>Tap into nature’s remedies with local herbs and plants.</p>

                <div className="hero-search">
                    <input type="text"  placeholder="Search for an herb"/>
                    <button type="submit">Search</button>
                </div>

                <button className="location-btn">📍Find herbs near me</button>
            </div>
            <div className="plant-section">
                <img className="circle-gradient" src="/circle__gradient.webp" alt="circle-gradient" />
                <img className="herbs" src="/Herbs.png" alt="Herbs" />
            </div>
        </div>
    );
}; 

export default HeroSection;