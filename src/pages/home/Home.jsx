import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import Widget from "../../components/widget/Widget";
// import {GoogleMap, useLoadScript, Marker} from "@react-google-maps/api";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
// import "leaflet/dist/leaflet.css";
import chargingStation from "../chargingstation/chargingStation.json";

const position = [-6.358623, 106.666833];

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="csData">Charging Station Data</div>
        <MapContainer
          className="map"
          center={position}
          zoom={10}
          scrollWheelZoom={true}
          style={{ height: "60vh", width: "100wh" }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {chargingStation.map((cs, idx) => (
            <Marker position={[cs.lat, cs.lng]} key={idx}>
              <Popup>
                <b>
                  {cs.chargingstation}, <br /> {cs.location}
                </b>
              </Popup>
            </Marker>
          ))}
        </MapContainer>

        <div className="widgets">
          <Widget type="activeCs" activecs={299} />
          <Widget type="charge" chargestoday={5}/>
          <Widget type="transaction" transactiontoday={8}/>
          <Widget type="kwh" kwhdata={50000}/>
        </div>
      </div>
    </div>
  );
};

export default Home;
