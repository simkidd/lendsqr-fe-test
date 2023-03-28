import React from "react";
import {NavLink, Link} from 'react-router-dom' 
import './sidebar.scss'

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='wrapper'>
        <div>
          <p>Switch Organization</p>
          <p><NavLink to='/'>Dashboard</NavLink></p>
        </div>

        <div>
          <h4>customers</h4>
          <ul>
            <li><NavLink to='users'>Users</NavLink></li>
            <li><NavLink>Guarantors</NavLink></li>
            <li><NavLink>Loans</NavLink></li>
            <li><NavLink>Decision Models</NavLink></li>
            <li><NavLink>Savings</NavLink></li>
            <li><NavLink>Loan Requests</NavLink></li>
            <li><NavLink>Whitelist</NavLink></li>
            <li><NavLink>Karma</NavLink></li>
          </ul>
        </div>

        <div>
        <h4>businesses</h4>
          <ul>
            <li><NavLink>Organization</NavLink></li>
            <li><NavLink>Loan Products</NavLink></li>
            <li><NavLink>Savings Products</NavLink></li>
            <li><NavLink>Fees and Charges</NavLink></li>
            <li><NavLink>Transactions</NavLink></li>
            <li><NavLink>Services</NavLink></li>
            <li><NavLink>Service Account</NavLink></li>
            <li><NavLink>Settlements</NavLink></li>
            <li><NavLink>Reports</NavLink></li>
          </ul>
        </div>

        <div>
        <h4>settings</h4>
          <ul>
            <li><NavLink>Preferences</NavLink></li>
            <li><NavLink>Fees and Pricing</NavLink></li>
            <li><NavLink>Audit Logs</NavLink></li>
            <li><NavLink>Systems Messages</NavLink></li>
          </ul>
        </div>

        <div>
          <Link>Logout</Link>
          <span>v1.2.0</span>
        </div>
      </div>
    </div>
  )
};

export default Sidebar;
