import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/logo_big.png'
import instagram_icon from '../Assets/instagram_icon.png'
import pintester_icon from '../Assets/pintester_icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'
import { Link, useLocation } from 'react-router-dom'
const Footer = () => {
const {pathname}=  useLocation()
const pathChecker=pathname.includes("/product/")

  return (
    <div className={`footer ${pathChecker? "padding600":"padding100"}`}>
      <div className="footer-logo">
        <img src={footer_logo} alt="" />
        <p>SHOPPER</p>
      </div>
      <ul className='footer-links'>
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li><Link to='/About'>About</Link ></li> 
        <li>Contact</li>

      </ul>
      <div className='footer-social-icon'>
        <div className='footer-icons-container'>
            <img src={instagram_icon} alt="" />
         </div>
         <div className='footer-icons-container'>
            <img src={pintester_icon} alt="" />
         </div>
         <div className='footer-icons-container'>
            <img src={whatsapp_icon} alt="" />
         </div>

      </div>
      <div className='footer-copyright'>
        <hr />
        <p>Copyright@2024 -All Right Reserved.</p>
      </div>
    </div>
  )
}

export default Footer
