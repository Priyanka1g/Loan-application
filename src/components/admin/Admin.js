import { BrowserRouter, Route, Routes } from "react-router-dom";
import InfoGraphic from "./adminComponents/InfoGraphic";
import UsersList from "./adminComponents/UsersList";
import Navbar from "./Navbar";
import classes from "./index.module.css";
import { useEffect, useState } from "react";
import axios from "axios";

function Admin() {
  const [loanApplications,setLoanApplications]=useState([]);
  // const loanCtx = useContext(LoanContext);
  const [demo,setDemo]=useState();

  useEffect(() => {
    let rows = [{
      serialNo:2,
      name: "Tarcvbnmun",
      email:"ghj@fgh.com",
      cibilScore:34,
      loanType:"Car Loan"
    }];
    axios({
      method: "GET",
      url: "http://localhost:8080/getallUserDetails",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    }).then((res) => {
      res.data.map((loan,index)=>{
          axios({
            method: "GET",
            url: "http://localhost:8080/getuser/"+loan.customer_id,
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              "Access-Control-Allow-Origin": "*",
            },
          }).then((result)=>{
            rows.push({ 
              serialNo: index + 1,
              name: result.data.user_name,
              email: result.data.email,
              cibilScore: loan.cibil_score,
              loanType: loan.loan_purpose
            })
          })
          if(index===res.data.length-1){
              setLoanApplications(rows);
              setDemo(1);
              console.log("rows",rows);
          }
      })
    // setLoanApplications(rows);
    });
    console.log("loanApplications",loanApplications);
  },[]);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="info" element={<InfoGraphic />} />
        <Route path="requests" element={<UsersList listName="requests" loanApplications={loanApplications}/>} />
        <Route path="borrowers" element={<UsersList listName="borrowers" loanApplications={loanApplications}/>} />
      </Routes>
    </>
  );
}

export default Admin;
