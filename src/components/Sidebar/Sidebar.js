import React from "react";
import Logo from "../Logo/Logo";
import { NavLink } from "react-router-dom";
import navLinks from "../../assets/data/navLinks";
import "./sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-top">
        <header>
          <Logo />
        </header>
      </div>
      <div className="sidebar-content">
        <div className="menu">
          <ul className="nav-list">
            {navLinks.map((item, index) => (
              <li className="nav-item" key={index}>
                <NavLink
                  to={item.path}
                  className={(navClass) =>
                    navClass.isActive ? "nav-active nav-link" : "nav-link"
                  }
                >
                  <i className={item.icon}></i>
                  {item.display}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
