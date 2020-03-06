import React from "react"
import Fecha from "./Fecha"
import data from "../teams.js"
import "./styles/Partidos.css"

class Partidos extends React.Component {
    
        render(){
            const matches = data.partidos

            console.log(matches)

            const items = []

            for (const i in matches) {
                items.push(<Fecha part={matches[i]}
                    />)
            }

            return (
                <div className="partidos">
                {items}
                </div>
            )
        }
    
}

export default Partidos