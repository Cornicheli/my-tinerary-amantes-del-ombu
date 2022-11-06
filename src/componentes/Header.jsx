import React from "react";
import './Header.css';
import ButtonNav from "./ButtonNav";



function Header() {
    return (
        <header className="header">
            <div className="ancors">
                <ButtonNav title ='Home' link ='#' n1='Cities' n2='Hotels' />
                <ButtonNav title ='Register' link ='#' n1='Sing In' n2='Sing Up' />
            </div>
        </header>
    )
}
export {Header}