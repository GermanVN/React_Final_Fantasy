import React, { Component } from "react";
import "./Nav.css";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="Nav">
      <ul>
        <Link to="/">
          <li>
            <a className="active" href="#home">
              Home
            </a>
          </li>
        </Link>
        <li>
          <a>Quest</a>
        </li>
        <li>
          <a>World Map</a>
        </li>
        <Link to="/items">
          <li>
            <a>Items</a>
          </li>
        </Link>
      </ul>
    </nav>
  );
};

export default Nav;
