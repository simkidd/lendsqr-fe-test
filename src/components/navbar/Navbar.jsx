import React from "react";
import "./navbar.scss";
import Logo from "../../assets/images/Group.png";
import ProfileImg from "../../assets/images/image 4.png";
import { Link } from "react-router-dom";
import SearchIcon from "../../assets/icons/Vector.svg";
import NotificationIcon from "../../assets/icons/np_notification_2425223_000000 1.png";
import DropdownArrow from "../../assets/icons/dropdown.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-wrapper">
        <div className="logo">
          <img src={Logo} alt="" />
        </div>

        <div className="search-container">
          <form>
            <input type="text" placeholder="Search for anything..." />
            <button className="search-btn">
              <img src={SearchIcon} alt="" />
            </button>
          </form>
        </div>

        <div className="navbar-right">
          <Link>Docs</Link>
          <div className="notification">
            <img src={NotificationIcon} alt="" />
          </div>
          <div className="profile-img-wrapper">
            <img src={ProfileImg} alt="" />
          </div>
          <div className="navbar-dropdown">
            <p className="profile-name">
              Adedeji
              <img src={DropdownArrow} alt="" />
            </p>
            <div className="dropdown-items">
              <Link className="dropdown-link">item 1</Link>
              <Link className="dropdown-link">item 2</Link>
              <Link className="dropdown-link">item 3</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
