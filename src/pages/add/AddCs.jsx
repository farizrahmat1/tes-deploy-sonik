import React from "react";
import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./add.css";

const AddCs = () => {
  const [chargingStation, setChargingStation] = useState({
    NAME: " ",
    CHARGE_BOX_PK: "",
    CITY: "",
    OVERALL_STATUS: "",
  });

  const [error, setError] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setChargingStation((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8800/cs", chargingStation);
      navigate("/chargingstation");
    } catch (err) {
      console.log(err);
      setError(true);
    }
  };

  return (
    <div>
      <div className="form">
        <h1>Add New Charging Station</h1>
        <input
          type="text"
          placeholder="Charging Station Name"
          name="NAME"
          onChange={handleChange}
        />
        <input
          type="number"
          placeholder="Charge Box Key"
          name="CHARGE_BOX_PK"
          onChange={handleChange}
        />
        <input
          type="number"
          placeholder="City"
          name="CITY"
          onChange={handleChange}
        />
        <input
          type="number"
          placeholder="Overall Status"
          name="OVERALL_STATUS"
          onChange={handleChange}
        />
        <button className="add" onClick={handleClick}>
          Add
        </button>
        {error && "Something went wrong!"}
        <span className="seeallcs">
          <Link to="/chargingstation">See all Charging Station</Link>
        </span>
      </div>
    </div>
  );
};

export default AddCs;
