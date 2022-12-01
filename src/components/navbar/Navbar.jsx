import "./navbar.scss";
import React from "react";
// import SearchIcon from "@mui/icons-material/Search";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";

export const Navbar = () => {
  // const [searchInput, setSearchInput] = useState("");

  // const handleChange = (e) => {
  //   e.preventDefault();
  //   setSearchInput(e.target.value);
  // };

  // if (searchInput.length > 0) {
  //   countries.filter((country) => {
  //     return country.name.match(searchInput);
  //   });
  // }
  return (
    <div className="navbar">
      <div className="wrapper">
        {/* <div className="search">
          <input
            type="text"
            placeholder="Search..."
            onChange={handleChange}
            value={searchInput}
          />
          <SearchIcon />
        </div> */}
        <div className="items">
          <div className="item">
            <DarkModeOutlinedIcon className="icon" />
          </div>
          <div className="item">
            <FullscreenExitOutlinedIcon className="icon" />
          </div>
          <div className="item">
            <NotificationsOutlinedIcon className="icon" />
            {/* <div className="counter"></div> */}
          </div>
          <div className="item">
            <ListOutlinedIcon className="icon" />
          </div>
          <div className="item">
            <img
              src="
              https://upload.wikimedia.org/wikipedia/commons/d/dd/Alt_Logo_BRIN.png"
              alt="logo"
              className="logo"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
