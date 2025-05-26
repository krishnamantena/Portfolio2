import React from "react";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
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

      <section className="about-section" id="about">
        <h1 className="section-title">About Me</h1>
        <p className="section-subtitle">Get to know me</p>

        <div className="about-content">
          <div className="personal-info">
            <div className="info-item">
              <span className="info-label">Name:</span>
              <span className="info-value">Mantena Krishna Teja</span>
            </div>
            <div className="info-item">
              <span className="info-label">Based in:</span>
              <span className="info-value">Vijayawada, India</span>
            </div>
            <div className="info-item">
              <span className="info-label">Email:</span>
              <span className="info-value">
                <a href="mailto:krishnamantena06@gmail.com" className="email-link">
                  krishnamantena06@gmail.com
                </a>
              </span>
            </div>
            <div className="social-icons">
              <a href="https://www.linkedin.com/in/krishna-teja-mantena-98b61b283/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
              <a href="https://github.com/krishnamantena" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <FaGithub />
              </a>
              <a href="https://www.instagram.com/krishna_08_2003/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FaInstagram />
              </a>
            </div>
          </div>
          <div className="about-text">
            <p>
              I'm a passionate and curious Full Stack Developer from Vijayawada, India. I specialize in building scalable web applications and crafting seamless digital experiences that bridge the gap between design and functionality.
            </p>
             <br></br>
            <p>
              With a solid foundation in both frontend and backend technologies like React.js, Django, Spring Boot, and AWS, I enjoy bringing ideas to life through clean code and creative thinking. I believe that good software isn’t just about how it works — it’s also about how it feels.
            </p>
             <br></br>
            <p>
              Beyond development, I’m deeply interested in AI and automation. I’ve built projects involving deep learning and RPA, and I continuously explore new technologies that can make a real-world impact.
            </p>
            <br></br>
            <p>When I'm not coding, you'll find me experimenting with recipes, hiking through nature, or connecting with the developer community through local tech meetups. I’m always open to learning, collaborating, and embracing new challenges that push me to grow both professionally and personally.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;