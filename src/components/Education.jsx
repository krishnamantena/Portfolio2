import React from 'react';
import './Education.css';

const Education = () => {
  return (
    <div className="education-container">
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

      {/* Education Section */}
      <section className="education-section">
        <h1 className="section-title">Education</h1>
        <p className="section-subtitle">My academic journey</p>
        
        <div className="timeline">
          {/* Education Item 1 */}
          <div className="timeline-item">
            <div className="timeline-content">
              <h3 className="degree">Bachelor of Technology in Computer Science and Engineering</h3>
              <p className="institution">KL University</p>
              <ul className="achievements">
                <li>Specialized in Artificial Intelligence and Machine Learning</li>
                <li>Published research on "Fairness in Predicting Recidivism Score" </li>
                <li>Graduated with distinction (GPA: 9.4)</li>
                
              </ul>
            </div>
            <div className="timeline-date">
              <p>2021 - 2025</p>
              <p>Vijayawada,India</p>
            </div>
          </div>
          
          {/* Education Item 2 */}
          <div className="timeline-item">
            <div className="timeline-content">
              <h3 className="degree">Intermediate(Board of Intermediate Education, Andhra Pradesh)</h3>
              <p className="institution">Narayana Junior Collage</p>
              <ul className="achievements">
                <li>Minor in Mathematics,Physics,Chemistry</li>
                <li>Secured a score of 82.6%</li>
                
              </ul>
            </div>
            <div className="timeline-date">
              <p>2020 - 2021</p>
              <p>Vijayawada,India</p>
            </div>
          </div>
          
          {/* Education Item 3 */}
          <div className="timeline-item">
            <div className="timeline-content">
              <h3 className="degree">High School (Centeral Borad of Secondary Education)</h3>
              <p className="institution">Bharatiya Vidya Bhavan</p>
              <ul className="achievements">
                <li>Secured a score of 84%</li>
                
              </ul>
            </div>
            <div className="timeline-date">
              <p>2018 - 2019</p>
              <p>TadepalliGudem, India</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Education;