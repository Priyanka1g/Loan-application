import React from "react";
import Navbar from "../user/UserNavbar";
import classes from "./userinfo.module.css";
import Useritem from "./Useritem";
// import bootstrap from "bootstrap";

export default function Userinfo() {
  return (
    <div>
      <Navbar></Navbar>
      <div className={classes.body}>
        <h1
          style={{
            textAlign: "center",
            margin: "20px",
            fontFamily: "lato",
            color: "white",
          }}
        >
          User Info
        </h1>
        <Useritem id="cust_id" id1="1010190" />
        <Useritem id="name" id1="pratmesh" />
        <Useritem id="loantype" id1="home loan" />
        <div className="container my-5" style={{ textAlign: "center" }}>
          <button
            style={{ marginRight: "20px" }}
            type="button"
            class="btn btn-dark"
          >
            Accept
          </button>
          <button type="button" class="btn btn-dark">
            Reject
          </button>
        </div>
      </div>
    </div>
  );
}
