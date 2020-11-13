import React, { useState} from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
    return (
        <div className="navbar">
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
    )
}

export default Navbar;