import React from 'react';
import '../styles/contact.scss';
//Icons
import { AiOutlineMail, AiFillGithub, AiFillLinkedin } from 'react-icons/ai';


const Contact = () => {
    return (
        <div className="contact" id="contact">
            <div className="heading">
                <h1>Contact me</h1>
                <div className="line"></div>
            </div>
            <div className="links">
                <a href="mailto:joshlausberg555@gmail.com"><div className="item">
                    <AiOutlineMail />
                    <p>Email</p>
                </div></a>
                <a href="https://github.com/Legion555" target="_blank" rel="noreferrer"><div className="item">
                    <AiFillGithub />
                    <p>Github</p>
                </div></a>
                <a href="https://www.linkedin.com/in/joshualausberg/" target="_blank" rel="noreferrer"><div className="item">
                    <AiFillLinkedin />
                    <p>LinkedIn</p>
                </div></a>
            </div>
        </div>
    )
}

export default Contact;