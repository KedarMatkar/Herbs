import React from 'react'
import "./Header.css"
const Hearder = () => {
  return (
    <div className='header-section'>
        <div className='logo'>

        </div>
        <div className="header-content">
            <ul className='list'>
                <li><a href="Home">Home</a></li>
                <li><a href="Plant based on Location">Plant based on Location</a></li>
                <li><a href="Identify Plant">Identify Plant</a></li>
                <li><a href="About Us">About Us</a></li>
            </ul>
        </div>
    </div>
  )
}

export default Hearder;
