import React from "react";
import "./Nav.css";

const Nav = () => {
  return (
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__item">
          <a className="nav__link active" href="#">
            All
          </a>
        </li>
        <li className="nav__item">
          <a className="nav__link" href="#">
            Active
          </a>
        </li>
        <li className="nav__item">
          <a className="nav__link" href="#">
            Completed
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
