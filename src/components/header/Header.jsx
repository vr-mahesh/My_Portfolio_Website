import React from 'react';
import './Header.css';
import Typed from 'react-typed';
import AOS from 'aos'; 
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';
import { Link, animateScroll as scroll } from "react-scroll";
import mahesh from '../../Images/mahesh1.png';
class Header extends React.Component{
    constructor(props, context) { 
        super(props, context); 
        AOS.init(); 
      } 
      componentWillReceiveProps (){ 
        AOS.refresh(); 
      } 
      componentDidMount(){
      
      }
     
render(){
    return(
 <div className="topnav"  id="HeaderDIV" >
 
 
 <Navbar variant="dark" expand="lg">
  <Navbar.Brand className="Mahesh" href="#home">Mahesh</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className=" navvele mr-auto">
      <Nav.Link activeClass="active" href="#id_aboutMeDetails_Section">About Me</Nav.Link>
      <Nav.Link  activeClass="active" href="#skills">Skills</Nav.Link>
      <Nav.Link activeClass="active" href="#services">What Can I Do</Nav.Link>
      <Nav.Link activeClass="active" href="#id_projects">Projects</Nav.Link>
      <Nav.Link activeClass="active" href="#id_Education">Education</Nav.Link>
      <Nav.Link activeClass="active" href="#id_Experience">Experience</Nav.Link>
      
      
    </Nav>
  </Navbar.Collapse>
</Navbar>
        

 </div>  
 
 
    )
}
myFunction=() => {
    var x = document.getElementById("HeaderDIV");
    console.log(x);
   
    //     if (x.className === "topnav") {
    //   x.className += " responsive";
    // } else {
    //   x.className = "topnav";
    // }

  }
}
export default Header;