import React, { useState } from 'react'

export default function ButtonNav(props) {
    let { n1, n2, Link, title } = props
    let [mostratOcultar, setMostratOcultar] = useState(false);
    let hide = () => {
        setMostratOcultar(!mostratOcultar)
    }
    return (
        <div>
            {mostratOcultar ? (
                <>
                <p onClick={hide}>{title}</p>
                <ul>
                    <li>
                        <a href={Link}>{n1}</a>
                    </li>
                    <li>
                        <a href={Link}>{n2}</a>
                    </li>
                </ul>
                </>
            ) : (
                <p onClick={hide}>{title}</p>
            )}
        </div>
    )};