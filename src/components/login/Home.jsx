import { Link } from 'react-router-dom'
import classes from "./home.module.css"
import React from 'react'

export default function () {
  return (
    <div>
       <div className={classes.user}>
       <Link className={classes.Link} to="/applyloan">User</Link>
       </div>
       <div className={classes.user}>
       <Link className={classes.Link} to="/admin/requests">Admin</Link>
       </div>
    </div>
  )
}
