import React from "react";
import logo from "../../logo.svg";
import "./Navbar.scss";

export default function Navbar() {
  return (
    <nav className="navbar">
      <img src={logo} alt="my logo" />
      <ul className="nav-links">
        <li>
          <a href="/" className="nav-link">
            home
          </a>
        </li>
        <li>
          <a href="/" className="nav-link">
            about
          </a>
        </li>
        <li>
          <a href="/" className="nav-link">
            service
          </a>
        </li>
        <li>
          <a href="/" className="nav-link active">
            images
          </a>
        </li>
      </ul>
    </nav>
  );
}
