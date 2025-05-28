import "./Dashboard.css"
import fit from "../../assets/images/fit.jpg"
import { ORGAN_PART } from "../../utils/constant"
import { EastIcon } from "../../utils/icons"

const LeftBodySection = () => {
  return (
    <div className="left-main-container">
       <div>
        <img src={fit} alt="img" className="img-sty"/>
       </div>
       <div className="organ-container">
         {
            ORGAN_PART.map((item,ind)=>{
                return(
                    <div key={item.label} className="part-box-style">
                       <div className="d-flex">
                          <div><img src={item?.image} alt="organ" className="organ-image-style"/></div>     
                          <div className="organ-text">{item.label}</div>     
                       </div>
                       <div className="m16">
                          <div className="organ-lite-text">Date: 26 may 2025</div>
                       </div>
                       <div className="m12">
                          <div className="progress-section">
                             <div style={{width:"70%",height:"100%",backgroundColor:item.color,borderRadius:"30px"}}></div>
                          </div>
                       </div>
                    </div>
                )
            })
         }
         <div className="d-flex al-self">
             <div className="detail-section">Details</div>
             <div><EastIcon style={{color:"#D1D2FB",height:"12px",width:"12px"}}/></div>
         </div>
       </div>

    </div>
  )
}

export default LeftBodySection