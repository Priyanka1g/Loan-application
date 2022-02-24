import React from "react";
import { Nav, NavLink, Bars, NavMenu } from "./NavElements";
<<<<<<< HEAD
=======
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
>>>>>>> 7cf8d751edc5d472585925dfd7dcc5068dd5f726

const Navbar = () => {
  return (
    <>
      <Nav>
<<<<<<< HEAD
        <NavLink to="/" activeStyle>
          {/* here you can add logo */}
          <h2>QuickLoan</h2>
=======
        <NavLink to="/" activeStyle style={{align:"left"}}>
          {/* here you can add logo */}
          <h2 >QuickLoan</h2>
>>>>>>> 7cf8d751edc5d472585925dfd7dcc5068dd5f726
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to="/home" activeStyle>
            HOME
          </NavLink>
<<<<<<< HEAD
          <NavLink to="/applicaiton" activeStyle>
            APPLY FOR LOAN
          </NavLink>
          <NavLink to="/profile">MY PROFILE</NavLink>
=======
          <NavLink to="/info" activeStyle>
            INFOGRAPHIC
          </NavLink>
          <NavLink to="/status" activeStyle>
              STATUS
          </NavLink>
          <NavLink to="/profile"><AccountCircleIcon sx={{ fontSize: 40 }}/></NavLink>
>>>>>>> 7cf8d751edc5d472585925dfd7dcc5068dd5f726
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;