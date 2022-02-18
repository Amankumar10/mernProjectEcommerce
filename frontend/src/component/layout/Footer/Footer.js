import React from "react";

import playStore from "../../../images/playstore.png";
import appStore from "../../../images/Appstore.png";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="leftFooter">
        <h4>DOWNLOAD OUR APP</h4>
        <p>Download App for Android and IOS mobile phone</p>
        <img src={playStore} alt="playstore" />
        <img src={appStore} alt="Appstore" />
      </div>

      <div className="midFooter">
        <h1>SHIRRT UP</h1>
        <p>High Quality is our first priority</p>

        <p>Copyrights 2021 &copy; Aman</p>
      </div>

      <div className="rightFooter">
     <Link to="/about" > <h1> About Us </h1></Link> 
        <h4>Follow Us</h4>
        <a href="https://www.instagram.com/shirrtup/">Instagram</a>
        <a href="https://twitter.com/shirrtup">Twitter</a>
        <a href="https://www.facebook.com/shirrtupcom">Facebook</a>
      </div>
    </footer>
  );
};

export default Footer;
