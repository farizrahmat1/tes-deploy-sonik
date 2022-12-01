import React from "react";
import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./add.css";

const AddCustomer = () => {
  const [customer, setCustomer] = useState({
    NAME: " ",
    ID_TAG: " ",
    EMAIL: " ",
    KTP: " ",
  });

  const [error, setError] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setCustomer((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8800/customer", customer);
      navigate("/customer");
    } catch (err) {
      console.log(err);
      setError(true);
    }
  };

  return (
    <div>
      <div className="form">
        <h1>Add New Customer</h1>
        <input
          type="text"
          placeholder="Customer Name"
          name="NAME"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="ID Tag Customer"
          name="ID_TAG"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Customer Email"
          name="EMAIL"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Customer KTP ID"
          name="KTP"
          onChange={handleChange}
        />
        <button className="add" onClick={handleClick}>
          Add
        </button>
        {error && "Something went wrong!"}
        <Link to="/customer">See all Customer</Link>
      </div>
    </div>
  );
};

export default AddCustomer;
