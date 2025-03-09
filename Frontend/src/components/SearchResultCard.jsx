import React from 'react'
import {Link} from "react-router-dom"
import "./SearchResultCard.css";

const SearchResultCard = ({herb}) => {
  return (
    <div className="search-card-container">
      <img src={`http://localhost:5000/uploads/${herb.image}`} alt={herb.name} />
      <h2 className="herb-name">{herb.name}</h2>
      {/* <p className="herb-description">{herb.shortDescription}</p> */}
      <Link to={`/herb/${herb._id}`}>
        <button className="read-more">Read More</button>
      </Link>
    </div>
  )
}

export default SearchResultCard
