import { ExpandMoreRoundedIcon } from "../../utils/icons"
import ActivityChart from "./ActivityChart"
import "./Dashboard.css"
import DentistSection from "./DentistSection"
import HeaderSection from "./HeaderSection"
import LeftBodySection from "./LeftBodySection"
import RightHeader from "./RightHeader"
import UpcomingSchedule from "./UpcomingSchedule"
import WeeklyCalendar from "./WeeklyCalendar"

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="dashboard-left" id="modal_body">
        <HeaderSection/>
        <div className="header-title">
           <div className="header-left-title">Dashboard</div>
           <div className="header-right-title">
              <div className="header-week">This Week</div>
              <div><ExpandMoreRoundedIcon sx={{height:"14px",width:"14px",marginTop:"5px"}}/></div>
           </div>
        </div>
        <LeftBodySection/>
        <div>
        <ActivityChart/>
       </div>
      </div>
      <div className="dashboard-right">
        <RightHeader/>
        <WeeklyCalendar/>
        <DentistSection/>
        <UpcomingSchedule/>
      </div>
    </div>
  )
}

export default Dashboard