import React from "react"
import Partidos from "./Partidos"
import Header from "./Header"
import Barra from "./Barra"
class App extends React.Component {
    
        render(){
            return(
                <div>
                <Header fondo="https://www.gamereactor.es/media/10/_2561043b.jpg"/>
                <Partidos />
                <Barra />
                </div>
            )
        }
    
}

export default App