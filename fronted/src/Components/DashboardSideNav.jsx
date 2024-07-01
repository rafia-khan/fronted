import React from "react";
import { Link } from "react-router-dom";
import "./DashboardSidebar.css";

export const DashboardSideNav = () => {
  return (
    <div className="sidebar">
      <ul className="sidebar-links">
        <li>
          <Link to="/dashboard">E_commerce</Link>
        </li>
        <li>
          <Link to="/dashboard/orders">Men</Link>
        </li>
        <li>
          <Link to="/dashboard/products">Women</Link>
        </li>
        <li>
          <Link to="/dashboard/settings">Kids</Link>
        </li>
      </ul>
    </div>
  );
};
