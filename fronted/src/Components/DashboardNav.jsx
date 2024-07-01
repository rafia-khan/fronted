import React from "react";
import { Link } from "react-router-dom";
import "./DashboardNav.css";

export const DashboardNav = () => {
  return (
    <nav className="na">
      <div className="navbar-brand">
        <Link to="/">Ecommerce Website</Link>
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="/">SHOP</Link>
        </li>
        <li>
          <Link to="/cart">MEN</Link>
        </li>
        <li>
          <Link to="/order">WOMEN</Link>
        </li>
        <li>
          <Link to="/kids">KIDS</Link>
        </li>
        {/* <li>
        <button onClick={() => setShowLogin(true)}>Login</button>
      </li> */}
      </ul>
    </nav>
  );
};
