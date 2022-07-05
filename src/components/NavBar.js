import React from 'react'
import databiz from "../assets/images/client-databiz.svg"
import audiophile from "../assets/images/client-audiophile.svg"
import meet from "../assets/images/client-meet.svg"
import maker from "../assets/images/client-maker.svg"
import arrowdown from "../assets/images/icon-arrow-down.svg"


const NavBar = () => {
  return (
    <div id="Nav-container">
        <div className='Nav-header'>
            <div className='Nav-left'>
                <div className='Nav-logo'>
                    <h1>snap</h1>
                </div>
                <div className='Nav-tabs'>
                    <ul className='Nav-tabs-list'>
                        <li>Features <img src={arrowdown} alt="arrowdown"/ ></li>
                        <li>Company <img src={arrowdown} alt="arrowdown"/ ></li>
                        <li>Careers</li>
                        <li>About</li>  
                    </ul>
                </div>
            </div>
            <div className='Nav-Right'>
                <h4>Login</h4>
                <h4 className='register'>Register</h4> 
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

                
                
                
                
                
                
                
                
            </section>
            <div className='clients'>
                <ul>
                    <li><img src={databiz} alt="databiz"/></li>
                    <li><img src={audiophile} alt="audiophile"/></li>
                    <li><img src={meet} alt="meet"/></li>
                    <li><img src={maker} alt="maker"/></li>
                </ul>
                
            </div>

            <section className='hero'>
                
            </section>


        </div>
    </div>
  )
}

export default NavBar