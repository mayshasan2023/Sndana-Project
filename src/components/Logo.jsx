import React from "react";
import logo from "../assets/logo.png";
import fontlogo from "../assets/fontlogo.png";

const Logo = () => {
  return (
    <div>
      <img src={fontlogo} height={42} alt="fontlogo" />
      <img src={logo} height={42} alt="logo" />
    </div>
  );
};

export default Logo;
