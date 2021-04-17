import React, { Component } from 'react';

import './BloqueMision.css';

import Imagenes from '../Imagenes/Imagenes';

import MisionDerecho from './MisionDerecho';

import imagenMision from './handshake-3382503.jpg';

class BloqueMision extends Component{

	constructor(propiedades){
		super(propiedades);
		this.state = {
				estilo2 : 'estilo2'
		}
	}

	
	render(){
		return(
			<div className="misionBloque">
				<Imagenes imageSrc={imagenMision} imageAlt="personas viendo obras de arte en un museo" classStyle={this.state.estilo2}/>
				<MisionDerecho />
			</div>
		)
	}
}

export default BloqueMision;