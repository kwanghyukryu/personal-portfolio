import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Mainn from './components/Mainn';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.css'

//npm start 

function App() {
  //useState - useState uses two element, the first is the value and second is a function that sets the values
  const [activeSkill, setActiveSkill] = useState(null);
  const navigate = useNavigate();
  //a function that checks if the activated skill is already set or not. If the same skill is activated, it turns to null
  const toggleSkill = (skill) => setActiveSkill(activeSkill === skill ? null : skill);
  const goToNewPage = () => navigate('/More-Project');

  return (
    <div className="App">
      <Navbar />
      <Mainn />
      <About />
      <Skills activeSkill={activeSkill} toggleSkill={toggleSkill} />
      <Projects goToNewPage={goToNewPage} />
      <Contact />
    </div>
  );
}

export default App;

/*
import React, {useState} from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';

import Button from './Button'
import github from "./pic/github-mark.png";
import linkedin from "./pic/LI-In-Bug.png"
import googlemap from "./pic/7305d338d06fe8bdf83c5fc98e050bd1.png"
import Pdf from "./resume.docx (7).pdf"
import MoreProject from './MoreProject';  // Import the new page


function App() {
  const [activeSkill, setActiveSkill] = useState(null);
  const navigate = useNavigate();

  const toggleSkill = (skill) => {
    setActiveSkill(activeSkill === skill ? null : skill);
  };

  const scrollToMain = () => {
    const projectsSection = document.getElementById('main');
    projectsSection.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    projectsSection.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToSkills = () => {
    const projectsSection = document.getElementById('skill');
    projectsSection.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    const projectsSection = document.getElementById('contact');
    projectsSection.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToAbout = () => {
    const projectsSection = document.getElementById('about');
    projectsSection.scrollIntoView({ behavior: 'smooth' });
  }

  const goToNewPage = () => {
    navigate('/More-Project');
  };

  let PL = ["C/C++", "Python", "JavaScript", "HTML", "CSS", "MATLAB", "VHDL", "R"];
  let OS = ["Window", "Mac", "Linux"];
  let software = ["Github", "VScode", "Eclipse", "MongoDB", "LTspice", "Quartus", "Modelsim", "Solidwork", "Ubuntu"];
  let hardware = ["FPGA board", "Oscilloscope", "DMM Power Supply", "Function Generator", "Solder", "Arduino"];

  return (
    <div className="App">
      <section className = "directory">
        <nav>
          <button className="scroll-button" onClick={scrollToMain}>Kwanghyuk</button>
          <button className="scroll-button" onClick={scrollToAbout}>About me</button>
          <button className="scroll-button" onClick={scrollToSkills}>Skills</button>
          <button className="scroll-button" onClick={scrollToProjects}>Projects</button>
          <button className="scroll-button" onClick={scrollToContact}>Contact</button>
        </nav>
        
      </section>

      <section id="main" className = "main">
        <h1 className="mainname">Kwanghyuk</h1>
        <p className="maind">Always looking for ways to improve</p>
        <button className="mainb" onClick={scrollToAbout}>More About me</button>
      </section>

      <header id="about" className="App-header">
        <section className="title">
          <img className= "me" img src={github} alt="github"/>
          <h1 className="ah">About Me
        <p className="intro-p">Hello, my name is Kwanghyuk Ryu. I'm a passionate developer who loves creating web applications and learning new technologies.</p>
        <p className="intro-p">I have experience with various programming languages, including JavaScript, React, and Node.js. I'm always looking for new challenges and ways to improve my skills!</p>
        <button className="resume"><a href = {Pdf} target = "_blank" rel="noopener noreferrer">Resume</a></button></h1>
        
        </section>
      </header>

      <section id="skill" className="skills">
      <h2>Skills</h2>
      <div className="skills-buttons">
        <button onClick={() => toggleSkill('PL')}>Programming Language</button>
        <button onClick={() => toggleSkill('software')}>Software</button>
        <button onClick={() => toggleSkill('hardware')}>Hardware</button>
        <button onClick={() => toggleSkill('OS')}>Operating System</button>
      </div>
      <div className="skills-container">
        {activeSkill === 'PL' && (
          <ul className="PL-list">
            <h3>Programming Language</h3>
            {PL.map((item, index) => (
              <li key={index} className="PL">{item}</li>
            ))}
          </ul>
        )}
        {activeSkill === 'software' && (
          <ul className="software-list">
            <h3>Software</h3>
            {software.map((item, index) => (
              <li key={index} className="software">{item}</li>
            ))}
          </ul>
        )}
        {activeSkill === 'hardware' && (
          <ul className="hardware-list">
            <h3>Hardware</h3>
            {hardware.map((item, index) => (
              <li key={index} className="hardware">{item}</li>
            ))}
          </ul>
        )}
        {activeSkill === 'OS' && (
          <ul className="OS-list">
            <h3>Operating System</h3>
            {OS.map((item, index) => (
              <li key={index} className="OS">{item}</li>
            ))}
          </ul>
        )}
      </div>
    </section>
     
 
      <section id="projects" className="projects-section">
        <h2>Recent Projects</h2>
        <div className="projects-list">
          <div className="project">
          <img className= "pp" img src={github} alt="github"/>
          <section className = "p-description">
          <h3>CCTV Drone</h3>
          <p>This project uses python and its DJI Tello drone library</p>
          <p>I programmed a DJI Tello drone that can move both automatically and manually</p>
          <p>It also used OpenCV library to track faces when detected</p>
          <button className="p-button"><a href="https://github.com/kwanghyukryu" target="_blank" rel="noopener noreferrer"><img className="button-pic" img src={github} alt="github"/></a></button>
          </section>
          </div>
          <div className="project">
          <img className= "pp" img src={github} alt="github"/>
          <section className = "p-description">
          <h3>Discord Bot</h3>
          <p>This project uses JavaScript and its Discord library</p>
          <p>I programmed a discord bot that can be used to play casino games</p>
          <p>I'm also working on a way to track and store users data using a database</p>
          <button className="p-button"><a href="https://github.com/kwanghyukryu" target="_blank" rel="noopener noreferrer"><img className="button-pic" img src={github} alt="github"/></a></button>
          </section>
          </div>
          <div className="project">
          <img className= "pp" img src={github} alt="github"/>
          <section className = "p-description">
          <h3>Pong Game</h3>
          <p>This project uses C++ and its SFML library</p>
          <p>I programmed a playable single player pong game where the ball gradually increases speed</p>
          <p>I also created a point/lives system to keep track of how well users do</p>
          <button className="p-button"><a href="https://github.com/kwanghyukryu" target="_blank" rel="noopener noreferrer"><img className="button-pic" img src={github} alt="github"/></a></button>
          </section>
          </div>      
        </div>
        <button className="new-page-button" onClick={goToNewPage}>
        More Projects
      </button>
      </section>

      <section id ="contact"className="contact">
        <h2>Contact</h2>
        <ul>
          <li>kra69@sfu.ca</li>
          <li>778-227-1714</li>
          <button className="link-button"><a href="https://linkedin.com/in/kwanghyukryu" target="_blank" rel="noopener noreferrer"><img className="button-pic" img src={linkedin} alt="linkedin"/></a></button>
          <button className="link-button"><a href="https://github.com/kwanghyukryu" target="_blank" rel="noopener noreferrer"><img className="button-pic" img src={github} alt="github"/></a></button>
          <button className="link-button"><a href="https://www.google.ca/maps/place/Port+Moody,+BC/@49.3002567,-122.9215879,13z/data=!3m1!4b1!4m6!3m5!1s0x548678e6dcab23d3:0xc3bfae98d4c6f87c!8m2!3d49.2849107!4d-122.8677562!16zL20vMDNubGJs?entry=ttu&g_ep=EgoyMDI0MTEwNi4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer"><img className="button-pic" img src={googlemap} alt="gmap"/></a></button>
        </ul>
      </section>

    </div>

    
  );
}

export default App;
*/