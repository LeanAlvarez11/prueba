import React from "react"
import "./styles/header.css"

function Header(props){
        return (
            <header style={{
                backgroundImage: `url(${props.fondo})`
            }}>
                <p>Northside Youth Soccer League</p>
            </header>
        )
}

export default Header