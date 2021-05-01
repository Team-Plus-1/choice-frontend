import React, { useState, useEffect } from "react";
import { Link, Router } from "react-router-dom";
import "./Navbar.css";
import directions from "../images/directions.svg";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar_container">
          <Link
            to="/"
            className="navbar_logo"
            onClick={closeMobileMenu}
            smooth={true}
            duration={750}
          >
            Choice
          </Link>
          <div className="menu_icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav_menu active" : "nav_menu"}>
            <li className="nav_item">
              <Link
                to="/"
                className="nav_links"
                onClick={closeMobileMenu}
                smooth={true}
                duration={600}
              >
                Home
              </Link>
            </li>
            <li className="nav_item">
              <Link
                to="/report"
                className="nav_links"
                onClick={closeMobileMenu}
                smooth={true}
                duration={700}
              >
                Report URL
              </Link>
            </li>
            <li className="nav_item">
              <Link
                to="/profile"
                className="nav_links"
                onClick={closeMobileMenu}
                smooth={true}
                duration={1000}
              >
                Profile
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
