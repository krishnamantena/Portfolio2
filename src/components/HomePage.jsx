import React from 'react';
import './HomePage.css';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const HomePage = () => {
  return (
    <div className="home-container">
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

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <p className="greeting">Hi there, I'm</p>
          <h1 className="name">Mantena Krishna Teja</h1>
          <h2 className="title">Web Developer</h2>
          <p className="description">
            
          </p>
          <div className="cta-buttons">
  <a href="projects">
    <button className="primary-button">View My Work</button>
  </a>
  <a href="contact">
    <button className="secondary-button">Get In Touch</button>
  </a>
</div>

          
          {/* Social Icons */}
          <div className="social-icons">
            <a href="https://www.linkedin.com/in/krishna-teja-mantena-98b61b283/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="social-icon" />
            </a>
            <a href="https://github.com/krishnamantena" target="_blank" rel="noopener noreferrer">
              <FaGithub className="social-icon" />
            </a>
            <a href="mailto:krishnamantena06@gmail.com">
              <FaEnvelope className="social-icon" />
            </a>
          </div>
        </div>
        <div className="hero-image">
          <img src="https://media.licdn.com/dms/image/v2/D5603AQGdP2dJVvdTEA/profile-displayphoto-shrink_400_400/B56ZcG3om8HoAk-/0/1748166937488?e=1753920000&v=beta&t=Rgm5PjaLSBOTAbS6tpgAAb25mvdrYdI-qeAwNwjF4QE" alt="Mantena Krishna Teja" />
        </div>
        <div className="scroll-indicator">Have a GREAT DAY!</div>
      </section>
    </div>
  );
};

export default HomePage;