import React from "react";

import Header from "./Componentes/Header/Header";
import Carrusel from "./Componentes/Carrusel";
import BloqueVescis from "./Componentes/BloqueVescis/BloqueVescis";

function App() {
  const vescisBlockData = {
    titleText: "This is an component text title!",
    paragraphText: "Dangelo didn't truly read de docs! Just kidding! =D",
    sourceImage:
      "https://i0.wp.com/wtfonline.mx/wp-content/uploads/2020/06/abella-danger-wtfonlinemx-1.jpg?fit=803%2C1024&ssl=1",
  };
  const vescisBlockDataAlt = {
    titleText: "Titulo Secundario",
    paragraphText: "Reutilizando Componente",
    sourceImage:
      "https://i0.wp.com/wtfonline.mx/wp-content/uploads/2020/06/abella-danger-wtfonlinemx-1.jpg?fit=803%2C1024&ssl=1",
  };

  return (
    <React.Fragment>
      <Header />
      <Carrusel />
      <BloqueVescis data={vescisBlockData} />
      <BloqueVescis data={vescisBlockDataAlt} />
    </React.Fragment>
  );
}
export default App;
