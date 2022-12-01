import "./chargingStation.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Widget from "../../components/widget/Widget";
import DataTable from "../../components/data table/DataTable";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

const CsMenu = () => {
  const [cs, setCS] = useState([]);

  useEffect(() => {
    const fetchDataCS = async () => {
      try {
        const res = await axios.get("http://localhost:8800/cs");
        setCS(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchDataCS();
  }, []);

  console.log(cs);

 

  return (
    <div className="cS">
      <Sidebar />
      <div className="cSContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="registeredCS" registeredcs={10} />
          <Widget type="connectedCS" connectedcs={9}/>
          <Widget type="activeCS" activecs={4}/>
          <Widget type="kwh-nolink" kwhdata={5000} />
        </div>
        <div className="table">
          <h3>Charging Station Status</h3>
        
          <DataTable />
        </div>
      </div>
    </div>
  );
};

export default CsMenu;
