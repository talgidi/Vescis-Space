import React, { Component } from 'react';

import AnimateText from '../AnimateText/AnimateText';

class VescisIzquierdo extends Component {

	constructor(props){
		super(props);
		this.state = {
			style1: 'style1',
			style2: 'style2',
			style3: 'style3'
		}
	}

	componentDidMount() {
    window.onscroll = () => this.handleAnimation();
	}

	handleAnimation = () => {
		if(document.documentElement.scrollTop > 0){
			this.setState({
				style1: 'style1',
			});
		}

		if(document.documentElement.scrollTop > 100){
			this.setState({
				style2: 'style2',
			});
		}

		if(document.documentElement.scrollTop > 200){
			this.setState({
				style3: 'style3',
			});
		}
	};

	render(){
		return(
			<div className="principal">
				<AnimateText classStyle={this.state.style1} text='¿ QUIENES SON'/>
				<AnimateText classStyle={this.state.style2} text='VESCIS ?'/>
				<AnimateText classStyle={this.state.style3} text='The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.'/>
			</div>
		);
	}
}
export default VescisIzquierdo;