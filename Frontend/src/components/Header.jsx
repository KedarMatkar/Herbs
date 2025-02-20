import React from 'react'
import { Link } from 'react-router-dom'
import "./Header.css"
const Header = () => {
  return (
    <div className='header-section'>
        <img src="/Logo-1.svg" alt="logo" />
        <div className="header-content">
            <ul className='list'>
                <li><Link to='/'>Home</Link></li>
                {/* <li><a href="/location-plant">Location</a></li> */}
                <li><Link to="/identify-plant">Classify</Link></li>
                <li><a href="/about-us">About Us</a></li>
            </ul>
        </div>
    </div>
  )
}

export default Header;
