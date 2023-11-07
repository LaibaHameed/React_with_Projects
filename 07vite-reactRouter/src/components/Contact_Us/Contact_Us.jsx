import React from 'react'
import "./Contact_Us.css"

const Contact_Us = () => {
  return (
    <>
<div className="parent">
    <div className="body">
        <div className="container-c">
            <div className="contact-box">
                <div className="left"></div>
                <div className="right">
                    <h2>Contact Us</h2>
                    <input type="text" className="field" placeholder="Your Name"/>
                    <input type="text" className="field" placeholder="Your Email"/>
                    <input type="text" className="field" placeholder="Phone"/>
                    <textarea placeholder="Message" className="field"></textarea>
                    <button className="btn btn-send">Send</button>
                </div>
            </div>
        </div>
    </div>
    
</div>
    </>
  )
}

export default Contact_Us