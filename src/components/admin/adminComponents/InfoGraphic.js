import { NavLink as Link } from "react-router-dom";
import classes from "./InfoGraphic.module.css";
import Button from "@mui/material/Button";

function InfoGraphic() {
  const style1={
    "background-image":"url('https://images.unsplash.com/photo-1579389083078-4e7018379f7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')",
    height:"100vh",
    "background-size":"cover",
    "margin-top":"-10px",
    "font-weight":"bold"
  }
  const style2={
    "background-color":"rgba(0,0,0,0.7)",
    height:"100vh",
    
  }
  return (
    <>
      <div style={style1} >
        <div style={style2}>
        <div className={classes.div1}>
        <p style={{ fontSize: "2em" ,"letter-spacing": "5px","fontFamily":"lato"}}>Welcome To Admin Home Page</p>
        <p style={{ fontSize: "1.2em" }}>You Have Goy Some Loan applications to review</p>
        <Button variant="contained" color="success">
    <Link to="/admin/requests">Pending Loan Application</Link>
</Button>
        </div>
        </div>
      </div>
    </>
  );
}

export default InfoGraphic;