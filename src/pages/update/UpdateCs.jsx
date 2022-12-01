import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";

const UpdateCs = () => {
  const [NAME, setName] = useState("");
  const [CHARGE_BOX_PK, setChargeBoxPK] = useState("");
  const [CITY, setCity] = useState("");
  const [OVERALL_STATUS, setOverallStatus] = useState("");
  const [DATE_CREATED, setDateCreated] = useState("");
  const [DATE_MODIFIED, SetDateModified] = useState("");

  useEffect(() => {
    getCs();
  }, []);

  const [chargingStation, setChargingStation] = useState({
    NAME: " ",
    CHARGE_BOX_PK: null,
    CITY: null,
    OVERALL_STATUS: null,
  });
  const navigate = useNavigate();
  const { id } = useParams();

  const [error, setError] = useState(false);
  const location = useLocation();

  const csId = location.pathname.split("/")[2];

  // const handleChange = (e) => {
  //   setChargingStation((prev) => ({
  //     ...prev,
  //     [e.target.name]: e.target.value,
  //   }));
  // };

  const handleChange = (e) => {
    // setForm({...form, [e.target.name] : e.target.value});
    setChargingStation((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`http://localhost:8800/cs/${csId}`, chargingStation);
      navigate("/chargingstation");
    } catch (err) {
      console.log(err);
      setError(true);
    }
  };
  const getCs = async () => {
    const response = await axios.get(`http://localhost:8800/cs/${csId}`, chargingStation);
    setChargingStation(response.data);
    // setName(response.data.NAME);
    // setChargeBoxPK(response.data.CHARGE_BOX_PK);
    // setCity(response.data.CITY);
    // setOverallStatus(response.data.OVERALL_STATUS);
  };

  return (
    <div className="form">
      <h1>Update Charging Station</h1>
      <input
        type="text"
        placeholder="Charging Station Name"
        value={chargingStation.NAME}
        name="NAME"
        onChange={handleChange}
      />
      <input
        type="number"
        placeholder="Charge Box Key"
        name="CHARGE_BOX_PK"
        value={chargingStation.CHARGE_BOX_PK}
        onChange={handleChange}
      />
      <input
        type="number"
        placeholder="City"
        name="CITY"
        value={chargingStation.CITY}
        onChange={handleChange}
      />
      <input
        type="number"
        placeholder="Overall Status"
        name="OVERALL_STATUS"
        value={chargingStation.OVERALL_STATUS}
        onChange={handleChange}
      />
      <button className="updatePageButton" onClick={handleClick}>
        Update
      </button>
      {error && "Something went wrong!"}
      <Link to="/chargingstation">See all Charging Station</Link>
    </div>
  );
};

export default UpdateCs;
