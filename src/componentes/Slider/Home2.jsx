import React from 'react'
import "../../componentes/Slider/slider.css"

export default function Home2(props) {
    console.log(props)
    const range = props.range
    const start = 0
    const end = start + range
    const cities= props.cities
    
    const ciudades = (city) => (
      
        <div className="slider-event">
            <img src={city.photo} alt={city.name} className="slider-image" />
            <p className="slider-text">{city.name}</p>
        </div>
    )
  
    return (
            <div className="slider-container">
                <h4 className="slider-title">{props.text}</h4>
                <div className="slider-slider">
                    {cities?.slice(start, end).map(ciudades)}
                </div>
            </div>
    )
}




