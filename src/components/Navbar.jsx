import React from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import SearchBox from "./SearchBox";
import "../styles/navbar.css";
const Navbar = () => {
  return (
    <div>
      <nav id="desktop-nav" className="navContainer">
        <Link className="linkClass" to="/">
          الرئيسية
        </Link>
        <Link className="linkClass" to="/Favorites">
          المفضلات
        </Link>
        
        <a href="#Footer" className="linkClass">
          تواصل معنا
        </a>
        <SearchBox />
        <div class="logo">
          <Logo />
        </div>
      </nav>
      <nav id="hamburger-nav">
        <div class="logo">
          <Logo />
        </div>
        <div class="hamburger-menu">
          <div class="hamburger-icon" onclick="toggleMenu()">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div class="menu-links">
            <SearchBox />
            <li>
              <Link className="linkClass" to="/">
                الرئيسية
              </Link>
            </li>
            
            <li>
              <a href="#Footer" className="linkClass">
                تواصل معنا
              </a>
            </li>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
