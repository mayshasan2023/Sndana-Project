import React from "react";
import Logo from "./Logo";
import instagramLogo from "../assets/instagramLogo.png";
import linkedinLogo from "../assets/linkedinLogo.png";
import facebookLogo from "../assets/facebookLogo.png";
import whatsappLogo from "../assets/whatsappLogo.png";
import "../styles/footer.css";
const Footer = () => {
  return (
    <footer id="Footer" className="footer-Container">
      <div className="footer-ph">
        <p>تواصل معنا </p>
        <br />
        <div className="footer-ph-icons">
          <a href="https://instagram.com/">
            <img src={instagramLogo} height={38} alt="instagramLogo" />
          </a>
          <a href="https://linkedin.com/">
            <img src={linkedinLogo} height={38} alt="linkedinLogo" />
          </a>
          <a href="https://facebook.com/">
            <img src={facebookLogo} height={38} alt="facebookLogo" />
          </a>
          <a href="https://whatsapp.com/">
            <img src={whatsappLogo} height={38} alt="whatsappLogo" />
          </a>
        </div>
      </div>

      <div className="footer-ph-cinter">
        {<Logo />}
        <br />
        <p> © 2023 الحقوق محفوظة لصالح موقع سندانة</p>
      </div>

      <div className="footer-ph-right">
        <p>الشروط والاحكام </p>
      </div>
    </footer>
  );
};

export default Footer;
