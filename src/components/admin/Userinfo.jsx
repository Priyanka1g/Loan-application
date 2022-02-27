import React, { useEffect, useState } from "react";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import classes from "./userinfo.module.css";
// import bootstrap from "bootstrap";

const axios = require("axios");
export default function Userinfo(props) {
  const [customer,setCustomer]=useState({})
  const [user,setUser]=useState({})
  const [isApproved,setApporved]=useState(0)

  useEffect(() => {
    console.log("id-",props.id)
    axios({
      method: "GET",
      url: "http://localhost:8080/loandetails/"+props.id,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    }).then((data)=>{
      console.log("--loan data--")
      setCustomer(data.data)
      console.log(customer)
    })

    axios({
      method: "GET",
      url: "http://localhost:8080/getuser/"+props.id,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    }).then((result)=>{
      
      console.log(result.data)
      setUser(result.data)
      })

  },[]);

  useEffect(()=>{
    axios({
      method: "POST",
      url: "http://localhost:8080/approved/"+isApproved,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    })
  },[isApproved])

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

   
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Full Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>User Income</TableCell>
                <TableCell>Loan Amount</TableCell>
                <TableCell>Loan Purpose</TableCell>
                <TableCell>Duration in Years</TableCell>
                <TableCell>Mortage</TableCell>
                <TableCell>User Assests</TableCell>
                <TableCell>Cibil Score</TableCell>
                <TableCell>isApproved</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
                <TableRow>
                  <TableCell>{user.user_name}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{customer.user_income}</TableCell>
                  <TableCell>{customer.loan_amount}</TableCell>
                  <TableCell>{customer.loan_purpose}</TableCell>
                  <TableCell>{customer.duration}</TableCell>
                  <TableCell>{customer.mortage}</TableCell>
                  <TableCell>{customer.user_assets}</TableCell>
                  <TableCell>{customer.cibil_score}</TableCell>
                  <TableCell>{customer.approved}</TableCell>
                </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
                <button onClick={setApporved(1)}>
            Accept
          </button>
          <button onClick={setApporved(-1)}>
            Reject
          </button>
        </div>
      </div>
  );
}
