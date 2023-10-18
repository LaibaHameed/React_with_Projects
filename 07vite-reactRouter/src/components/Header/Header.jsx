import React from 'react'
import {Link, NavLink} from 'react-router-dom'

const Header = () => {
  return (
    <>

<header className="header">

<Link className="logo"> coffee <i className="fas fa-mug-hot"></i> </Link>

<nav className="navbar">
    <ul>
        <li><NavLink className={(isActive)=>`navLink ${isActive ? "active" : "deactive" }`}>home</NavLink></li>
        <li><NavLink className={()=>`navLink`}>Menu</NavLink></li>
        <li><NavLink className={()=>`navLink`}>Reservation</NavLink></li>
        <li><NavLink className={()=>`navLink`} >Contact Us</NavLink></li>
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