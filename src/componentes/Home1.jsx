import React from 'react'
import './Home1.css';
import {Header} from "../componentes/Header.jsx";


export default function Home1() {
return (
    <>
        {<Header/>}
        <main className="body">
            <div>
                <h1>Turisfront</h1>
            </div>
            <div className='box-botom'>
                <button className='botom'>Cities</button>
                <button className='botom'>Hotel</button>
            </div>
        </main>
    </>
)
}
