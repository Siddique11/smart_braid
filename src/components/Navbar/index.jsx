import React from "react";
import {
  Bars,
  Nav,
  Navbtn,
  NavBtnLink,
  NavLink,
  NavMenu,
} from "./NavbarElement";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to="/">
          <img
            className="logo"
            src="https://cdn.shopify.com/s/files/1/0620/1072/0476/files/logo_120x@2x.jpg?v=1642541079"
            alt="Logo"
          />
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink className="hover-effect" to="/about">
            About
          </NavLink>
          <NavLink className="hover-effect" to="/services">
            Services
          </NavLink>
          <NavLink className="hover-effect" to="/contact-us">
            Contact Us
          </NavLink>
          <NavLink className="hover-effect" to="/sign-up">
            Sign Up
          </NavLink>
        </NavMenu>
        <Navbtn>
          <NavBtnLink to="/signin">Sign In</NavBtnLink>
        </Navbtn>
      </Nav>
    </>
  );
};

export default Navbar;
