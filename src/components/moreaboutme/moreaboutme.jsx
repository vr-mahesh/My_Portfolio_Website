import React, { Component } from 'react';
import './moreaboutme.css';
import facebook from '../../Images/facebook_logo.png';
import git from '../../Images/git_logo.png';
import linkedin from '../../Images/linkedin_logo.jpg';
import insta from '../../Images/insta_laogo.jpg';
class MoreAboutMe extends Component{
    render(){
        return(
            
                <div className="row aboutMeDetails_Section"  id="id_aboutMeDetails_Section">
<div className="container cont">
 <div data-aos="fade-zoom-in" className="row">
 <div className="col-md-5 col-sm-12"></div>
 <div className="col-md-4 col-sm-12 aboutme_heading">About Me</div>
 </div>
 <div className="row morepara">
 <div className="col-md-2 col-sm-12"></div>
 <div data-aos="fade-right" className="col-md-8 col-sm-12 aboutme_body font20 margintop1">Hi, It's Mahesh here, I am Web Developer with 2 years of experience in field of web development in developing Responsive, Interactive and Dynamic
websites.I am Information Systems Graduate Student at Northeastern University with an unabating enthusiasm and passion towards programming and web development.</div>
 </div>
 <br></br>
 <div className="row morepara">
 <div className="col-md-2 col-sm-12"></div>
 <div  data-aos="fade-left" className="col-md-8 col-sm-12 font20 aboutme_body">I believe that if you love something you can put beauty into it.</div>
 </div>
 <br/>
 <div className="row morepara">
 <div className="col-md-2 col-sm-12"></div>
 <div data-aos="fade-right" className="col-md-8 col-sm-12 font20 aboutme_body">I enjoy music, movies and sketching.</div>
 </div>
 <br/>
 <div className="row morepara">
 <div className="col-md-2 col-sm-12"></div>
 <div data-aos="fade-left" className="col-md-8 col-sm-12 font20 aboutme_body">Here's my <a className="a_resume" href={"https://drive.google.com/open?id=17XL_jRfzymD6p4yqNhWel5PlgryFMxN2"} rel="noopener noreferrer">Resume</a></div>
 </div>
 <div className="row socialmedia">
 <div className="col-md-4 col-sm-4"></div>
 <a className="a_icons" href="https://github.com/MaheshPrasad44"><i style={{'font-size': "40px",
    "color": "white"}} class="fa fa-github" aria-hidden="true"></i></a>
 <a className="a_icons" href="https://www.facebook.com/mahesh.prasad.56808"><i  style={{'font-size': "40px",
    "color": "white"}} class="fa fa-facebook-square" aria-hidden="true"></i></a>
 <a  className="a_icons" href="https://www.instagram.com/being.n0_0ne/"><i  style={{'font-size': "40px",
    "color": "white"}} class="fa fa-instagram" aria-hidden="true"></i></a>
<a className="a_icons" href="https://www.linkedin.com/in/maheshprasad44/"><i style={{'font-size': "40px",
    "color": "white"}}  class="fa fa-linkedin" aria-hidden="true"></i></a>
 </div>

 </div></div>

 

           
        )
    }
}
export default MoreAboutMe;