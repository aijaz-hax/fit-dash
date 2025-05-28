import React from 'react'
import { SIDEBAR_DATA } from '../../utils/constant'
import "./Sidebar.css"

const ListSection = () => {
  return (
    <div className='list-side'>
    {SIDEBAR_DATA?.map((item,index)=>{
        return(
              <div key={item?.id} className='list-content'>
                 <div className={index === 0 ?  'list-content-icon-active': 'list-content-icon'}><item.icon/></div>
                 <div className={index ===0 ? 'list-content-styling-active': 'list-content-styling'}>{item?.text}</div>
              </div>
        )
    })
    }
    </div>
  )
}

export default ListSection