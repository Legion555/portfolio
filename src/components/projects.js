import React, { useState} from 'react';

const Projects = () => {
    const [projects, setProjects] = useState([
        {name: 'project 1',
        description: 'description blablabla',
        category: 'javascript'
        },
        {name: 'project 2',
        description: 'description blablabla',
        category: 'javascript'
        },
        {name: 'project 3',
        description: 'description blablabla',
        category: 'javascript'
        },
        {name: 'project 4',
        description: 'description blablabla',
        category: 'database'
        }
    ]);

    return (
        <div className="projects" id="projects">
            <h1 className="heading">Projects</h1>
            <div className="heading-line"></div>
            <div className="project-cards-container">
                {projects.map(item => 
                    <Project name={item.name} />
                )}
            </div>
            
        </div>
    )
}

const Project = (props) => {
    return (
        <div className="project-card">
            <h1 className="title">{props.name}</h1>
            <div className="overlay">
                <a>Visit</a>
                <a>Source code</a>
            </div>
        </div>
    );
}

export default Projects;