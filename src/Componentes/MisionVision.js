import React, { Component } from 'react';
import '../Assets/Css/MisionVision.css';
import imagenMision from '../Assets/Imagenes/handshake-3382503.jpg';
import imagenVision from '../Assets/Imagenes/vr-3460451R.jpg';

class MisionVision extends Component {
	
	render(){
	
		return(
			<React.Fragment>
				<div className="principal-container" id="container-4">
					<div className="right-container" id="container-5">
						<img className="image-text" id="imagen-mision" src={imagenMision} />
					</div>

					<div className="left-container" id="container-6">
						<span className="text-vescis" id="text-nuestra">NUESTRA</span>
						<span className="text-vescis" id="text-mision">MISION</span>
						<p className="parrafos-text" id="parrafo-mision">The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>
					</div>
				</div>

				<div className="principal-container" id="container-7">
					<div className="left-container" id="container-8">
						<span className="text-vescis text-complete" id="text-y">Y</span>
						<span className="text-vescis text-complete" id="text-vision"> VISION</span>
						<p className="parrafos-text" id="parrafo-vision">The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>
					</div>
					
					<div className="right-container" id="container-9">
						<img className="image-text" id="imagen-vision" src={imagenVision} />
					</div>
				</div>
			</React.Fragment>
		)
	}
}

export default MisionVision;