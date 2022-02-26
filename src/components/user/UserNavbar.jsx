import React from "react";
import { Nav, NavLink, Bars, NavMenu, NavBtn} from "./NavElements";
import Button from "@mui/material/Button";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to='/home'>
         <h1>QuickLoan</h1>
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to='/home' activeStyle>
            HOME
          </NavLink>
          <NavLink to='/applyloan' activeStyle>
            APPLY FOR LOAN
          </NavLink>
        </NavMenu>
        <NavBtn>
          <a href='/applyloan' style={{"textDecoration":"none"}}><Button variant="contained">LogOut</Button></a>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;
