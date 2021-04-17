import React, { Component } from 'react';

import AnimateText from '../AnimateText/AnimateText';

class MisionDerecho extends Component {

	constructor(props){
		super(props);
		this.state = {
			style4: 'hidden',
			style5: 'hidden',
			style6: 'hidden'
		}
	}

	componentDidMount() {
    window.onscroll = () => this.handleAnimation();
	}

	handleAnimation = () => {
		if(document.documentElement.scrollTop > 700){
			this.setState({
				style4: 'style4',
			});
		}

		if(document.documentElement.scrollTop > 800){
			this.setState({
				style5: 'style5',
			});
		}

		if(document.documentElement.scrollTop > 900){
			this.setState({
				style6: 'style6',
			});
		}
	};

	render(){
		return(
			<div className="principal">
				<AnimateText classStyle={this.state.style4} text='NUESTRA'/>
				<AnimateText classStyle={this.state.style5} text='MISI&#211;N'/>
				<AnimateText classStyle={this.state.style6} text='The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.'/>
			</div>
		);
	}
}
export default MisionDerecho;