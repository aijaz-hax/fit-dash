import { useState } from "react"
import { MenuRoundedIcon, SettingsRoundedIcon } from "../../utils/icons"
import ListSection from "./ListSection"
import "./Sidebar.css"
import ToolSection from "./ToolSection"

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);
  return (
  <>
      <div className="hamburger" onClick={toggleSidebar}>
        <MenuRoundedIcon />
      </div>
      {isOpen &&
        <div className="disMOb">
         <ListSection/>
      </div>
      }
    <div className={`sibebar-container`} id="modal_body">
      <div className="sidebar-above-section">
        <div className="sidebar-head">
          Health<span className="bold-head">care.</span>
        </div>
        <div className="list-section">
           <div className="list-head">General</div>
           <ListSection/>
        </div>
        <div className="list-section">
          <div className="list-head">Tools</div>
          <ToolSection/>
        </div>
      </div>
      <div className="sidebar-below-section">
        <div className='list-content'>
                 <div className='list-content-icon'><SettingsRoundedIcon/></div>
                 <div className='list-content-styling'>Setting</div>
              </div>
      </div>
    </div>
  </>
  )
}

export default Sidebar