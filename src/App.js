import React, { useState} from 'react';
import './App.css';
import Hero from './components/hero';
import Navbar from './components/navbar';
import Projects from './components/projects';
import About from './components/about';
import Contact from './components/contact';

function App() {
  return (
    <div className="main">
      <Hero />
      <Navbar />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
