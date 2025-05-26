import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/HomePage';
import About from './components/About';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Skills from './components/Skills';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="projects" element={<Projects/>}/>
          <Route path="education" element={<Education/>}/>
          <Route path="contact" element={<Contact/>}/>
          <Route path="skills" element={<Skills/>}/>
          {/* Add more routes as needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;