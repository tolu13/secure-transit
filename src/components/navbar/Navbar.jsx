import React, { useState } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const Menu = ({closeMenu}) => (
  <>
    <Link to="/dashboard" className="scr-items" onClick={closeMenu}>Dashboard</Link>
    <Link to="/deposit" className="scr-items" onClick={closeMenu}>Deposit</Link>
    <Link to="/transfer" className="scr-items" onClick={closeMenu}>Transfer</Link>
    <Link to="/invest" className="scr-items" onClick={closeMenu}>Invest</Link>
  </>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const closeMenu = () => {
    setToggleMenu(false);
  }
  return (
    <nav className="scr__navbar">
      <div className="scr__navbar-links">
        <div className="scr__navbar-links_logo">
          <Link to="/" className="scr-navbar-item">
            SecureTransit
          </Link>
        </div>
        <div className="scr-navbar-links_container">
          <Menu closeMenu={closeMenu} />
        </div>
        <div className="scr-navbar-sign">
          <p>Sign in</p>
          <button type="button">Sign Up</button>
        </div>

        <div className="scr__navbar-menu">
          {toggleMenu ? (
            <FontAwesomeIcon
              icon={faTimes}
              color="#fff"
              size="lg"
              onClick={() => setToggleMenu(false)}
            />
          ) : (
            <FontAwesomeIcon
              icon={faBars}
              color="#fff"
              size="lg"
              onClick={() => setToggleMenu(true)}
            />
          )}
          {toggleMenu && (
            <div className="scr__navbar-menu_container scale-up-center">
              <div className="scr__navbar-menu_container-links">
                <Menu closeMenu={closeMenu}  className="stp"/>
                <div className="scr__navbar-menu_container-links-sign">
                  <p>Sign in</p>
                  <button type="button">Sign Up</button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
