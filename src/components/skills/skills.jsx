import React, { Component } from 'react';
import './skills.css';
class Skills extends Component{
    render(){
        return(
            <div id="id_Skills" className="row" >
 <div id="Skills" class="container text-center bg-grey page-view">
    <h2 className="h2_skill" data-aos="fade-left">Skills</h2>
    <hr/>
    <div class="row">
      <div class="col-sm-4">
        <h4 className="h4_sub" data-aos="fade-right" ><i class="fa fa-cogs"></i> Backend</h4><br/>
        <h5><strong data-aos="fade-right">Languages</strong></h5>
        <ul>
          <li data-aos="fade-right">JAVA</li><br/>
          <li data-aos="fade-right" >C# (CSOM - Sharepoint Framework)</li>
        </ul><br/>
        <h5><strong data-aos="fade-right">Databases</strong></h5>
        <ul>
          <li data-aos="fade-right" >MongoDB</li><br/>
          <li data-aos="fade-right" >SQL | MySQL</li>
          <li data-aos="fade-right">MicroSoft SharePoint Platform</li>
        </ul><br/>
        <h5><strong data-aos="fade-right"> Platforms and Framework</strong></h5>
        <ul>

          <li data-aos="fade-right" >Spring MVC</li><br/>
       
          <li data-aos="fade-right" >Node.Js | Express JS</li>
         
        </ul>
        
      </div>
      <div class="col-sm-4">
        <h4 className="h4_sub" data-aos="fade-in" ><i class="fa fa-code"></i> Frontend</h4><br/>
        <h5><strong data-aos="fade-in">HTML | CSS</strong></h5>
        <ul>
          <li data-aos="fade-in">HTML5 | CSS3 - Responsive</li><br/>
          <li data-aos="fade-in">Bootstrap | SCSS</li><br/>
          <li data-aos="fade-in">XML</li><br/>
        </ul><br/>
        <h5><strong data-aos="fade-in">JavaScript</strong></h5>
        <ul>
        <li data-aos="fade-in"> JavaScript ES6  | jQuery </li><br/>
          <li data-aos="fade-in">REACT | MERN Stack</li><br/>
          <li data-aos="fade-in">RESTful Web Services</li><br/>
          <li data-aos="fade-in">AJAX</li> <br/> <br/>
        </ul><h5><strong data-aos="fade-in">API</strong></h5>
        <ul>
          <li data-aos="fade-in">REST | SOCKET.IO</li>
          <li data-aos="fade-in">Telegram API</li>
          <li data-aos="fade-in">Google Map API</li>
        </ul>
      </div>
      <div class="col-sm-4">
        <h4 className="h4_sub" data-aos="fade-left" ><i class="fa fa-flask"></i> Other</h4><br/>
        <h5><strong data-aos="fade-left">Tools</strong></h5>
        <ul>
          <li data-aos="fade-left">IntelliJ </li><br/>
          <li data-aos="fade-left">Visual Studio Code | IDE</li><br/>
          <li data-aos="fade-left">SQL Server Management Studio</li><br/>
          <li data-aos="fade-left">Eclipse IDE</li><br/>
          <li data-aos="fade-left">JIRA</li><br/><br/>
        </ul>
        <h5><strong data-aos="fade-left">Operating System</strong></h5>
        <ul>
          <li data-aos="fade-left">Windows</li><br/>
          <li data-aos="fade-left">Linux</li><br/>
        </ul><br/><br/>
        <h5><strong data-aos="fade-left">Version Control</strong></h5>
        <ul>
          <li data-aos="fade-left">GIT</li><br/>
          <li data-aos="fade-left">Bit Bucket</li><br/>
        </ul>
      </div>
    </div>
  </div>

  <div   id="Services" class="container text-center bg-grey page-view">
    <h2 className="h2_skill" data-aos="fade-left">Services</h2>
    <h3 className="h2_skill" data-aos="fade-in" >What I can do for you</h3>
    <hr/>
    <div class="row">
      <div class="col-sm-4">
        <h4 data-aos="fade-left" ><i class="fa fa-cogs"></i> Backend</h4>
        <h5><strong data-aos="fade-left">Coding</strong></h5>
        <ul>
          <li data-aos="fade-left">Develop JAVA SE / EE Applications</li><br/>
          <li data-aos="fade-left">Build RESTful APIs in Node.js, JAVA</li><br/>
          <li data-aos="fade-left">Build Windows Forms Applications</li><br/>
        </ul><br/>
        <h5><strong data-aos="fade-left">Security</strong></h5>
        <ul>
          <li data-aos="fade-left">Use Authentication/Authorization standards like OAuth</li><br/>
          <li data-aos="fade-left">Provide session management using JWT (Java Web Token) and BCrypt</li><br/>
        </ul>
      </div>
      <div class="col-sm-4">
        <h4 data-aos="fade-in"><i class="fa fa-code"></i>Frontend</h4>
        <h5><strong data-aos="fade-in">Coding</strong></h5>
        <ul>
          <li data-aos="fade-in">Develop Dynamic and Responsive websites</li><br/>
          <li data-aos="fade-in">Built REACT Apps</li><br/>
          <li data-aos="fade-in">Write Elegant Client-side  jQuery Code to fetch data using APIs</li><br/>
          <li data-aos="fade-in">Take advantage of open source like ParticleJS, AOS and GSAP </li><br/>
          <li data-aos="fade-in">Fix UI and functional bugs</li>
        </ul><br/>
      </div>
      <div class="col-sm-4">
        <h4 data-aos="fade-right"><i class="fa fa-flask"></i> Other</h4>
        <h5><strong data-aos="fade-right">Client and team</strong></h5>
        <ul>
          <li data-aos="fade-right">Provide clients a detailed workflow of Product</li><br/>
          <li data-aos="fade-right">Work with client to ensure API meets spec</li><br/>
          <li data-aos="fade-right">Provide Documentations for client</li><br/>
        </ul><br/>
        <h5><strong>Testing </strong></h5>
        <ul>
          <li data-aos="fade-right">Perform Unit Testing of Modules</li>
        </ul>
      </div>
    </div>
  </div>
            </div>
        )

    }
}
export default Skills;