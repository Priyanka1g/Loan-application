import { Button } from "@mui/material";
import React from "react";
import { Nav, NavLink, Bars, NavMenu } from "./NavbarElements.js";
import { styled } from "@mui/material/styles";
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
          <NavLink to="/admin/home" activeStyle>
            Home
          </NavLink>
          <NavLink to="/admin/requests" activeStyle>
            Pending applications
          </NavLink>
          <NavLink to="/admin/borrowers">Borrowers</NavLink>
          <NavLink to="/admin/requests" activeStyle>
            <Button sx={{}} variant="outlined" onClick={()=>{
              window.location.href="http://localhost:3000/admin/requests"
            }}>
              Logout
            </Button>
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
