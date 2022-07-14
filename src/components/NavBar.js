import React,{useState,useEffect} from 'react'
import databiz from "../assets/images/client-databiz.svg"
import audiophile from "../assets/images/client-audiophile.svg"
import meet from "../assets/images/client-meet.svg"
import maker from "../assets/images/client-maker.svg"
import downarrow from "../assets/images/icon-arrow-down.svg"
import uparrow from "../assets/images/icon-arrow-up.svg"
import {  FaBars } from "react-icons/fa";
import { RiTodoFill } from "react-icons/ri";
import { BsFillCalendarDateFill } from "react-icons/bs";
import { IoMdNotifications } from "react-icons/io";
import { FiTarget } from "react-icons/fi";
import Sidebar from './Sidebar'
import {AiOutlineClose} from  "react-icons/ai";



const NavBar = () => {

const [showfeaturelist,setShowfeaturelist] = useState(false)
const [showCompanylist,setShowcompanylist] =useState(false)
const [width, setWidth] = useState(window.innerWidth)
const [arrowdown,setArrowDown] =useState(false)
// const [mobilearrowdown,setmobileArrowDown] =useState(false)
// const [secondmobilearrowdown,setsecondmobileArrowDown] =useState(false)
const [arrowdownsecond,setArrowDownsecond] =useState(false)
const [show,setShow] = useState(false)


const updateDimensions = () => {
  setWidth(window.innerWidth);
};

useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

 const handleclick = () =>{
    if (!show) {
        setShow(true)
      } else {
        setShow(!show)   
      }
 }
 const handlearrow = () =>{
    if (!arrowdown) {
        setArrowDown(true)
        setShowfeaturelist(true)
        
        
      } else {
        setArrowDown(!arrowdown)   
        setShowfeaturelist(!showfeaturelist)
        
      }
 }

 const handlearrowsecond = () =>{
    if (!arrowdownsecond) {
        setArrowDownsecond(true)
        setShowcompanylist(true)
      } else {
        setArrowDownsecond(!arrowdownsecond)   
        setShowcompanylist(!showCompanylist)
        
      }
 }


  return (
    <div id="Nav-container">
    <main>
        <div className='Nav-header'>
            <div className='Nav-left'>
                <div className='Nav-logo'>
                    <h1>snap</h1>
                </div>
                <div className='Nav-tabs'>
                    <ul className='Nav-tabs-list' >
                        <li onClick={handlearrow}> Features { arrowdown ? <img src={uparrow} alt="uparrow" /> :  <img src={downarrow} alt="downarrow" />}
                        {showfeaturelist &&
                            <ul className='featureslist'>
                                <li><RiTodoFill size={12} style={{marginRight:5, color:"purple"}}/>To do List</li>
                                <li> <BsFillCalendarDateFill size={12}  style={{marginRight:5, color:"green"}}/>Calendars</li>
                                <li><IoMdNotifications size={15}  style={{marginRight:5, color:"yellow"}}/>Reminder</li>
                                <li><FiTarget size={15}  style={{marginRight:5, color:"blue"}}/>Planning</li>
                            </ul>
                        }
                        </li>
                        
                        <li onClick={handlearrowsecond}> Company { arrowdownsecond ? <img src={uparrow} alt="uparrow" /> :  <img src={downarrow} alt="downarrow" />}
                        {
                            showCompanylist &&  
                            <ul className='company-list'>
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
            </div>
            <div className='Nav-Right'>
                <h2 className='login'>Login</h2>
                {width >= 920 ? (<h3 className='register'>Register</h3>) 
                : 
                <div className='sidebar-bars' onClick={handleclick}>    
                    { show ? 
                    <>
                        <AiOutlineClose size={25} style={{marginLeft:"70px"}}/>
                            <div className='sidebar' >
                                <Sidebar showfeaturelist={showfeaturelist} setShowfeaturelist={setShowfeaturelist} 
                                showCompanylist={showCompanylist} setShowcompanylist={setShowcompanylist}/>
                            </div>
                    </>
                    :<FaBars size={25}/>
                    }
                </div>
                }
            </div>
        </div>
        
        <div className='content-body'>
            <section className='content-right'>
                <h4>Make Remote Work</h4>

                <p>Get your team in sync, No matter the location.
                    Streamline processes, Create team rituals, 
                    and watch productivity soar
                </p>
                <button>Learn More</button>

                <div className='clients'>
                   <ul>
                        <li><img src={databiz} alt="databiz"/></li>
                        <li><img src={audiophile} alt="audiophile"/></li>
                        <li><img src={meet} alt="meet"/></li>
                        <li><img src={maker} alt="maker"/></li>
                   </ul>
                
                </div>
            </section>

            <div className='hero'>
                
            </div>


        </div>
        </main>
    </div>
  )
}

export default NavBar