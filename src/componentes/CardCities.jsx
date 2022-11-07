import React from 'react'
import ChecBoxCities from './ChecBoxCities.jsx'
import CitiesCard from './CityCard.jsx'

export default function CardCities() {
    return (
    <>
        <div className='filters'>

        <ChecBoxCities/>

            <label className='inputs'>Serch Here</label>
        <input className='search' type="text"/>
        </div>

        <div className='boxes'>
            <CitiesCard/>
        </div>
    </>
    )
}

