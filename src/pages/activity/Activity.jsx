import "./activity.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";

const Activity = () => {
  return (
    <div className="activity">
    <Sidebar/>
    <div className="activityContainer">
      <Navbar/>
    </div>
  </div>
  );
};

export default Activity;
