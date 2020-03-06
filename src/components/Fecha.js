import React from "react"
import Card from "./Card.js"
import "./styles/Fecha.css"
class Fecha extends React.Component {
        render(){
            const partis = this.props.part

            const items = []
            var dia
            for (const i in partis) {
                items.push(<Card 
                    title={partis[i].nombre}
                    subtitle={partis[i].horario}
                    team1={partis[i].equipo1}
                    team2={partis[i].equipo2}
                    />)
                dia= partis[i].dia
            }
            
            return (
                <div>
                    <div className="d-flex justify-content-center align-content-center fecha">
                        <p>{dia}</p>
                    </div>
                    {items}
                </div>
            )
        }
}

export default Fecha