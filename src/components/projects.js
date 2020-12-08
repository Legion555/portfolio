import React from 'react';
import ProjectOra from '../assets/project-ora.jpg';
import toDoList from '../assets/to-do-list.jpg';
import { DiMongodb, DiReact } from 'react-icons/di';
import { IoLogoNodejs } from 'react-icons/io';

const Projects = () => {
    return (
        <div className="projects" id="projects">
            <div className="heading">
                <h1>Projects</h1>
                <div className="line"></div>
            </div>
            <div className="project-cards-container">
                <div className="project-card">
                    <div className="details">
                        <div className="image image-one">
                            <img src={ProjectOra}></img>
                        </div>
                        <div className="text">
                            <h1>Student Management Platform</h1>
                            <p className="stack">Stack used: <DiMongodb className="icon" style={{color: "#409E46"}} />
                            <span className="icon" style={{color: "#CA7C70"}}>ex</span>
                             <DiReact className="icon" style={{color: "#27608D"}} />
                             <IoLogoNodejs className="icon" style={{color: "#99C14E"}} /></p>
                            <p>Owing to my passion for Edu-Tech, I decided to build a student management platform.<br/><br/>
                            I use JWT for user authentication and MongoDB as the database.<br/>
                            The main purpose is to create classes and add students to them, so that student scores can be recorded.</p>
                            <a href="https://github.com/Legion555/project-ora" target="_blank"><button>Source code</button></a>
                            <a href="https://project-ora.herokuapp.com/" target="_blank"><button>Live app</button></a>
                        </div>
                    </div>
                </div>
                <div className="line"></div>
                <div className="project-card">
                    <div className="details">
                        <div className="text">
                            <h1>MERN to do list</h1>
                            <p className="stack">Stack used: <DiMongodb className="icon" style={{color: "#409E46"}} />
                            <span className="icon" style={{color: "#CA7C70"}}>ex</span>
                             <DiReact className="icon" style={{color: "#27608D"}} />
                             <IoLogoNodejs className="icon" style={{color: "#99C14E"}} /></p>
                            <p>This is where I first started working with JWT authentication and the MERN stack.<br/>
                            I wanted to build on more than just a simple to do list.<br/><br/>
                            I added user authentication and connected it to MongoDB, and this is the result.</p>
                            <a href="https://github.com/Legion555/mern-to-do" target="_blank"><button>Source code</button></a>
                            <a href="https://legion-jwt-app.herokuapp.com/" target="_blank"><button>Live app</button></a>
                        </div>
                        <div className="image image-two">
                            <img src={toDoList}></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects;