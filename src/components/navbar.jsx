import React from "react";

const NavBar = ({totalCounters, totalItems}) => {
  return (
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="#">
          Navbar
          <span className="badge badge-pill mx-3 badge-primary">
            {totalItems}
          </span>
          <span className="badge badge-pill mx-2 badge-secondary">
            {totalCounters}
          </span>
        </a>
      </nav>
    );
}

export default NavBar;
