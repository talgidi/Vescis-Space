import React from 'react';

import Header from './Componentes/Header/Header';
import Carrusel from './Componentes/Carrusel';
import BloqueVescis from './Componentes/BloqueVescis/BloqueVescis';
import BloqueMision from './Componentes/BloqueMision/BloqueMision';


function App() {
	
	return(
		<React.Fragment>
		<Header />
		<Carrusel />
		<BloqueVescis />
		<BloqueMision />
		</React.Fragment>
	);
}
export default App;
