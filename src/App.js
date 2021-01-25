import React from 'react';
import './styles/App.scss';
import Hero from './components/hero';
import Navbar from './components/navbar';
import Projects from './components/projects';
import About from './components/about';
import Contact from './components/contact';
import Footer from './components/footer';

function App() {
  return (
    <div className="main">
      <Hero />
      <Navbar />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
