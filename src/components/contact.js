import React, { useState} from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { AiFillGithub } from 'react-icons/ai';


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
                <a href="https://github.com/Legion555" target="_blank"><div className="item">
                    <AiFillGithub />
                    <p>Github</p>
                </div></a>
            </div>
        </div>
    )
}

export default Contact;