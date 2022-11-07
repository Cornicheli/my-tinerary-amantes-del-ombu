import React from "react";
import { useState } from "react";
import "./ButtonNav.css";
import { Link as NavLink } from "react-router-dom";

function ButtonNav(props) {
    let { name1, name2} = props;
    let [mostrarOcultar, setMostrarOcultar] = useState(false);

    //funcion para mostrar el menu
    let hide = () => {
        setMostrarOcultar(!mostrarOcultar);
    };

    return (
        <div>
            {mostrarOcultar ? (
                <>
                    <img className="img" onClick={hide} src="https://cdn-icons-png.flaticon.com/512/3240/3240696.png"  width="40" height="30"alt="-" />
                    <ul className="ul">
                    <NavLink to="/SignUp">
                        <li className="a">
                            <a className="ancorLink" href="-">{name1} Cities</a>
                        </li>
                    </NavLink>
                    <NavLink to="/login">
                        <li className="b">
                            <a className="ancorLink"  href="-">{name2}Hotels </a>
                        </li>
                    </NavLink>

                    </ul>
                </>
            ) : (
                <img className="img" onClick={hide} src="https://cdn-icons-png.flaticon.com/512/3240/3240694.png"  width="40" height="30" alt="-" />
            )}

        </div>
    );}
export{ButtonNav}