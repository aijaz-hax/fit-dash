import "./Dashboard.css"

const DentistSection = () => {
  return (
    <div className="dentist-section">
       <div className="dentist-left-style">
         <div className="d-flx-btwn">
            <div className="d-text">Dentist</div>
            <div>🦷</div>
         </div>
         <div className="dt-top">
            <div>09:00 - 11:00</div>
            <div style={{marginTop:"3px"}}>Dr. Cameron Williamson</div>
         </div>
       </div>
       <div className="dentist-right-style">
        <div className="d-flx-btwn">
            <div className="d-text-b">Physiotherapy Appointment</div>
            <div>💪🏻</div>
         </div>
         <div className="dt-top-b">
            <div>11:00 - 12:00</div>
            <div style={{marginTop:"3px"}}>Dr. Kevin Djones</div>
         </div>
       </div>
    </div>
  )
}

export default DentistSection