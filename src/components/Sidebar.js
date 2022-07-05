import React from 'react'
import arrowdown from "../assets/images/icon-arrow-down.svg"

const Sidebar = () => {
  return (
    <div className='sidebar-nav'>
        <div className='sidebar-navlist'>
            <ul>
                <li>Features <img src={arrowdown} alt="arrowdow"/ ></li>
                <li>Company <img src={arrowdown} alt="arrowdow"/ ></li>
            </ul>
        </div>
    </div>
  )
}

export default Sidebar