import React, { useState} from 'react';
import { FaFileAlt } from 'react-icons/fa';
import { FaHtml5 } from 'react-icons/fa';
import { FaCss3Alt } from 'react-icons/fa';
import { FaJsSquare } from 'react-icons/fa';
import { FaReact } from 'react-icons/fa';
import { FaGitAlt } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';

const About = () => {
    return (
        <div className="about" id="about">
            <div className="heading">
                <h1>About</h1>
                <div className="line"></div>
            </div>
            <div className="resume">
                <a><FaFileAlt /> My Resume</a>
            </div>
            <div className="tech-stack">
                <div className="heading">
                    <h3>My Tech-Stack</h3>
                </div>
                <div className="items">
                    <span class="item"><FaHtml5 /></span>
                    <span class="item"><FaCss3Alt /></span>
                    <span class="item"><FaJsSquare /></span>
                    <span class="item"><FaReact /></span>
                    <span class="item"><FaGitAlt /></span>
                    <span class="item"><FaGithub /></span>
                </div>
                
            </div>
        </div>
    )
}

export default About;