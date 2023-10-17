import React from "react";
import logo from "../assets/logo.png";
import fontlogo from "../assets/fontlogo.png";

const Logo = () => {
  return (
    <div>
      <img src={logo} height={42} alt="logo" />
      <img src={fontlogo} height={42} alt="fontlogo" />
    </div>
  );
};

export default Logo;
