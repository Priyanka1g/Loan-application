import React from "react";
import { Nav, NavLink, Bars, NavMenu, NavBtn} from "./NavElements";
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
          <NavLink to='/contact' activeStyle>
            STATUS
          </NavLink>
        </NavMenu>
        <NavBtn>
          <NavLink to='/profile'><AccountCircleIcon sx={{ fontSize: 40 }}/></NavLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;
