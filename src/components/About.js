import React from 'react';
import me from './pic/meeee.png';
import softwareResumePdf from './resumes/software-resume.pdf';
import firmwareResumePdf from './resumes/firmware-resume.pdf';
import '../App.css';

function About() {
  return (
    <section id="about" className="about-modern">
      <div className="about-copy">
        <h1 className="about-title">About Me</h1>
        <div className="about-text">
          <p>
            Hello! I’m <strong>Kwanghyuk Ryu</strong>, a passionate and dedicated Computer Engineering student at Simon Fraser University.
            I have a strong foundation in programming languages like Java, Python, and C++, and a deep interest in full-stack development,
            embedded systems, and hardware-software integration.
          </p>
          <p>
            I’m always eager to learn new technologies and frameworks, aiming to create impactful solutions that bridge hardware and software.
            Feel free to connect with me via LinkedIn or email for exciting opportunities and collaborations!
          </p>
          <div className="resume-buttons">
            <a className="resume-button" href={softwareResumePdf} target="_blank" rel="noopener noreferrer">
              Software Resume
            </a>
            <a className="resume-button" href={firmwareResumePdf} target="_blank" rel="noopener noreferrer">
              Firmware Resume
            </a>
          </div>
        </div>
      </div>
      <img className="about-image" src={me} alt="Kwanghyuk Ryu" />
    </section>
  );
}

export default About;
