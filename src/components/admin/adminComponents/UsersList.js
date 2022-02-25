import { useEffect, useState } from "react";
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

const columns = [
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
    id: "loanAmount",
    label: "Loan Amount",
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

function createData(name, email, loanAmount, loanType) {
  return { name, email, loanAmount, loanType };
}

const rows = [
  createData("Utkarsh", "utkarsh@gmail.com", 100000, "Home Loan"),
  createData("Tarun", "tarun@gmail.com", 200000, "Home Loan"),
  createData("Utkarsh", "utkarsh@gmail.com", 100000, "Home Loan"),
  createData("Tarun", "tarun@gmail.com", 200000, "Home Loan"),
  createData("Utkarsh", "utkarsh@gmail.com", 100000, "Home Loan"),
  createData("Tarun", "tarun@gmail.com", 200000, "Home Loan"),
  createData("Utkarsh", "utkarsh@gmail.com", 100000, "Home Loan"),
  createData("Tarun", "tarun@gmail.com", 200000, "Home Loan"),
  createData("Utkarsh", "utkarsh@gmail.com", 100000, "Home Loan"),
  createData("Tarun", "tarun@gmail.com", 200000, "Home Loan"),
  createData("Utkarsh", "utkarsh@gmail.com", 100000, "Home Loan"),
  createData("Tarun", "tarun@gmail.com", 200000, "Home Loan"),
  createData("Utkarsh", "utkarsh@gmail.com", 100000, "Home Loan"),
  createData("Tarun", "tarun@gmail.com", 200000, "Home Loan"),
  createData("Utkarsh", "utkarsh@gmail.com", 100000, "Home Loan"),
  createData("Tarun", "tarun@gmail.com", 200000, "Home Loan"),
  createData("Utkarsh", "utkarsh@gmail.com", 100000, "Home Loan"),
  createData("Tarun", "tarun@gmail.com", 200000, "Home Loan"),
  createData("Utkarsh", "utkarsh@gmail.com", 100000, "Home Loan"),
  createData("Tarun", "tarun@gmail.com", 200000, "Home Loan"),
  createData("Utkarsh", "utkarsh@gmail.com", 100000, "Home Loan"),
  createData("Tarun", "tarun@gmail.com", 200000, "Home Loan"),
  createData("Utkarsh", "utkarsh@gmail.com", 100000, "Home Loan"),
  createData("Tarun", "tarun@gmail.com", 200000, "Home Loan"),
  createData("Utkarsh", "utkarsh@gmail.com", 100000, "Home Loan"),
  createData("Tarun", "tarun@gmail.com", 200000, "Home Loan"),
  createData("Utkarsh", "utkarsh@gmail.com", 100000, "Home Loan"),
  createData("Tarun", "tarun@gmail.com", 200000, "Home Loan"),
  createData("Utkarsh", "utkarsh@gmail.com", 100000, "Home Loan"),
  createData("Tarun", "tarun@gmail.com", 200000, "Home Loan"),
  createData("Utkarsh", "utkarsh@gmail.com", 100000, "Home Loan"),
  createData("Tarun", "tarun@gmail.com", 200000, "Home Loan"),
  createData("Utkarsh", "utkarsh@gmail.com", 100000, "Home Loan"),
  createData("Tarun", "tarun@gmail.com", 200000, "Home Loan"),
  createData("Utkarsh", "utkarsh@gmail.com", 100000, "Home Loan"),
  createData("Tarun", "tarun@gmail.com", 200000, "Home Loan"),
  createData("Utkarsh", "utkarsh@gmail.com", 100000, "Home Loan"),
  createData("Tarun", "tarun@gmail.com", 200000, "Home Loan"),
  createData("Utkarsh", "utkarsh@gmail.com", 100000, "Home Loan"),
  createData("Tarun", "tarun@gmail.com", 200000, "Home Loan"),
  createData("Utkarsh", "utkarsh@gmail.com", 100000, "Home Loan"),
  createData("Tarun", "tarun@gmail.com", 200000, "Home Loan"),
  createData("Utkarsh", "utkarsh@gmail.com", 100000, "Home Loan"),
  createData("Tarun", "tarun@gmail.com", 200000, "Home Loan"),
  createData("Utkarsh", "utkarsh@gmail.com", 100000, "Home Loan"),
  createData("Tarun", "tarun@gmail.com", 200000, "Home Loan"),
  createData("Utkarsh", "utkarsh@gmail.com", 100000, "Home Loan"),
  createData("Tarun", "tarun@gmail.com", 200000, "Home Loan"),
  createData("Utkarsh", "utkarsh@gmail.com", 100000, "Home Loan"),
  createData("Tarun", "tarun@gmail.com", 200000, "Home Loan"),
];

export default function UsersList({ listName }) {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  
  return (
    <div className={classes.tableContainer}>
      <div
        className={classes.table}
        style={{ width: listName === "requests" ? "80%" : "70%" }}
      >
        <Paper
          sx={{
            overflow: "hidden",
            backgroundColor: "transparent",
            fontFamily: "Lato",
            // backgroundColor: "var(--light-blue)",
            // backgroundImage: "url(
            //   "https://www.transparenttextures.com/patterns/beige-paper.png"
            // )",
          }}
        >
          <TableContainer sx={{ maxHeight: 480, fontFamily: "Lato" }}>
            <Table
              stickyHeader
              aria-label="sticky table"
              sx={{ fontFamily: "Lato" }}
            >
              <TableHead sx={{ fontSize: 2, fontFamily: "Lato" }}>
                <TableRow>
                  <TableCell
                    sx={{
                      backgroundColor: "var(--blue)",
                      fontFamily: "Lato",
                      color: "whitesmoke",
                      fontSize: "20px",
                    }}
                    key="serialNo"
                    style={{ minWidth: 30 }}
                  >
                    S.No.
                  </TableCell>
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
                      Approve Loan
                    </TableCell>
                  )}
                </TableRow>
              </TableHead>
              <TableBody>
                {rows
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row, index) => {
                    return (
                      <TableRow
                        hover
                        role="checkbox"
                        tabIndex={-1}
                        key={row.code}
                      >
                        <TableCell key={index}>{index + 1}</TableCell>
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
          <TablePagination
            sx={{
              backgroundColor: "var(--blue)",
              color: "whitesmoke",
              fontFamily: "Lato",
            }}
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      </div>
    </div>
  );
}
