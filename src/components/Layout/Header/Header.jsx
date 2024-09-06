import React from "react";
import Logo from "../../../assets/Logo.png";
import Nav from "../Navs/Nav";
import { Link } from "react-router-dom";
import './Header.css'

const Header = () => {
  return (
    <section className="section">
      <div className="grid-container header-container">
        <div className="header-img-container">
          <Link to="/">
            <img className="headerImg" src={Logo} alt="logo" />
          </Link>
        </div>
        <Nav />
      </div>
    </section>
  );
};

export default Header;
