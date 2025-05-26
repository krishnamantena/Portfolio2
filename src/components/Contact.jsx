import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, subject, message } = formData;
    
    // Using mailto to send the email
    window.location.href = `mailto:krishnamantena06@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage: ${message}`
    )}`;
    
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="contact-container">
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

      {/* Contact Section */}
      <section className="contact-section">
        <h1 className="section-title">Contact Me</h1>
        <p className="section-subtitle">Looking to partner or work together? Reach out through the form and I'll get back to you soon.</p>
        
        <div className="contact-content">
          {/* Contact Info */}
          <div className="contact-info">
            <div className="info-item">
              <h3>Email</h3>
              <p>krishnamantena08@gmail.com</p>
            </div>
            <div className="info-item">
              <h3>Phone</h3>
              <p>+91 9346245037</p>
            </div>
            <div className="info-item">
              <h3>Location</h3>
              <p>Vijayawada, India</p>
            </div>
          </div>
          
          {/* Contact Form */}
          <form className="contact-form" onSubmit={handleSubmit}>
            <h3 className="form-title">Let's get in touch</h3>
            
            <div className="form-group double">
              <div className="input-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="input-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            
            <div className="form-group">
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            
            <button type="submit" className="submit-button">Send Message</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;