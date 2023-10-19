import React from "react";
import logo from "../assets/logo.png";
import fontlogo from "../assets/fontlogo.png";
import '../styles/logo.css'
const Logo = () => {
  return (
    <div className="logo">
      <img src={logo} height={42} alt="logo" className="logo-img"/>
      <img src={fontlogo} height={42} alt="fontlogo" />
    </div>
  );
};

export default Logo;
