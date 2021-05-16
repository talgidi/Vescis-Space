import React, { Component } from "react";

import "./BloqueVescis.css";

import Imagenes from "../Imagenes/Imagenes";

import VescisIzquierdo from "./VescisIzquierdo";

import imagenVescis from "./sound-space-3851251.jpg";

class BloqueVescis extends Component {
  render() {
    const data = this.props.data;
    return (
      <div className="vescisBloque">
        <h2>{data.titleText}</h2>
        <p>{data.paragraphText}</p>
        <img
          src="{data.sourceImage}"
          alt="This is a text for testing purposes."
        />
      </div>
    );
  }
}

export default BloqueVescis;
