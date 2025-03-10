import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./HeroSection.css";

const HeroSection = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [locationQuery, setLocationQuery] = useState("");
    const navigate = useNavigate();

    const handleSearch = () => {
        if(!searchQuery.trim() && !locationQuery.trim()) {
            alert("Please enter a search term or location");
            return;
        }

        const params = new URLSearchParams();
        if(searchQuery.trim()) params.append("query", searchQuery);
        if(locationQuery.trim()) params.append("location", locationQuery);
        // Redirect user to SearchResults page with query params
        navigate(`/search-results?${params.toString()}`);
    };

    return (
        <div className="hero-container">
            <div className="hero-content">
                <h1>Welcome to Virtual Herbal Garden</h1>
                <p>Tap into nature’s remedies with local herbs and plants.</p>

                <div className="hero-search">
                    <input type="text" placeholder="Search for an herb" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
                    {/* <button type="submit" onClick={handleSearch}>Search</button> */}
                </div>

                <p>Find herbs based on location</p>

                <div className="hero-search">
                    <input type="text" placeholder="📍 Location" value={locationQuery} onChange={(e) => setLocationQuery(e.target.value)} />
                    {/* <button type="submit" onClick={handleSearch}>Search</button> */}
                </div>

                <button className="search-btn" type="submit" onClick={handleSearch}>Search</button>
            </div>

            <div className="plant-section">
                <img className="circle-gradient" src="/circle__gradient.webp" alt="circle-gradient" />
                <img className="herbs" src="/Herbs.png" alt="Herbs" />
            </div>
        </div>
    );
};

export default HeroSection;

// import React from "react";
// import "./HeroSection.css";
// const HeroSection = () => {
//     return (
//         <div className="hero-container">
//             <div className="hero-content">
//                 <h1>Welcome to Virtual Herbal Garden</h1>
//                 <p>Tap into nature’s remedies with local herbs and plants.</p>

//                 <div className="hero-search">
//                     <input type="text"  placeholder="Search for an herb"/>
//                     <button type="submit">Search</button>
//                 </div>
//                 <p>Find herb's based on location</p>
//                 <div className="hero-search">
//                     <input type="text"  placeholder="📍Location"/>
//                     <button type="submit">Search</button>
//                 </div>
//                 {/* <button className="location-btn">📍Find herbs near me</button> */}
//             </div>
//             <div className="plant-section">
//                 <img className="circle-gradient" src="/circle__gradient.webp" alt="circle-gradient" />
//                 <img className="herbs" src="/Herbs.png" alt="Herbs" />
//             </div>
//         </div>
//     );
// }; 

// export default HeroSection;