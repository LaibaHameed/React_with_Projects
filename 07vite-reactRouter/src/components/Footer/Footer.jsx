import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'
// import {Link, NavLink} from 'react-router-dom'


const Footer = () => {
  return (
    <>
        <footer className="footer">
    <div className="container">
        <div className="row">
            <div className="footer-col">
                <h4>company</h4>
                <ul>
                    <li><Link className='link' to="/">about us</Link></li>
                    <li><Link className='link' to="/">our services</Link></li>
                    <li><Link className='link' to="/">privacy policy</Link></li>
                    <li><Link className='link' to="/">Contact us</Link></li>
                </ul>
            </div>

            <div className="footer-col">
                <h4>get help</h4>
                <ul>
                    <li><Link className='link' to="/">FAQ</Link></li>
                    <li><Link className='link' to="/">shipping</Link></li>
                    <li><Link className='link' to="/">returns</Link></li>
                    <li><Link className='link' to="/">order status</Link></li>
                </ul>
            </div>
            
            <div className="footer-col">
                <h4>online shop</h4>
                <ul>
                    <li><Link className='link' to="/">coffee</Link></li>
                    <li><Link className='link' to="/">cups</Link></li>
                    <li><Link className='link' to="/">groundCoffe</Link></li>
                    <li><Link className='link' to="/">cookies</Link></li>
                </ul>
            </div>

            <div className="footer-col">
                <h4>follow us</h4>
                <div className="social-links">
                    <Link className='link' to="/"><i className="fab fa-facebook-f"></i></Link>
                    <Link className='link' to="/"><i className="fab fa-twitter"></i></Link>
                    <Link className='link' to="/"><i className="fab fa-instagram"></i></Link>
                    <Link className='link' to="/"><i className="fab fa-linkedin-in"></i></Link>
                </div>
            </div>
        </div>
    </div>
</footer>
    </>
  )
}

export default Footer