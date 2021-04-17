import React, { Component } from 'react';

import './BloqueVescis.css';

import Imagenes from '../Imagenes/Imagenes';

import VescisIzquierdo from './VescisIzquierdo';

import imagenVescis from './sound-space-3851251.jpg';

class BloqueVescis extends Component{

	constructor(propiedades){
		super(propiedades);
		this.state = {
				estilo1 : 'estilo1'
		}
	}

	
	render(){
		return(
			<div className="vescisBloque">
				<VescisIzquierdo />
				<Imagenes imageSrc={imagenVescis} imageAlt="personas viendo obras de arte en un museo" classStyle={this.state.estilo1}/>
			</div>
		)
	}
}

export default BloqueVescis;