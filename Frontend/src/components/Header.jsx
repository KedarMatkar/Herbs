import React from 'react'
import "./Header.css"
const Header = () => {
  return (
    <div className='header-section'>
        <div className='logo'>

        </div>
        <div className="header-content">
            <ul className='list'>
                <li><a href="/">Home</a></li>
                <li><a href="/location-plant">Plant based on Location</a></li>
                <li><a href="/identify-Plant">Identify Plant</a></li>
                <li><a href="/about-us">About Us</a></li>
            </ul>
        </div>
    </div>
  )
}

export default Header;
