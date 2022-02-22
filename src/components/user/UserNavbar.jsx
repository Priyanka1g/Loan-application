import React from "react";
import { Nav, NavLink, Bars, NavMenu } from "./NavElements";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to="/" activeStyle style={{align:"left"}}>
          {/* here you can add logo */}
          <h2 >QuickLoan</h2>
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to="/home" activeStyle>
            HOME
          </NavLink>
          <NavLink to="/info" activeStyle>
            INFOGRAPHIC
          </NavLink>
          <NavLink to="/status" activeStyle>
              STATUS
          </NavLink>
          <NavLink to="/profile"><AccountCircleIcon sx={{ fontSize: 40 }}/></NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;