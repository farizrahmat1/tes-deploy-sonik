import * as React from "react";
// import { DataGrid } from "@mui/x-data-grid";
import "./table.scss";
// import PowerOutlinedIcon from "@mui/icons-material/PowerOutlined";
// import PowerOffOutlinedIcon from "@mui/icons-material/PowerOffOutlined";
// import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export function DataTable() {
  const [chargingStation, setChargingStation] = React.useState([]);

  useEffect(() => {
    const fetchDataCS = async () => {
      try {
        const res = await axios.get("http://localhost:8800/cs");
        setChargingStation(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchDataCS();
  }, []);

  const handleDelete = async (ID) => {
    try {
      await axios.delete(`http://localhost:8800/cs/${ID}`);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <TableContainer component={Paper}>
      <button className="addHome">
        <Link to="/addcs" style={{ color: "inherit", textDecoration: "none" }}>
          <AddCircleOutlineOutlinedIcon/>
        </Link>
      </button>
      <Table
        sx={{ minWidth: 650 }}
        aria-label="simple table"
        className="tableCs"
      >
        <TableHead>
          <TableRow>
            <StyledTableCell>No</StyledTableCell>
            <StyledTableCell align="left">Name</StyledTableCell>
            <StyledTableCell align="left">City</StyledTableCell>
            <StyledTableCell align="center">Status</StyledTableCell>
            <StyledTableCell align="center">Action</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {chargingStation.map((row, index) => (
            <StyledTableRow>
              <TableCell component="th" scope="row">
                {index + 1}
              </TableCell>
              <TableCell align="left">{row.NAME}</TableCell>
              <TableCell align="left">{row.CITY}</TableCell>
              <TableCell align="center">
                <span className={`status ${row.status}`}>
                  {row.OVERALL_STATUS}
                </span>
              </TableCell>
              <TableCell align="center">
                <button className="delete" onClick={() => handleDelete(row.ID)}>
                  <DeleteOutlineOutlinedIcon />
                </button>
                <button className="update">
                  <Link
                    to={`/update/${row.ID}`}
                    style={{ color: "inherit", textDecoration: "none" }}
                  >
                    <ModeEditOutlineOutlinedIcon />
                  </Link>
                </button>
              </TableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default DataTable;
