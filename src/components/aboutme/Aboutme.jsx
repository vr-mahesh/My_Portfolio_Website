import React, { Component } from 'react';
import './Aboutme.css';
import Typed from 'react-typed';
import AOS from 'aos'; 
import Particles from 'react-particles-js';
import mahesh from '../../Images/mahesh1.png';
class Aboutme extends Component{
    
  
    render(){
        return(
          <div id="Mahesh" className="row newabout_sec">
            
          <div  className="marginWidhtsetter">
           <div className="Main_Image"><img src={mahesh} alt="Smiley face" height="200" width="200"/></div>
           </div>
           <div className="marginWidhtsetter"><div className="typed">
          <Typed
                 strings={[' Hi, I am Mahesh!',
           ` I'm Full Stack Web Developer`,
           `I like Coding and Coffee`]
                }
                 typeSpeed={60}
              showCursor={false}
              loop
           ></Typed></div>
           </div>
  
  </div>
  
          
        
        )
    }
}
export default Aboutme;