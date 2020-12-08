import React from 'react';
import { FaFileAlt, FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaGitAlt, FaGithub } from 'react-icons/fa';
import { DiMongodb, DiReact } from 'react-icons/di';
import { IoLogoNodejs } from 'react-icons/io';

const About = () => {
    return (
        <div className="about" id="about">
            <div className="heading">
                <h1>About</h1>
                <div className="line"></div>
            </div>
            <div className="description">
                <p>I am a <strong>human</strong>.<br/><br/>
                Therefore, I am <strong>ambitious</strong>.<br/>
                I have an <i>insationable thirst</i> for <strong>progress</strong>.<br/><br/>
                Within me, lies one of the <i>tenets of mankind</i>; the <strong>desire to improve</strong>.<br/><br/>
                If we are not <strong>progressing</strong>, then our <i>time goes to waste</i>.<br/>
                This is what I base my life on.
                </p>
                <br/><br/>
                <a href="../JoshuaLausbergResume.pdf"><FaFileAlt /> My Resume</a>
            </div>
            <div className="tech-stack">
                <div className="heading">
                    <h3>My Tech-Stack</h3>
                </div>
                <div className="items">
                    <span class="item"><FaHtml5 style={{color: "#E44D26"}} /></span>
                    <span class="item"><FaCss3Alt style={{color: "#264DE4"}} /></span>
                    <span class="item"><FaJsSquare style={{color: "#E9D63D"}} /></span>
                    <br/>
                    <span class="item"><FaGitAlt style={{color: "#E84D31"}} /></span>
                    <span class="item"><FaGithub style={{color: "#fff"}} /></span>
                    <br/>
                    <span class="item"><DiMongodb style={{color: "#409E46"}} /></span>
                    <span class="item" style={{color: "#CA7C70"}}>ex</span>
                    <span class="item"><FaReact style={{color: "#27608D"}} /></span>
                    <span class="item"><IoLogoNodejs style={{color: "#99C14E"}} /></span>
                </div>
            </div>
        </div>
    )
}

export default About;