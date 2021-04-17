import React from 'react';

const Imagenes = ({ classStyle, imageSrc, imageAlt }) => (
	<div className={`${classStyle}`}>
        <img src={imageSrc} alt={imageAlt} />
    </div>
);

export default Imagenes;