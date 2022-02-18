import React from "react";
import { Nav, NavLink, Bars, NavMenu } from "./NavbarElements.js";
import classes from "./Navbar.module.css";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to="/" activeStyle>
          {/* here you can add logo */}
          <h2>QuickLoan</h2>
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to="/info" activeStyle>
            Infographics
          </NavLink>
          <NavLink to="/requests" activeStyle>
            Pending applications
          </NavLink>
          <NavLink to="/borrowers">Borrowers</NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
