import React from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './components/header/Header';
import Aboutme from './components/aboutme/Aboutme';
import Education from './components/education/Education'
import MoreAboutMe from './components/moreaboutme/moreaboutme';
import Experience from './components/experience/experience';
import Skills from './components/skills/skills'
import Projects from './components/projects/projects'
import Footer from './components/footer/footer'
function App() {
 

  return (
    <div className="App container-fluid">
    <Header />
    <Aboutme />
    <MoreAboutMe />
    <Skills></Skills>
    <Projects/>
    <Education />  
    <Experience />  
    <Footer></Footer>
    </div>
  );
}

export default App;
