import React from 'react';
import './Skills.css';

const Skills = () => {
  const skills = [
    { name: 'C', level: 85 },
    { name: 'Java', level: 90 },
    { name: 'Python', level: 80 },
    { name: 'React', level: 80 },
    { name: 'SpringBoot', level: 70 },
    { name: 'Django', level: 80 },
    { name: 'MySQL', level: 75 },
    { name: 'Meachine Larning', level: 80 },
    { name: 'Operating System', level: 85 },
    { name: 'AWS', level: 70 },
    { name: 'Automation', level: 75 },
   
  ];

  return (
    <div className="skills-container">
      {/* Transparent Navbar */}
      <nav className="transparent-navbar">
        <div className="navbar-brand">MKT.</div>
        <div className="navbar-links">
         <a href="\">Home</a>
          <a href="about">About</a>
          <a href="education">Education</a>
          <a href="skills">Skills</a>
          <a href="projects">Projects</a>
          <a href="contact">Contact</a>
        </div>
      </nav>

      {/* Skills Section */}
      <section className="skills-section">
        <h1 className="section-title">Skills</h1>
        <p className="section-subtitle">My technical proficiency</p>
        
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className="skill-card"
              style={{ '--skill-level': `${skill.level}%` }}
            >
              <div className="skill-name">{skill.name}</div>
              <div className="skill-level">
                <div className="skill-level-bar"></div>
                <span className="skill-percent">{skill.level}%</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Skills;