import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/login/Login";
import Dashboard from "./pages/dashboard/Dashboard";
import Users from "./pages/users/Users";
import UserDetails from "./pages/userDetails/UserDetails";
import Layouts from "./layouts/Layouts";
import NotFound from "./pages/404/NotFound";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layouts />}>
          <Route path="/" element={<Navigate to="/dashboard" />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="users" element={<Users />} />
          <Route path="users/:id" element={<UserDetails />} />
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
