import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
    return (
        <div className='footer' id='footer'>
            <div className="footer-content">
                <div className="footer-content-left">
                    <img src={assets.logo} alt="" />
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga reiciendis debitis minima officia odit accusamus quaerat? Maxime ex vel omnis ratione voluptas obcaecati quasi modi, hic ut eligendi, atque inventore.</p>
                    <div className="footer-social-icons">
                        <img src={assets.facebook_icon} alt="" />
                        <img src={assets.linkedin_icon} alt="" />
                        <img src={assets.twitter_icon} alt="" />
                    </div>
                </div>
                <div className="footer-content-center">
                 <h2>COMPANY</h2>
                 <ul>
                    <li>Home</li>
                    <li>About-Us</li>
                    <li>Delivery</li>
                    <li>Privacy-Policy</li>
                 </ul>
                </div>
                <div className="footer-content-right">
                 <h2>Get In Touch</h2>
                 <ul>
                    <li>+1-221-456-7890</li>
                    <li>contact@tomato.com</li>
                 </ul>
                </div>
            </div>
           <hr />
           <p className="footer-copyright">&#169; 2024 Developed & Designed By Gaurav Jain. All rights reserved.</p>
        </div>
    )
}

export default Footer
