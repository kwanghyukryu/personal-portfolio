import React from 'react';
import solidworksLogo from './pic/solidworks.svg';
import fpgaChipLogo from './pic/fpga-chip.svg';
import '../App.css';

function Skills() {
  const coreSkills = [
    { name: 'C++', logo: 'https://cdn.simpleicons.org/cplusplus/00599C' },
    { name: 'Python', logo: 'https://cdn.simpleicons.org/python/3776AB' },
    { name: 'JavaScript', logo: 'https://cdn.simpleicons.org/javascript/F7DF1E' },
    { name: 'TypeScript', logo: 'https://cdn.simpleicons.org/typescript/3178C6' },
    { name: 'Java', logo: 'https://cdn.simpleicons.org/openjdk/EA2D2E' },
    { name: 'React', logo: 'https://cdn.simpleicons.org/react/61DAFB' },
    { name: 'Node.js', logo: 'https://cdn.simpleicons.org/nodedotjs/339933' },
    { name: 'Express', logo: 'https://cdn.simpleicons.org/express/000000' },
    { name: 'Tailwind CSS', logo: 'https://cdn.simpleicons.org/tailwindcss/06B6D4' },
    { name: 'Docker', logo: 'https://cdn.simpleicons.org/docker/2496ED' },
    { name: 'GitHub', logo: 'https://cdn.simpleicons.org/github/181717' },
    { name: 'MongoDB', logo: 'https://cdn.simpleicons.org/mongodb/47A248' },
    { name: 'HTML5', logo: 'https://cdn.simpleicons.org/html5/E34F26' },
    { name: 'CSS3', logo: 'https://cdn.simpleicons.org/css/1572B6' },
    { name: 'Swift', logo: 'https://cdn.simpleicons.org/swift/F05138' },
    { name: 'Flask', logo: 'https://cdn.simpleicons.org/flask/000000' },
    { name: 'OpenCV', logo: 'https://cdn.simpleicons.org/opencv/5C3EE8' },
    { name: 'Git', logo: 'https://cdn.simpleicons.org/git/F05032' },
    { name: 'VS Code', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
    { name: 'Arduino', logo: 'https://cdn.simpleicons.org/arduino/00979D' },
    { name: 'Raspberry Pi', logo: 'https://cdn.simpleicons.org/raspberrypi/A22846' },
    { name: 'Ubuntu', logo: 'https://cdn.simpleicons.org/ubuntu/E95420' },
    { name: 'Prisma', logo: 'https://cdn.simpleicons.org/prisma/2D3748' },
    { name: 'Jest', logo: 'https://cdn.simpleicons.org/jest/C21325' },
    { name: 'AWS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
    { name: 'SQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg' },
    { name: 'Netlify', logo: 'https://cdn.simpleicons.org/netlify/00C7B7' },
    { name: 'SolidWorks', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/solidworks/solidworks-original.svg', fallback: solidworksLogo },
    { name: 'FPGA Board', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xilinx/xilinx-original.svg', fallback: fpgaChipLogo },
    { name: 'Beagle Board', logo: 'https://irc.beagleboard.org/static/images/logos/logo/beagleboard-embedded/beaglebaord-embedded.svg' }
  ];

  return (
    <section id="skill" className="skills-modern">
      <h1>Core <span>Skills</span></h1>
      <p className="section-lead">Most relevant tools and technologies I use to build full-stack, AI, and embedded projects.</p>

      <div className="skills-logo-grid">
        {coreSkills.map((skill) => (
          <div key={skill.name} className="skill-logo-card">
            <img
              src={skill.logo}
              alt={`${skill.name} logo`}
              className="skill-logo"
              loading="lazy"
              onError={(e) => {
                if (skill.fallback) {
                  e.currentTarget.src = skill.fallback;
                }
              }}
            />
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
