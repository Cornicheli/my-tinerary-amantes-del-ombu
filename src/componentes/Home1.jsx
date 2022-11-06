import React from 'react'
import './Home1.css';
import {Header} from "../componentes/Header.jsx";


export default function Home1() {
return (
    <>
        {<Header/>}
        <main className="body">
            <div className='box-image'>
                <img className='logo-box' src="https://img.freepik.com/vector-premium/fondo-paisaje-atardecer-playa_23-2148169235.jpg" alt="" />
            </div>
            <div className='box-botom'>
                <button className='botom'>Cities</button>
                <button className='botom'>Hotel</button>
            </div>
        </main>
    </>
)
}
