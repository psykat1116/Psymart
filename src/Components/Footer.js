import React from 'react'
import { Link } from 'react-router-dom'
import { BsGithub } from "react-icons/bs";
import { FaCodepen } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";

const Footer = () => {
  return (
    <div id='footer'>
      <div className="gotoshop">
        <p>Ready to get started?<br />Talk to us today</p>
        <button>Get Started</button>
      </div>
      <div className="main">
        <div className="self">
          <h4>Saikat Samanta</h4>
          <p>I am currently a UG IT Student from Jalpaiguri Government Engineering College</p>
        </div>
        <div className="subscribe">
          <h4>Subscribe to get important updates</h4>
          <input type='email' placeholder='YOUR EMAIL' name='subemail'></input>
          <button>Subscribe</button>
        </div>
        <div className="connect">
          <h4>Follow Us</h4>
          <ul>
            <li><Link target='_blank' to='https://github.com/psykat1116'><BsGithub /></Link></li>
            <li><Link target='_blank' to='https://codepen.io/psykat1611'><FaCodepen /></Link></li>
            <li><Link target='_blank' to='https://www.linkedin.com/in/saikat-samanta-766041226'><FaLinkedinIn /></Link></li>
            <li><Link target='_blank' to='https://cssbattle.dev/player/psykat_1611'><FaCss3 /></Link></li>
          </ul>
        </div>
      </div>
      <div className="copyright">
        <hr />
        <div className="copy">
          <p>© {new Date().getFullYear()} Saikat Samanta. All Rights Reserved</p>
          <p>PRIVACY POLICY<br />TERMS & CONDITIONS</p>
        </div>
      </div>
    </div>
  )
}

export default Footer