import "./report.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Chart from "../../components/chart/Chart"




const Report = () => {
  return (
    <div className="report">
      <Sidebar/>
      <div className="reportContainer">
        <Navbar/>
        <div className="chart">
          <Chart/>
        </div>
      </div>
    </div>
  )
}

export default Report