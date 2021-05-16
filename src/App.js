import React from "react";

import Header from "./Componentes/Header/Header";
import Carrusel from "./Componentes/Carrusel";
import BloqueVescis from "./Componentes/BloqueVescis/BloqueVescis";

function App() {
  const vescisBlockData = {
    titleText: "This is an component text title!",
    paragraphText: "Dangelo didn't truly read de docs! Just kidding! =D",
    sourceImage: "https://www.xnxx.com/",
  };

  return (
    <React.Fragment>
      <Header />
      <Carrusel />
      <BloqueVescis data={vescisBlockData} />
    </React.Fragment>
  );
}
export default App;
