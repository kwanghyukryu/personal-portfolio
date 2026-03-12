import React from 'react';
import portrait from './pic/meee.jpg';
import aslProject from './pic/asl.png';
import stravaProject from './pic/strava.png';
import aiProject from './pic/aistudy.png';
import '../App.css'

function Main() {
  return (
    <section id="main" className="main">
      <div className="hero-grid">
        <div className="hero-copy">
          <p className="hero-kicker">Computer Engineering Portfolio</p>
          <h1 className="mainname">Kwanghyuk</h1>
          <p className="maind">
            I build full-stack, AI, and embedded systems with a focus on practical
            products that actually ship.
          </p>
          <div className="hero-actions">
            <button className='mainb' onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}>
              More About Me
            </button>
            <button className='mainb mainb-alt' onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}>
              View Projects
            </button>
          </div>
          <div className="hero-stats">
            <div className="hero-stat">
              <strong>20+</strong>
              <span>Projects built</span>
            </div>
            <div className="hero-stat">
              <strong>3+</strong>
              <span>Years of coding</span>
            </div>
            <div className="hero-stat">
              <strong>End-to-end</strong>
              <span>From prototype to deploy</span>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <img className="hero-profile" src={portrait} alt="Kwanghyuk portrait" />
          <img className="hero-float hero-float-one" src={aslProject} alt="ASL project preview" />
          <img className="hero-float hero-float-two" src={stravaProject} alt="Strava project preview" />
          <img className="hero-float hero-float-three" src={aiProject} alt="AI study helper preview" />
        </div>
      </div>
    </section>
  );
}

export default Main;
