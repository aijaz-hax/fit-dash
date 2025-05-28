import { ParkRoundedIcon, SearchRoundedIcon } from "../../utils/icons"
import "./Dashboard.css"

const HeaderSection = () => {
  return (
    <div className="header-section">
        <div className="header-search">
            <SearchRoundedIcon style={{color:"#f1f3f8"}}/>
            <input type="text" placeholder="Search" className="search-input"/>
        </div>
        <div className="header-right-icon">
            <ParkRoundedIcon style={{color:"#3931AA"}}/>
        </div>
    </div>
  )
}

export default HeaderSection