import React from 'react';
import '../styles/footer.scss';
import { FaReact } from 'react-icons/fa';
import { FaSass } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className="footer">
            <h3 className="text">Made with <FaReact /> and <FaSass /></h3>
        </div>
    );
};

export default Footer