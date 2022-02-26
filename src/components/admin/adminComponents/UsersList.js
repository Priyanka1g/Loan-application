import { useEffect, useState, useContext } from "react";
import LoanContext from "../../../store/LoanContext.js";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Button from "@mui/material/Button";
import classes from "./UsersList.module.css";
import { ContactsOutlined } from "@mui/icons-material";

const axios = require("axios");

const columns = [
  {
    id: "serialNo",
    label: "S.No",
    minWidth: 80,
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "name",
    label: "Name",
    minWidth: 80,
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "email",
    label: "Email",
    minWidth: 80,
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "cibilScore",
    label: "Cibil Score",
    minWidth: 80,
    align: "right",
    format: (value) => value.toFixed(2),
  },
  {
    id: "loanType",
    label: "Loan Type",
    minWidth: 80,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
];


export default function UsersList({ listName,loanApplications }) {
 
  return (
    <div className={classes.tableContainer}>
      <div
        className={classes.table}
        style={{ width: listName === "requests" ? "80%" : "70%" }}
      >
        <div style={{color:"red"}}> {loanApplications.map((loan)=>{
            return <div>{loan.loanType}</div>
        })}
        </div> 
        <Paper
          sx={{
            overflow: "hidden",
            backgroundColor: "transparent",
            fontFamily: "Lato",
          }}
        >
          <TableContainer sx={{ maxHeight: 480, fontFamily: "Lato" }}>
            <Table
              stickyHeader
              aria-label="sticky table"
              sx={{ fontFamily: "Lato" }}
            >
              {/* <TableHead sx={{ fontSize: 2, fontFamily: "Lato" }}>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell
                      sx={{
                        backgroundColor: "var(--blue)",
                        fontFamily: "Lato",
                        color: "whitesmoke",
                        fontSize: "20px",
                      }}
                      key={column.id}
                      align={column.align}
                      style={{ minWidth: column.minWidth }}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                  {listName === "requests" && (
                    <TableCell
                      sx={{
                        backgroundColor: "var(--blue)",
                        fontFamily: "Lato",
                        color: "whitesmoke",
                        fontSize: "20px",
                      }}
                      key="approveLoan"
                      align="center"
                      style={{ minWidth: 100 }}
                    >
                      View Details
                    </TableCell>
                  )}
                </TableRow> */}
              {/* </TableHead> */}
              <TableBody>
                {loanApplications
                  .map((row, index) => {
                    return (
                      <TableRow
                        hover
                        role="checkbox"
                        tabIndex={-1}
                        key={row.serialNo}
                      >
                        {/* <TableCell key={index}>{index + 1}</TableCell> */}
                        {columns.map((column) => {
                          const value = row[column.id];
                          return (
                            <TableCell
                              key={column.id}
                              align={column.align}
                              sx={{ fontFamily: "Lato", fontWeight: "800" }}
                            >
                              {column.format && typeof value === "number"
                                ? column.format(value)
                                : value}
                            </TableCell>
                          );
                        })}
                        {listName === "requests" && (
                          <TableCell key="approveLoan" align="center">
                            <div className={classes.actionButtons}>
                              <Button
                                variant="contained"
                                sx={{ backgroundColor: "var(--blue)" }}
                              >
                                View
                              </Button>
                            </div>
                          </TableCell>
                        )}
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </TableContainer>
          {console.log("loan",loanApplications)};
          {/* <TablePagination
            sx={{
              backgroundColor: "var(--blue)",
              color: "whitesmoke",
              fontFamily: "Lato",
            }}
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={loanApplications.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          /> */}
        </Paper>
      </div>
    </div>
  );
}
