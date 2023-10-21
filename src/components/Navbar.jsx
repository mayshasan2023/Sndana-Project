import React from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import SearchBox from "./SearchBox";
import "../styles/navbar.css";
const Navbar = () => {
  return (
    <div>
      <nav  className="navContainer">
        <Link className="linkClass" to="/">
          الرئيسية
        </Link>
    
        <a href="#Footer" className="linkClass">
          تواصل معنا
        </a>
        <SearchBox />
        <div class="logo">
          <Logo />
        </div>
      </nav>
      
    </div>
  );
};

export default Navbar;
