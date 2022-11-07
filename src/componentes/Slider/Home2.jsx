import React from "react";
import "../../componentes/Slider/slider.css";
import "../../Styles/arrows.css";
import { useState } from "react";
import Arrow from "./Arrow";

export default function Home2(props) {
  const range = props.range;
  const [start, setStart] = useState(0);
  const end = start + range;
  const cities = props.cities;

  function right() {
    if (end >= 11) {
      {
        setStart(0);
      }
    } else {
      setStart(start + range);
    }
  }

  function left() {
    if (setStart(start - range)) {
      setStart(0);
    } else {
      setStart(start - range);
    }
  }
  const ciudades = (city) => (
    <div className="slider-event ">
      <img src={city.photo} alt={city.name} className="slider-image" />
      <p className="slider-text">{city.name}</p>
    </div>
  );

  return (
    <div className="slider-container">
      <h4 className="slider-title">{props.text}</h4>
      <div className="slider-slider">
        <Arrow icon={"⋘"} function={left} />
        <Arrow icon={"⋙"} function={right} />
        {cities.slice(start, end).map(ciudades)}
      </div>
    </div>
  );
}
