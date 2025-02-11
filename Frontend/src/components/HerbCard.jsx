import React from "react";
import "./HerbCard.css";

function HerbCard() {
    return (
        <div className="card-section">
            <h2 className="heading">Discover Herbs</h2>
            <div className="card-container">
                <img src="/Aloe-Vera-Plant.jpg" alt="herb-image" />
                <h2 className="herb-name">Aloe Vera</h2>
                <p className="herb-description">Soothes burns and improves skin health.</p>
            </div>
        </div>
    );
};

export default HerbCard;