import React from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { Businesses, Customers, Settings } from "../../data/SideMenu";
import "./sidebar.scss";
import Briefcase from "../../assets/icons/briefcase 1.png";
import Dropdown from "../../assets/icons/np_next_2236826_000000 2.png";
import Home from "../../assets/icons/home 1.png";
import Logout from "../../assets/icons/sign-out 1.svg";

const Sidebar = () => {
  const navigate = useNavigate();

  const navigateToLogin = () => {
    navigate("login");
  };

  return (
    <div className="sidebar">
      <div className="wrapper">
        <div>
          <p>
            <img src={Briefcase} alt="" />
            Switch Organization
            <img src={Dropdown} alt="" />
          </p>
          <ul style={{marginTop: '1.5rem'}}>
            <li>
              <NavLink to="/" activeClassName="active">
                <img src={Home} alt="" />
                Dashboard
              </NavLink>
            </li>
          </ul>
        </div>

        <div>
          <h4>customers</h4>
          <ul>
            {Customers.map((item) => {
              return (
                <li>
                  <NavLink to={item.url} activeClassName="active">
                    <img src={item.icon} alt="" />
                    {item.menu}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>

        <div>
          <h4>businesses</h4>
          <ul>
            {Businesses.map((item) => {
              return (
                <li>
                  <NavLink to={item.url} activeClassName="active">
                    <img src={item.icon} alt="" />
                    {item.menu}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>

        <div>
          <h4>settings</h4>
          <ul>
            {Settings.map((item) => {
              return (
                <li>
                  <NavLink to={item.url}  activeClassName="active">
                    <img src={item.icon} alt="" />
                    {item.menu}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>
            <hr />
        <div>
          <ul>
            <li onClick={navigateToLogin}>
              <Link>
                <img src={Logout} alt="" />
                Logout
              </Link>
            </li>
          </ul>
          <span className="version">v1.2.0</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
