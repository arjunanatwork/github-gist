import React from "react";
import gist from "./../../assets/images/gist.png"

const Header = () => {
  return (
    <div>
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="#">
            <img src={gist} width="112" height="28" alt="Gist Logo" />
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Header;
