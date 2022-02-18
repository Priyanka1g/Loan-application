import React from "react";
import { useState } from "react";
import MonetizationOnRoundedIcon from "@mui/icons-material/MonetizationOnRounded";
import EventNoteRoundedIcon from "@mui/icons-material/EventNoteRounded";
import CasesRoundedIcon from "@mui/icons-material/CasesRounded";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
const axios = require("axios");

export default function Home() {
  const [formData, setFormData] = useState({
    id: "",
    user_name: "",
    full_name: "",
    user_password: "",
    email: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    console.log(formData);
  };

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
        <p>Digital</p> <p>|</p> <p>Instant</p> <p>|</p> <p>Simple</p>
      </div>
      <div className="content">
        <div className="explanation">
          <div className="c1">
            <div className="icon">
              <MonetizationOnRoundedIcon
                style={{ height: "50px", width: "80px" }}
              />
            </div>
            <div className="cont">
              <p style={{ fontWeight: "bold" }}>GET LOANS IN THREE STEPS</p>
            </div>
          </div>
          <div className="c1">
            <div className="icon">
              <EventNoteRoundedIcon style={{ height: "50px", width: "80px" }} />
            </div>
            <div className="cont">
              <p style={{ fontWeight: "bold" }}>CONVENIENT PROCESS</p>
            </div>
          </div>
          <div className="c1">
            <div className="icon">
              <CasesRoundedIcon style={{ height: "50px", width: "80px" }} />
            </div>
            <div className="cont">
              <p style={{ fontWeight: "bold" }}>EXCLUSIVE BENEFITS</p>
            </div>
          </div>
        </div>
        <div className="loginForm">
          <p style={{ textAlign: "center", fontFamily: "cursive" }}>
            LET US BEGIN
          </p>
          <div className="form">
            <h4 style={{ color: "#003049", textAlign: "center" }}>
              Enter Customer Id and Password
            </h4>
            <form className="login"
                onSubmit={(event) => {
                    event.preventDefault();
                    var data={
                        user_id:parseInt(formData.id),
                        user_name:formData.user_name,
                        user_passward:formData.user_passward,
                        email:formData.email,
                        isAdmin:false
                    }
                    console.log(JSON.stringify(data));
                    axios({
                      method: "post",
                      url: "http://localhost:8080/addUser",
                      headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': '*',
                      },
                      data: JSON.stringify(data),
                      success: window.alert("Added Successfully"),
                    });
                    // window.location.href="http://localhost:3000"
                 }}
            >
              <TextField
                required
                id="standard-required"
                name="id"
                label="User ID"
                variant="standard"
                value={formData.id}
                onChange={handleChange}
              />
              <TextField
                required
                id="standard-required"
                name="user_name"
                label="Username"
                variant="standard"
                value={formData.user_name}
                onChange={handleChange}
              />
              <TextField
                required
                id="standard-required"
                name="full_name"
                label="Full Name"
                variant="standard"
                value={formData.full_name}
                onChange={handleChange}
              />
              <TextField
                required
                id="standard-required"
                name="email"
                label="Email"
                variant="standard"
                type="email"
                value={formData.email}
                onChange={handleChange}
              />
              <TextField
                id="standard-password-input"
                name="user_password"
                label="Password"
                type="password"
                autoComplete="current-password"
                variant="standard"
                value={formData.user_password}
                onChange={handleChange}
              />

              <div className="tc">
                <small>Let's Register for Loan</small>
              </div>
              <ColorButton variant="contained" type="submit">Register</ColorButton>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
