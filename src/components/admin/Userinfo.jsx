import React, { useEffect } from "react";
import Useritem from "./Useritem";
import Navbar from "../user/UserNavbar";
import classes from "./userinfo.module.css";
// import bootstrap from "bootstrap";

const axios = require("axios");
export default function Userinfo(props) {
  useEffect(() => {
    let rows = [];
    axios({
      method: "GET",
      url: "http://localhost:8080/loandetails/"+props.id,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    }).then((data)=>{
      console.log(data)
    })

  },[]);

  return (
    <div>
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
        <h1>{props.id}</h1>
        <button
          onClick={() => {
            props.clicked(true);
            
          }}
        >
          X
        </button>
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
