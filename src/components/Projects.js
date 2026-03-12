/*
import github from './pic/github-mark.png';
import React from 'react';
import projectsData from './projectsdata'; // Adjust the path if needed

function Projects({ goToNewPage }) {
  return (
    <section id='projects' className="projects-section">
      <h2>Recent Projects</h2>
      <div className="projects-list">
   
        {projectsData.map((project) => (
          
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
      <button className="new-page-button" onClick={goToNewPage}>
        More Projects
      </button>
    </section>
    
  );
}

export default Projects;

*/
import React from 'react';
import InfiniteMenu from './InfiniteMenu';
import projectsData from './projectsdata';
import '../App.css';

function Projects({ goToNewPage }) {
  // Convert your existing project data into the format required by InfiniteMenu
  const items = projectsData.map((project) => ({
    image: project.imageSrc,
    link: project.githubLink,
    title: project.title,
    description: project.description,
    detail: project.details
    
  }));

  return (
    <section id="projects" className="projects-section">
      <h2>Featured Projects</h2>
      <p className="section-lead">Interactive highlights from software, embedded, and AI builds.</p>
      <div className="infinite-menu-container">
        <InfiniteMenu items={items} />
      </div>
      <button className="menu-button" onClick={goToNewPage}>
        More Projects
      </button>
    </section>
  );
}

export default Projects;
