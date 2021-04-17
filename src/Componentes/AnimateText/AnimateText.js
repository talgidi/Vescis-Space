import React, { Component } from 'react';

import './AnimateText.css';

const AnimateText = ({ classStyle, text }) => (
	<div className={`${classStyle}`}>
        <div><p>{text}</p></div>
    </div>
);

export default AnimateText;
