import React from 'react'
import '../componentes/CityCard.css'

// funcionando correcto

export default function CitiesCard() {
return (
    <>
        <div className='filters'>

        <label className='inputs'>Filtro 1</label>
        <input className='selec' type="checkbox"/>

        <label className='inputs'>Serch Here</label>
        <input className='search' type="text"/>

    </div>

    <div className='boxes'>

        <div className='box2'>
            <h3>exhibition of cities</h3>

        <div className='cont-img'>
            <img className='image' src="https://img.traveltriangle.com/blog/wp-content/uploads/2019/11/Singapore-cover_13th-Mar.jpg" alt="" />
        </div>
        <div className ='cont-text'>
            <p>Europa</p>
            <p>Bergen</p>
        </div>

        </div>

        <div className='box2'>
            <h3>exhibition of cities</h3>

        <div className='cont-img'>
            <img className='image' src="https://ssl.tzoo-img.com/images/tzoo.18886.0.408419.Marina-Bay-Sands.jpg?width=412&spr=3" alt="" />
        </div>
        <div className ='cont-text'>  
            <p>Europa</p>
            <p>Amsterdam</p>
        </div>
    </div>

    <div className='box2'>
        <h3>exhibition of cities</h3>

        <div className='cont-img'>
            <img className='image' src="https://www.prevuemeetings.com/wp-content/uploads/2018/12/Dragonfly-Kingfisher-Lake-at-Gardens-by-the-Bay-photo-credit-Marklin-Ang.jpg" alt="" />
        </div>
        <div className ='cont-text'>
            <p>Europa</p>
            <p>Cartagena</p>
        </div>
    </div>

    <div className='box2'>
        <h3>exhibition of cities</h3>

        <div className='cont-img'>
            <img className='image' src="https://media.vietravel.com/images/NewsPicture/hangzhou.jpg" alt="" />
        </div>
        <div className ='cont-text'>
            <p>Europa</p>
            <p>Chiang Mai</p>
        </div>  
        </div>

    </div>

    </>
)
}

