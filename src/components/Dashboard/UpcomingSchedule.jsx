import "./Dashboard.css"

const UpcomingSchedule = () => {
  return (
    <div className="upcoming-container">
      <div className="upcoming-text">The Upcoming Schedule</div>
      <div className="upcoming-head">On Thursday</div>
      <div className="upcoming-section">
      <div className="upcoming-left-style">
        <div className="d-flx-btwn">
            <div className="d-text-b">Health checkup complete</div>
            <div>💉</div>
         </div>
         <div className="dt-top-b">
            <div>11:00 AM</div>
            {/* <div style={{marginTop:"3px"}}>Dr. Kevin Djones</div> */}
         </div>
       </div>
      <div className="upcoming-right-style">
        <div className="d-flx-btwn">
            <div className="d-text-b">Opthalmologist</div>
            <div>👁</div>
         </div>
         <div className="dt-top-b">
            <div>14:00 PM</div>
            {/* <div style={{marginTop:"3px"}}>Dr. Kevin Djones</div> */}
         </div>
       </div>
       </div>
       <div className="upcoming-head">On Saturday</div>
      <div className="upcoming-section1">
      <div className="upcoming-right-style30">
        <div className="d-flx-btwn">
            <div className="d-text-b">Cardiologist</div>
            <div>❤</div>
         </div>
         <div className="dt-top-b">
            <div>12:00 AM</div>
            {/* <div style={{marginTop:"3px"}}>Dr. Kevin Djones</div> */}
         </div>
       </div>
      <div className="upcoming-right-style30">
        <div className="d-flx-btwn">
            <div className="d-text-b">Neurologist</div>
            <div>👨🏻‍⚖️</div>
         </div>
         <div className="dt-top-b">
            <div>14:00 PM</div>
            {/* <div style={{marginTop:"3px"}}>Dr. Kevin Djones</div> */}
         </div>
       </div>
       </div>
    </div>
  )
}

export default UpcomingSchedule