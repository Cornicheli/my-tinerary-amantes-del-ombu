import React from "react"
import './Header.css'
import {ButtonNav} from './ButtonNav'
import {ButtonNav1} from './ButtonNav1'

function Header() {
        return(
        <>
        <header className="body">
                <div className="buton-nav">
                    <h2 className="title">Pages</h2>
                    <ButtonNav1 name3="Hotels" name4="Home" name5="Cities"/>
                </div>
                <div className="buton-nav">
                    <h2 className="title">Login - Register</h2>
                    <ButtonNav name1="Sign In" name2="Sign Up"/>
                </div>
        </header>
        </>
        )
}
export { Header }