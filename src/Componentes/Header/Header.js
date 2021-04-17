import React, { Component } from 'react';
import './Header.css';

import LogotipoVescis from './Logo VESCIS Arte final (1).png';
import IsotipoVescis from './VESCIS recurso backgrounds (2).png';


class Header extends Component {

	constructor(props){
		super(props);
		
	}
	
	render(){
	
		return(
		
			<header>
				<div className="div-header">
					<img className="logotipo" src={LogotipoVescis} />
					<img className="isotipo" src={IsotipoVescis} />
				</div>
			</header>
		)
	}
}

export default Header;