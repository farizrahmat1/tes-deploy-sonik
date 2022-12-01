import "./sidebar.scss";
import React, { useState } from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import EvStationIcon from "@mui/icons-material/EvStation";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import InfoIcon from "@mui/icons-material/Info";
import AssessmentIcon from "@mui/icons-material/Assessment";
import GroupsIcon from "@mui/icons-material/Groups";
import { Link } from "react-router-dom";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import Sonik from "../img/logo-sonik/sonik.png";

const Sidebar = ( ) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const menuItem = [
    {
      path: "/",
      name: "Dashboard",
      icon: <DashboardIcon className="icon" />,
    },
    {
      path: "/chargingstation",
      name: "Charging Station",
      icon: <EvStationIcon className="icon" />,
    },
    {
      path: "/transaction",
      name: "Transaction",
      icon: <ShowChartIcon className="icon" />,
    },
    {
      path: "/",
      name: "Warning",
      icon: <WarningAmberIcon className="icon" />,
    },
    {
      path: "/activity",
      name: "Activity",
      icon: <InfoIcon className="icon" />,
    },
    {
      path: "/report",
      name: "Report",
      icon: <AssessmentIcon className="icon" />,
    },
    {
      path: "/customer",
      name: "Customer",
      icon: <GroupsIcon className="icon" />,
    },
  ];

  return (
    <div className="container">
      <div style={{ width: isOpen ? "200px" : "50px" }} className="sidebar">
        <div className="top_section">
          <h1 style={{ display: isOpen ? "block" : "none" }} className="logo">
            <Link to="/">
            <img src={Sonik} alt="logo" />
            </Link>
          </h1>
          <div style={{ marginLeft: isOpen ? "50px" : "0px" }} className="bars">
            <MenuOutlinedIcon onClick={toggle} />
          </div>
        </div>
        {menuItem.map((item, index) => (
          <Link
            to={item.path}
            key={index}
            className="link"
            activeclassname="active"
          >
            <div className="icon">{item.icon}</div>
            <div
              style={{ display: isOpen ? "block" : "none" }}
              className="link_text"
            >
              {item.name}
            </div>
          </Link>
        ))}
      </div>
      {/* <main>{children}</main> */}
    </div>
    );
  };

export default Sidebar;
