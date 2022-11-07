import React from 'react'
import { useState } from "react";
import "./ButtonNav.css";
import { Link as NavLink } from "react-router-dom";

function ButtonNav1(props) {

    let { n3, n4,n5 } = props;
    let [mostraryOcultar, setMostraryOcultar] = useState(false);

    let hidee = () =>{
        setMostraryOcultar(!mostraryOcultar)
    }
return(
    <div>
        {mostraryOcultar ? (
            <>
                <img className="img" onClick={hidee} src="https://cdn-icons-png.flaticon.com/512/3240/3240696.png"  width="40" height="30"alt="-" />
                <ul className="ul">
                <NavLink to="/hotels">
                    <li className="a">
                        <a className="ancord-link" href="-">{n3}Sign In</a>
                    </li>
                </NavLink>

                <NavLink to="/">
                    <li className="b">
                        <a className="ancord-link"  href="-">{n4}Sign Ip</a>
                    </li>
                </NavLink>

                <NavLink to="/cities">
                    <li className="c">
                        <a className="ancord-link"  href="-">{n5}</a>
                    </li>
                </NavLink>

                </ul>
            </>
        ) : (
            <img className="img" onClick={hidee} src="https://cdn-icons-png.flaticon.com/512/3240/3240694.png"  width="40" height="30" alt="-" />
        )}
    </div>
);
}

export {ButtonNav1}