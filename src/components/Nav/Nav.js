import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__item">
          <Link className="nav__link active" to="/">
            All
          </Link>
        </li>
        <li className="nav__item">
          <Link className="nav__link" to="/active">
            Active
          </Link>
        </li>
        <li className="nav__item">
          <Link className="nav__link" to="/completed">
            Completed
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
