import React, { Component } from "react";

import "./BloqueVescis.css";

import Imagenes from "../Imagenes/Imagenes";

import VescisIzquierdo from "./VescisIzquierdo";

import imagenVescis from "./sound-space-3851251.jpg";

class BloqueVescis extends Component {
  render() {
    const internalData = this.props.data;
    return (
      <div className="vescisBloque">
        <h2>{internalData.titleText}</h2>
        <p>{internalData.paragraphText}</p>
        <img
          src={`${internalData.sourceImage}`}
          alt="This is a text for testing purposes."
          width="50"
        />
      </div>
    );
  }
}

export default BloqueVescis;
