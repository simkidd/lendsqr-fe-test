import React from "react";
import "./navbar.scss";
import Logo from "../../assets/images/Group.png";
import ProfileImg from "../../assets/images/image 4.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div>
        <div className="logo">
          <img src={Logo} alt="" />
        </div>

        <div className="search-container">
          <form>
            <input type="text" />
            <button className="search-btn"></button>
          </form>
        </div>

        <div className="nav-right">
          <div>
            <Link>Docs</Link>
          </div>
          <div className="notification"></div>
          <div className="profile-img-wrapper">
            <img src={ProfileImg} alt="" />
          </div>
          <div className="profile-name">
            <p>Adedeji</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
