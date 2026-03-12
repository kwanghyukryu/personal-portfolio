import github from './pic/github-mark.png';
import React from 'react';
import mprojectsData from './mprojectsdata'; // Adjust the path if needed

function Projects({ goToNewPage }) {
  return (
    <section id="projects" className="projects-section">
      <h2>Project Archive</h2>
      <p className="section-lead">Extended list of shipped and experimental builds.</p>
      <div className="projects-list">
   
        {mprojectsData.map((project) => (
          
          <div key={project.id} className="project">
            <img className="pp" src={project.imageSrc} alt={project.title} />
            <section className="p-description">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              {project.details.map((detail, index) => (
                <p key={index}>{detail}</p>
              ))}
              <button className="p-button"><a href={project.githubLink} target="_blank" rel="noopener noreferrer"><img className="button-pic" img src={github} alt="github"/></a></button>
            </section>
          </div>
        ))}
      </div>
      <button className="menu-button" onClick={goToNewPage}>
        Go Back
      </button>
      
    </section>
    
  );
}

export default Projects;
