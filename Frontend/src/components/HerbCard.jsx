import React from "react";
import {useState, useEffect} from "react";
import axios from "axios";
import "./HerbCard.css";
import {Link} from "react-router-dom"

const HerbCard = () => {
    const [herbs, setHerbs] = useState([]);
  
    useEffect(() => {
      axios.get("http://localhost:5000/api/herbs")
        .then((response) => setHerbs(response.data.slice(0, 5)))
        .catch((error) => console.error("Error fetching herbs:", error));
    }, []);
  
    return (
      <div className="card-section">
        <h2 className="heading">Discover Herbs</h2>
        <div className="container">
          {herbs.map((herb) => (
            <div key={herb._id} className="card-container">
              <img src={`http://localhost:5000/uploads/${herb.image}`} alt={herb.name} />
              <h2 className="herb-name">{herb.name}</h2>
              <Link to={`/herb/${herb._id}`}>
                <button className="read-more">Read More</button>
              </Link>

            </div>
          ))}
        </div>
      </div>
    );
  };
  
export default HerbCard;

// import React from "react";
// import "./HerbCard.css";

// function HerbCard() {
//     return (
//         <div className="card-section">
//             <h2 className="heading">Discover Herbs</h2>
//             <div className="container">
//                 <div className="card-container">
//                     <img src="/Guggulu.png" alt="herb-image" />
//                     <h2 className="herb-name">Guggulu</h2>
//                     <button className="read-more">Read More</button>
//                 </div>
//                 <div className="card-container">
//                     <img className="Aloe-Vera" src="/Aloe-Vera.png" alt="herb-image" />
//                     <h2 className="herb-name">Aloe Vera</h2>
//                     <button className="read-more">Read More</button>
//                 </div>
//                 <div className="card-container">
//                     <img className="Tulsi" src="/Tulsi.png" alt="herb-image" />
//                     <h2 className="herb-name">Tulsi</h2>
//                     <button className="read-more">Read More</button>
//                 </div>
//                 <div className="card-container">
//                     <img className="Neem" src="/Neem.png" alt="herb-image" />
//                     <h2 className="herb-name">Neem</h2>
//                     <button className="read-more">Read More</button>
//                 </div>
//                 <div className="card-container">
//                     <img className="Ashwagandha" src="/Ashwagandha.png" alt="herb-image" />
//                     <h2 className="herb-name">Ashwagandha</h2>
//                     <button className="read-more">Read More</button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default HerbCard;