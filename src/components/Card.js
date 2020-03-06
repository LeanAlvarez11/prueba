import React from "react" 
import "./styles/Card.css"

class Card extends React.Component {
    render (){
        return (
            <div className="contMatches d-flex justify-content-center align-content-center">
                <div className="matches d-flex flex-column flex-wrap justify-content-around">
                    {/* <div className="row center"> */}
                        <div className="">
                            <img src={this.props.team1} className="clubes"/>
                        </div>
                        <div className="texto d-flex flex-column align-items-center justify-content-center">
                            <p id="titulo">{this.props.title}</p>
                            <p id="subtitulo">{this.props.subtitle}</p>
                        </div>
                        <div>
                            <img src={this.props.team2} className="clubes"/>
                        </div>
                        {/* </div> */}
                    {/* </div> */}
                </div>
            </div>
        )
    }
}

export default Card
