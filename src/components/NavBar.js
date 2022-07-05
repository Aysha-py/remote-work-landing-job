import React,{useState,useEffect} from 'react'
import databiz from "../assets/images/client-databiz.svg"
import audiophile from "../assets/images/client-audiophile.svg"
import meet from "../assets/images/client-meet.svg"
import maker from "../assets/images/client-maker.svg"
import arrowdown from "../assets/images/icon-arrow-down.svg"
import { FaBars } from "react-icons/fa";
import { RiTodoFill } from "react-icons/ri";
import { BsFillCalendarDateFill } from "react-icons/bs";
import { IoMdNotifications } from "react-icons/io";
import { FiTarget } from "react-icons/fi";
import Sidebar from './Sidebar'



const NavBar = () => {

const [showfeaturelist,setShowfeaturelist] = useState(false)
const [showCompanylist,setShowcompanylist] =useState(false)
const [width, setWidth] = useState(window.innerWidth)
const [sidebar,setShowshowSideBar] =useState(true)

const updateDimensions = () => {
  setWidth(window.innerWidth);
};

useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);



  return (
    <div id="Nav-container">
        <div className='Nav-header'>
            <div className='Nav-left'>
                <div className='Nav-logo'>
                    <h1>snap</h1>
                </div>
                <div className='Nav-tabs'>
                    <ul className='Nav-tabs-list'>
                        <li>Features <img src={arrowdown} alt="arrowdown" onMouseOver={()=>setShowfeaturelist(!showfeaturelist)}/ >
                        {showfeaturelist &&
                            <ul className='featureslist'>
                                <li><RiTodoFill size={12} style={{marginRight:5, color:"purple"}}/>To do List</li>
                                <li> <BsFillCalendarDateFill size={12}  style={{marginRight:5, color:"green"}}/>Calendars</li>
                                <li><IoMdNotifications size={15}  style={{marginRight:5, color:"yellow"}}/>Reminder</li>
                                <li><FiTarget size={15}  style={{marginRight:5, color:"blue"}}/>Planning</li>
                            </ul>
                        }
                        </li>
                        
                        <li>Company <img src={arrowdown} alt="arrowdown" onMouseOver={()=>setShowcompanylist(!showCompanylist)}/ >
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
                <h4 className='login'>Login</h4>
                {sidebar && width >= 920 ? (<h4 className='register'>Register</h4>) 
                :(<div><FaBars size={25} />
                        <div className='sidebar'>
                            <Sidebar showfeaturelist={showfeaturelist} setShowfeaturelist={setShowfeaturelist} 
                            showCompanylist={showCompanylist} setShowcompanylist={setShowcompanylist}/>
                        </div>
                </div>)
                }
            </div>
        </div>
        
        <div className='content-body'>
            <section className='content-right'>
                <h5>Make Remote Work</h5>

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

            <section className='hero'>
                
            </section>


        </div>
    </div>
  )
}

export default NavBar