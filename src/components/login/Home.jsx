import { Link } from 'react-router-dom'
import classes from "./home.module.css"
import React from 'react'
import Navbar from '../user/UserNavbar'

export default function () {
  return (
    <>
    <div className={classes.nav}>
        <p className={classes.icon}>Get Loan</p>
        <a href="/applyloan">Login as User</a> 
        <a href="/admin/requests">Login as Admin</a>  
    </div>
    {/* <div className={classes.con}>
       <div className={classes.user}>
       <Link className={classes.Link} to="/applyloan">User</Link>
       </div>
       <div className={classes.admin}>
       <Link className={classes.Link} to="/admin/requests">Admin</Link>
       </div>
    </div> */}
    </>
  )
}
