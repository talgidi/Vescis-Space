import React from 'react';
import Footer from './Footer.css';

const Footer = ({ classStyle, imageSrc, imageAlt }) => (
	<div className={`${classStyle}`}>
        <img src={imageSrc} alt={imageAlt} />
    </div>
);

export default Footer;