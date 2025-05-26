import React, { useState } from 'react';
import './Projects.css';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const projects = [
    {
      id: 1,
      title: "Multimodal Emotion Recognition",
      description: "The Multimodal Emotion Recognition system is an AI-powered project designed to identify human emotions by analyzing multiple data streams—specifically facial expressions, speech signals, and textual content.",
      tags: ["ReactJs", "RESTAPI", "DEEP LEARNING"],
      featured: true,
      category: "React",
      fullDescription: <p>The Multimodal Emotion Recognition system is an AI-powered project designed to identify human emotions by analyzing multiple data streams—specifically facial expressions, speech signals, and textual content. By leveraging deep learning and machine learning techniques, this system interprets emotional states with high accuracy, making it valuable for applications like human-computer interaction, virtual assistants, and mental health monitoring.

Key Features:

🎭 Facial Emotion Detection using CNNs to analyze micro-expressions from video frames.

🗣️ Speech Emotion Analysis using MFCC features and LSTM networks to capture tone and pitch variations.

💬 Textual Sentiment Interpretation using NLP models like BERT for context-aware emotion classification.

🤝 Fusion Model that combines all three modalities for a more reliable and holistic emotion prediction.

📈 Real-time prediction capabilities with a user-friendly interface.

Technologies Used:

Python, OpenCV, TensorFlow/Keras, BERT

Librosa for audio feature extraction

Flask for backend integration

Streamlit (or React) for the frontend interface</p>
    },
    {
      id: 2,
      title: "Online Bidding System",
      description: "Architected a secure digital bidding platform with role-based authentication. Structured an auction management system supporting real-time bid updates, improving bidding efficiency.",
      tags: ["SpringBoot", "MySQL", "Hibenate"],
      featured: true,
      category: "SpringBoot",
      fullDescription: <p>The Online Bidding System is a web-based platform that facilitates transparent and competitive auctions for products and services. Designed to streamline the bidding process, the system allows users to list items, place real-time bids, and track auction progress with live updates. The platform ensures a secure and user-friendly experience for both sellers and buyers.

Key Features:

🛒 User Roles: Separate dashboards for admins, sellers, and buyers with role-specific functionalities.

🕒 Real-Time Bidding: Dynamic countdown timers and instant bid updates using WebSockets or polling.

📦 Product Listings: Sellers can add products with images, descriptions, and starting prices.

📈 Bid History & Winner Notification: Track all bids on a product and notify the highest bidder when the auction ends.

🔐 Authentication & Authorization: Secure login system using JWT or session management.

📊 Admin Panel: Manage users, auctions, categories, and platform analytics.

Technologies Used:

Frontend: HTML, CSS, JavaScript, React.js or Bootstrap

Backend: Django / Spring Boot

Database: MySQL or PostgreSQL

Real-Time Bidding: WebSockets / AJAX

Authentication: JWT / Django Authentication</p>
    },
    {
      id: 3,
      title: "Movie Search App",
      description: "Designed a Django-based web application  that allows users to search for movies, view detailed information, and explore trending or top-rated films using which user can discover and explore content by title, genre, release year, or rating.",
      tags: ["Django", "API", "MySQL"],
      featured: true,
      category: "Django",
      fullDescription: <p>The Movie Search App is a responsive web application that allows users to search for movies, view detailed information, and explore trending or top-rated films using real-time data from an external API. The app offers a clean and intuitive interface, making it easy for users to discover and explore content by title, genre, release year, or rating.

Key Features:

🔍 Search Functionality: Instantly fetches movie results as users type using real-time API integration.

📝 Detailed Movie Info: Displays posters, overviews, ratings, release dates, genres, and cast information.

🌐 API Integration: Utilizes the TMDb (The Movie Database) API for accurate and up-to-date movie data.

🎨 Responsive UI: Mobile-friendly design built with modern UI frameworks.

⭐ Top Rated & Trending Sections: Highlights popular movies and user favorites.

💾 Watchlist Feature (optional): Users can save movies to a personal list for later viewing.</p>
    }
  ];

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="projects-container">
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

      {/* Projects Section */}
      <section className="projects-section">
        <h1 className="section-title">Projects</h1>
        <p className="section-subtitle">Check out some of my recent work</p>
        
        {/* Project Filters */}
        <div className="project-filters">
          <button className="filter-button">ReactJs</button>
          <button className="filter-button">Meachine Larning</button>
          <button className="filter-button">Deep Larning</button>
          <button className="filter-button">Django</button>
          <button className="filter-button">RestAPI</button>
          <button className="filter-button">MYSql</button>
          <button className="filter-button">SpringBoot</button>
          <button className="filter-button">JavaScript</button>
          <button className="filter-button">CSS</button>
        </div>
        
        {/* Projects Grid */}
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag, index) => (
                  <span key={index} className="project-tag">{tag}</span>
                ))}
              </div>
              <div className="project-actions">
                <button className="view-button" onClick={() => openModal(project)}>View Details</button>
                
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Project Details Modal */}
      {isModalOpen && (
        <div className="project-modal">
          <div className="modal-content">
            <button className="close-button" onClick={closeModal}>×</button>
            <h2>{selectedProject.title}</h2>
            <div className="modal-tags">
              {selectedProject.tags.map((tag, index) => (
                <span key={index} className="modal-tag">{tag}</span>
              ))}
            </div>
            <p className="modal-description">{selectedProject.fullDescription}</p>
            <div className="modal-actions">
              <a href="#" className="modal-code-button">View Code</a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;