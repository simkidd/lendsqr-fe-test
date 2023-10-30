import { useState } from 'react'
import { NavLink, Link, useNavigate, useLocation } from "react-router-dom";
import { Businesses, Customers, Settings } from "@/data/sideMenu"
import "./sidebar.scss";
import Briefcase from "../../assets/icons/briefcase 1.png";
import Dropdown from "../../assets/icons/np_next_2236826_000000 2.png";
import Home from "../../assets/icons/home 1.png";
import Logout from "../../assets/icons/sign-out 1.svg";


interface ISidebar {
  showSidebar: boolean;
  handleSidebarShow: () => void;
}


const Sidebar: React.FC<ISidebar> = ({ showSidebar, handleSidebarShow }) => {
  const navigate = useNavigate();
  const [isExpanded, setIsExpanded] = useState<boolean>(false)
  const { pathname } = useLocation()

  const navigateToLogin = () => {
    navigate("login");
  };

  const toggleAccordion = () => {
    setIsExpanded(!isExpanded)
  }

  return (
    <div className={showSidebar ? "sidebar show-sidebar" : "sidebar"}>
      <div className="wrapper">
        <div>
          <p onClick={toggleAccordion} className='expanded'>
            <img src={Briefcase} alt="" />
            Switch Organization
            <img src={Dropdown} alt="" />
          </p>
          <ul style={{ marginTop: '1.5rem' }}>
            {isExpanded && (
              <li>
                <span className="expanded-items">Organization 1</span>
                <span className="expanded-items">Organization 2</span>
              </li>
            )}
            <li onClick={handleSidebarShow}>
              <NavLink to="/" className={`${pathname === '/' && "active"}`}>
                <img src={Home} alt="" />
                Dashboard
              </NavLink>
            </li>
          </ul>
        </div>

        <div>
          <h4>customers</h4>
          <ul>
            {Customers.map((item, i) => {
              return (
                <li key={i} onClick={handleSidebarShow}>
                  <NavLink to={item.url} className={`${pathname === item.url && "active"}`}>
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
            {Businesses.map((item, i) => {
              return (
                <li key={i} onClick={handleSidebarShow}>
                  <NavLink to={item.url} className={`${pathname === item.url && "active"}`}>
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
            {Settings.map((item, i) => {
              return (
                <li key={i} onClick={handleSidebarShow}>
                  <NavLink to={item.url} className={`${pathname === item.url && "active"}`}>
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
              <Link to=''>
                <img src={Logout} alt="" />
                Logout
              </Link>
            </li>
          </ul>
          <span className="version">v1.2.0</span>
        </div>
      </div>
    </div>
  )
}

export default Sidebar