import React from 'react'
import "./Header.css"
const Header = () => {
  return (
    <div className='header-section'>
        <img src="/Logo-1.svg" alt="logo" />
        <div className="header-content">
            <ul className='list'>
                <li><a href="/">Home</a></li>
                <li><a href="/location-plant">Location</a></li>
                <li><a href="/identify-Plant">Classify Plant</a></li>
                <li><a href="/about-us">About Us</a></li>
            </ul>
        </div>
    </div>
  )
}

export default Header;
