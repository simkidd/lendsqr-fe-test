import React from "react";
import "./dashboard.scss";
import { Outlet } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";

const Dashboard = () => {
  return (
    <div>
      <Navbar />
      <div>
        <Sidebar />
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
