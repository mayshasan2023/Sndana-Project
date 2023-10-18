import React from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import SearchBox from "./SearchBox";
import "../styles/navbar.css";
const Navbar = () => {
  return (
    <div className="navContainer">
      <button type="button" className="btn-sup">
        انشاء حساب
      </button>
      <button type="button" className="btn-lg">
        تسجيل الدخول
      </button>
      <Link className="linkClass" to="/">
        {" "}
        الرئيسية
      </Link>
      <Link className="linkClass" to="/Favorites">
        {" "}
        المفضلات
      </Link>
      <a href="#Footer" className="linkClass">
        تواصل معنا
      </a>
      <SearchBox />
      {<Logo />}
    </div>
  );
};

export default Navbar;
