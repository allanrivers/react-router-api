import React from "react";
import { Link } from "react-router-dom";
import "../css/Nav.css";

function Nav() {
  return (
    <nav>
      <ul className="list-links">
        <Link to="/api">
          <li>API call</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
