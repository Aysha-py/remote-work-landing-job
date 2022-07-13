import React from 'react'
import arrowdown from "../assets/images/icon-arrow-down.svg"
import { RiTodoFill } from "react-icons/ri";
import { BsFillCalendarDateFill } from "react-icons/bs";
import { IoMdNotifications } from "react-icons/io";
import { FiTarget } from "react-icons/fi";

const Sidebar = ({showCompanylist,setShowcompanylist,setShowfeaturelist,showfeaturelist}) => {
  return (
    <div className='sidebar-nav'>
        <div className='sidebar-navlist'>
            <ul className='sidebar-navlist-list'>
                <li >Features <img src={arrowdown} alt="arrowdow" onClick={()=>setShowfeaturelist(!showfeaturelist)}/ >
                { showfeaturelist &&
                    <ul className='sidebar-featureslist'>
                      <li><RiTodoFill size={12} style={{ color:"purple", marginRight:"5px"}}/>To do List</li>
                      <li> <BsFillCalendarDateFill size={12}  style={{color:"green",marginRight:"5px"}}/>Calendars</li>
                      <li><IoMdNotifications size={15}  style={{ color:"yellow",marginRight:"5px"}}/>Reminder</li>
                      <li><FiTarget size={15}  style={{color:"blue",marginRight:"5px"}}/>Planning</li>
                    </ul>
                }
                </li>
                <li>Company <img src={arrowdown} alt="arrowdow" onClick={()=>setShowcompanylist(!showCompanylist)}/ >
                {
                  showCompanylist &&  
                  <ul className='sidebar-company-list'>
                      <li>History</li>
                      <li>Our team</li>
                      <li>Blog</li>
                  
                  </ul>
              }
                </li>
                <li>Careers</li>
                <li>About</li>  
            </ul>
            
        </div>
        <div className = "sidebar-footer">
          <h4 className='sidebar-login'>Login</h4>
          <h4 className='sidebar-register'>Register</h4>
          
        </div>
    </div>
  )
}

export default Sidebar