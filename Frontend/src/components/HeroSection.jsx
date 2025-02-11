import React from "react";
import "./HeroSection.css";
const HeroSection = () => {
    return (
        <div className="hero-container">
            <div className="hero-overlay"></div>

            <div className="hero-content">
                <h1>Welcome to Virtual Herbal Garden</h1>
                <p>Tap into nature’s remedies with local herbs and plants.</p>

                <div className="hero-search">
                    <input type="text"  placeholder="Search for an herb"/>
                    <button type="submit">Search</button>
                </div>

                <button className="location-btn">📍Find herbs near me</button>
            </div>
        </div>
    );
}; 

export default HeroSection;