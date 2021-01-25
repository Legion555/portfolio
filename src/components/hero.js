import React from 'react';
import '../styles/hero.scss';
import { Link } from 'react-scroll';

const Hero = () => {
    return (
      <div className="hero">
        <div className="header">
          <h1>joshua_lausberg</h1>
          <p>front-end_developer</p>
        </div>
        <div className="links">
          <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
          >About</Link>
          <Link
              activeClass="active"
              to="projects"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
          >Projects</Link>
          <Link
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
          >Contact</Link>
        </div>
      </div>
    );
  }

export default Hero