import { AddIcon, PersonIcon } from "../../utils/icons"
import "./Dashboard.css"

const RightHeader = () => {
  return (
    <div className="right-container">
      <div className="right-flex">
        <div className="leftimg"><PersonIcon sx={{color:"#FFFFFF"}}/></div>
        <div className="rightimg"><AddIcon sx={{color:"#FFFFFF"}}/></div>
      </div>
    </div>
  )
}

export default RightHeader