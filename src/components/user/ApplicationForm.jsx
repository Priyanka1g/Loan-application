import React from "react";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
const axios = require("axios");

export default function ApplicationForm() {
  const [applicationData, setApplicationData] = useState({
    income: "",
    cibil: "",
    assets: "",
    purpose: "",
    loan_amount: "",
    mortage:"",
    duration:""
  });

  const [agree, setAgree] = useState(false);

  const handleChange = (e) => {
    setApplicationData({
      ...applicationData,
      [e.target.name]: e.target.value,
    });
  };
  const handleCheck=e=>{
    setAgree(!agree)
  }
  const handleSubmit=(event) => {
    event.preventDefault();
    var data={
        user_income:parseInt(applicationData.income),
        cibil_score: parseInt(applicationData.cibil),
        user_assets: applicationData.assets,
        loan_purpose: applicationData.purpose,
        loan_amount: parseInt(applicationData.loan_amount),
        mortage:applicationData.mortage,
        duration: parseFloat(applicationData.duration)
    }
    console.log(JSON.stringify(data));
    axios({
      method: "post",
      // url: "http://localhost:8080/addUser"  url to add data to database,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      data: JSON.stringify(data),
      success: window.alert("Added Successfully"),
    });
 }

  const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText("#011638"),
    backgroundColor: "#011638e0",
    marginTop: "30px",
    "&:hover": {
      backgroundColor: "#011638",
    },
  }));
  return (
    <>
      <div className="header">
        <p>Navbar component here</p>
      </div>
      <div className="content">
        <div className="loginForm"  style={{width:"50vw", alignContent: "center" }}>
          <h2 style={{ textAlign: "center" }}>
            APPLICATION FORM
          </h2>
          <div className="form" style={{padding:"10px 40px"}}>
            <form className="login"
                onSubmit={handleSubmit}
            >
              <TextField
                required
                id="standard-required"
                name="income"
                label="Your Annual income"
                variant="standard"
                value={applicationData.income}
                onChange={handleChange}
              />
              <TextField
                required
                id="standard-required"
                name="cibil"
                label="Your CIBIL Score"
                variant="standard"
                value={applicationData.cibil}
                onChange={handleChange}
              />
              <TextField
                required
                id="standard-required"
                name="assets"
                label="Assets"
                variant="standard"
                value={applicationData.assets}
                onChange={handleChange}
              />
              <TextField
                required
                id="standard-required"
                name="purpose"
                label="Purpose of loan"
                variant="standard"
                value={applicationData.type}
                onChange={handleChange}
              />
            <TextField
                required
                id="standard-requried"
                name="loan_amount"
                label="Loan Amount"
                variant="standard"
                value={applicationData.loan_amount}
                onChange={handleChange}
              />
              <TextField
                id="standard-required"
                name="mortage"
                label="Mortages"
                variant="standard"
                value={applicationData.mortage}
                onChange={handleChange}
              />
              <TextField
                required
                id="standard-required"
                name="duration"
                label="Loan Duration"
                variant="standard"
                value={applicationData.duration}
                onChange={handleChange}
              />
              <div style={{color: "#6b5c5b", marginTop:"10px"}}>
                  <input type="checkbox" onClick={handleCheck} />I have read and accept <a href="#">Term and Conditions</a></div>
              <ColorButton disabled={!agree} variant="contained" type="submit">SUBMIT</ColorButton>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
