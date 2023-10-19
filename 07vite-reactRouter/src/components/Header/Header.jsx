import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import "./Header.css"

const Header = () => {
  return (
    <>

<header className="header">

<Link className="logo"> coffee <i className="fas fa-mug-hot"></i> </Link>

<nav className="navbar">
    <ul>
        <li><NavLink to='/' className={({isActive})=>`navLink ${isActive ? "active" : "deactive" }`}>home</NavLink></li>
        <li><NavLink to='/menu' className={({isActive})=>`navLink ${isActive ? "active" : "deactive" }`}>Menu</NavLink></li>
        <li><NavLink to='/reserve' className={({isActive})=>`navLink ${isActive ? "active" : "deactive" }`}>Reservation</NavLink></li>
        <li><NavLink to='/contact' className={({isActive})=>`navLink ${isActive ? "active" : "deactive" }`} >Contact Us</NavLink></li>
    </ul>
</nav>

<div className="icons">
    <div  id="menu-btn" className="fas fa-bars"></div>
    <Link  className=" link fas fa-shopping-cart"></Link>
    <Link  className=" link btn">Join Us</Link>
</div>

</header>
    </>
  )
}

export default Header;