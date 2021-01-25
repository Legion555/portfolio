import React from 'react';
import '../styles/projects.scss';
//Images
import ProjectLexicon from '../assets/project-lexicon.png';
import ProjectOra from '../assets/project-ora.png';
//Icons
import { DiMongodb, DiReact } from 'react-icons/di';
import { IoLogoNodejs } from 'react-icons/io';

export default function Projects() {
    return (
        <div className="projects" id="projects">
            <div className="heading">
                <h1>Projects</h1>
                <div className="line"></div>
            </div>
            <div className="project-cards-container">
                <div className="project-card">
                    <img src={ProjectLexicon} className="image image-one" alt="project lexicon screenshot"></img>
                    <div className="details">
                        <h1>Note Taking Application for desktop</h1>
                        <p className="stack">Stack used: <DiMongodb className="icon" style={{color: "#409E46"}} />
                        <span className="icon" style={{color: "#CA7C70"}}>ex</span>
                            <DiReact className="icon" style={{color: "#27608D"}} />
                            <IoLogoNodejs className="icon" style={{color: "#99C14E"}} /></p>
                        <p>This project showcases my ability to create a backend API and connect it to the frontend. Users can create an account and add collections with notes.</p>
                        <a href="https://github.com/Legion555/project-lexicon" target="_blank" rel="noreferrer"><button>Source code</button></a>
                        <a href="https://legion-project-lexicon.herokuapp.com/" target="_blank" rel="noreferrer"><button>Live app</button></a>
                    </div>
                </div>
                <div className="project-card">
                    <img src={ProjectOra} className="image image-two" alt="to do list screenshot"></img>
                    <div className="details">
                        <h1>School Management Platform</h1>
                        <p className="stack">Stack used: <DiMongodb className="icon" style={{color: "#409E46"}} />
                        <span className="icon" style={{color: "#CA7C70"}}>ex</span>
                            <DiReact className="icon" style={{color: "#27608D"}} />
                            <IoLogoNodejs className="icon" style={{color: "#99C14E"}} /></p>
                        <p>The admin can add schools and assign managers to them, whereas the managers can create classes and assign teachers to them.</p>
                        <a href="https://github.com/Legion555/project-ora" target="_blank" rel="noreferrer"><button>Source code</button></a>
                        <a href="https://project-ora.herokuapp.com/" target="_blank" rel="noreferrer"><button>Live app</button></a>
                    </div>
                </div>
            </div>
        </div>
    )
}