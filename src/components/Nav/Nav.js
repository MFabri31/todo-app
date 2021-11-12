import React from "react";
import "./Nav.css";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__item">
          <NavLink
            className="nav__link"
            to="/"
            activeClassName="active"
            exact={true}
          >
            All
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink className="nav__link" to="/active" activeClassName="active">
            Active
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink
            className="nav__link"
            to="/completed"
            activeClassName="active"
          >
            Completed
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
