import React from "react";
import Logo from "./Logo";
import instagramLogo from '../assets/instagramLogo.png';
import linkedinLogo from '../assets/linkedinLogo.png';
import facebookLogo from '../assets/facebookLogo.png';
import whatsappLogo from '../assets/whatsappLogo.png'
import '../styles/footer.css';
const Footer = () => {
  return (
    
      <footer id="Footer" className="footer-Container"> 
          <div className="footer-ph">
          <p>تواصل معنا </p>
          <br />
        <div className="footer-ph-icons">
          <img src={instagramLogo} height={38} alt="instagramLogo" />
          <img src={linkedinLogo} height={42} alt="linkedinLogo"  class="icon"onclick="location.href='https://linkedin.com/'"/>
          <img src={facebookLogo} height={38} alt="facebookLogo" />
          <img src={whatsappLogo} height={38} alt="whatsappLogo" />
        </div>
        </div>


        <div className="footer-ph-cinter">
        {<Logo />}
        <br />
          <p> © الحقوق محفوظة لصالح موقع سندانة</p>
        </div>
      
       <div className="footer-ph-right">
          <p>الشروط والاحكام </p>
          <br />
          <p>من نحن؟ </p>
        </div>
      </footer>
  );
};

export default Footer;
