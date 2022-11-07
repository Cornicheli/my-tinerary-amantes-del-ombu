import React from 'react'
import CitiesCard from './CityCard.jsx'

export default function CardCities() {
    return (
    <>
        <div className='filters'>

            <label className='inputs'>Filtro 1</label>
            <input className='selec' type="checkbox"/>

            <label className='inputs'>Serch Here</label>
        <input className='search' type="text"/>
        </div>

        <div className='boxes'>
            <CitiesCard/>
        </div>
    </>
    )
}

