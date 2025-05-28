import React from 'react'
import {TOOL_DATA } from '../../utils/constant'
import "./Sidebar.css"

const ToolSection = () => {
  return (
    <div className='list-side'>
    {TOOL_DATA?.map((item,index)=>{
        return(
              <div key={item?.id} className='list-content'>
                 <div className='list-content-icon'><item.icon/></div>
                 <div className='list-content-styling'>{item?.text}</div>
              </div>
        )
    })
    }
    </div>
  )
}

export default ToolSection