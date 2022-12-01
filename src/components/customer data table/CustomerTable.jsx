import "./customertable.scss";
import * as React from "react";
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
import TablePagination from "@mui/material/TablePagination";
import SearchBar from "@mkyy/mui-search-bar";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import TextField from "@mui/material/TextField";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    fontWeight: 600,
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

export function CustomerTable() {
  const [customer, setCustomer] = React.useState([]);

  useEffect(() => {
    const fetchDataCustomer = async () => {
      try {
        const res = await axios.get("http://localhost:8800/customer");
        setCustomer(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchDataCustomer();
  }, []);

  // console.log(customer);

  const handleDelete = async (ID) => {
    try {
      await axios.delete(`http://localhost:8800/customer/${ID}`);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  const [query, setQuery] = React.useState(customer);
  const keys = ["NAME", "ID_TAG"];
  const search = (customer) => {
    return customer.filter((row) =>
      keys.some((key) => row[key].toLowerCase().includes(query))
    );
  };

  const [rows, setRows] = React.useState(customer);
  const [searched, setSearched] = React.useState("");

  const requestSearch = (searchedVal) => {
    const filteredRows = customer.filter((row) => {
      return row.NAME.toLowerCase().includes(searchedVal.toLowerCase());
    });
    console.log(filteredRows);
    setRows(filteredRows);
    setCustomer(filteredRows);
  };

  const cancelSearch = () => {
    setSearched("");
    requestSearch(searched);
  };

  const [page, setPage] = React.useState(2);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      {/* <input
        value={search(customer)}
        className="search"
        placeholder="Search..."
        onChange={(e) => setQuery(e.target.value.toLowerCase())}
      /> */}
      {/* {data={search(customer)} } */}
      <SearchBar
        value={searched}
        onChange={(searchVal) => requestSearch(searchVal)}
        onSearch={() => cancelSearch()}
        style={{
          marginTop: "10px",
          border: "1px solid black",
          marginLeft: "10px",
        }}
      />
      {/* <div className="search">
        <TextField
          id="outlined-basic"
          onChange={inputHandler}
          variant="outlined"
          fullWidth
          label="Search"
        />
      </div> */}
      <TableContainer component={Paper}>
        <button className="addCustomer">
          <Link
            to="/addcustomer"
            style={{ color: "inherit", textDecoration: "none" }}
          >
            <AddCircleOutlineOutlinedIcon />
          </Link>
        </button>
        <Table
          sx={{ minWidth: 650 }}
          stickyHeader
          aria-label="sticky table"
          className="tableCustomer"
          // input={inputText}
        >
          <TableHead>
            <TableRow>
              <StyledTableCell>No</StyledTableCell>
              <StyledTableCell align="left">Name</StyledTableCell>
              <StyledTableCell align="left">ID Tag</StyledTableCell>
              <StyledTableCell align="center">Email</StyledTableCell>
              <StyledTableCell align="center">KTP</StyledTableCell>
              <StyledTableCell align="center">Action</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody className="table">
            {customer.map((row, index) => (
              <React.Fragment>
                <StyledTableRow>
                  <TableCell component="th" scope="row" key={customer.ID}>
                    {index + 1}
                  </TableCell>
                  <TableCell align="left">{row.NAME}</TableCell>
                  <TableCell align="left">{row.ID_TAG}</TableCell>
                  <TableCell align="center">{row.EMAIL}</TableCell>
                  <TableCell align="center">{row.KTP}</TableCell>
                  <TableCell align="center">
                    <button
                      className="delete"
                      onClick={() => handleDelete(row.ID)}
                    >
                      <DeleteOutlineOutlinedIcon />
                    </button>
                    <button className="update">
                      <Link
                        to={`/updatecustomer/${row.ID}`}
                        style={{ color: "inherit", textDecoration: "none" }}
                      >
                        <ModeEditOutlineOutlinedIcon />
                      </Link>
                    </button>
                  </TableCell>
                </StyledTableRow>
              </React.Fragment>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 20, 50]}
        component="div"
        count={customer.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}

export default CustomerTable;
