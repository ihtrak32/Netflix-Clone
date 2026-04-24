import React from 'react'
import './Footer.css'
import yt_icon from '../../assets/youtube_icon.png'
import twit_icon from '../../assets/twitter_icon.png'
import face_icon from '../../assets/facebook_icon.png'

const Footer = () =>{
  return (
    <div className='footer'>
      <div className="footer-icons">
        <img src={face_icon} alt="" />
        <img src={twit_icon} alt="" />
        <img src={yt_icon} alt="" />
      </div>
      <ul>
        <li>Audio Description</li>
        <li>Investor Relation</li>
        <li>Legal Notices</li>
        <li>Help Centre</li>
        <li>Jobs</li>
        <li>Cookie Preference</li>
        <li>Gift Cards</li>
        <li>Term of use</li>
        <li>Corporate Information</li>
        <li>Media Centre</li>
        <li>Privacy</li>
        <li>Contact us</li>
      </ul>
      <p className='copyright-text'>© 1997-2023 Netflix, Inc.</p>
      </div>
  )
}

export default Footer;