import React, { Component } from 'react';
import './experience.css';
import acc_img from '../../Images/accenture_logo.png';
import isro_img from '../../Images/Indian_Space_Research_Organisation_Logo.svg.png';
class Experience extends Component{
    render(){
        return(
            <div id="id_Experience" className="row" >
            <div id="id_ExperienceSection" className="container">
                <div className="expp">Experience</div>
                <div className="edu_details">
                <div class="row Accenture">
                    <div data-aos="fade-left" className="col-md-5"><img src={acc_img} alt="Smiley face" height="80" width="235"/></div>
                    <div className="col-md-6">
                    <div data-aos="fade-right" className="row col_name">Accenture</div>
                    <div data-aos="fade-bottom" className="row prog_name"><b>Role :</b>  Application Development Associate </div>
                    <div  data-aos="fade-bottom" className="row rel_subj"><b>Year </b> : October 2017 - July 2019 </div>
                    </div>
                </div>
                
                <div class="row isro">
                <div data-aos="fade-left" className="col-md-5"><img src={isro_img} alt="Smiley face" height="100" width="100"/></div>
             <div className="col-md-6 ">
                    <div data-aos="fade-right" className="row col_name">Indian Space Research Organization</div>
                    <div data-aos="fade-bottom" className="row prog_name"><b>Role :</b>  Project Trainee </div>
                    <div  data-aos="fade-bottom" className="row rel_subj"><b>Year </b> : February 2017 - May 2017 </div> </div>
                </div>
                </div>
            </div>
            </div>
        )

    }
}
export default Experience;