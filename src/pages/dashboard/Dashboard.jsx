import React from "react";
import "./dashboard.scss";
import { Outlet } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h1>dashboard</h1>
    </div>
  );
};

export default Dashboard;
