import "./StackPlayers.scss";
import "../player/player.scss";
import React, {Component} from "react";
import Player from "../player/player";
export default class StackPlayers extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="stackPlayers">
                <h2>Sustitutos</h2>
                    <BenchPlayers players={this.props.players} openModalPlayer={this.props.openModalPlayer}/>
            </div>
        )
    }

}

function BenchPlayers({players,openModalPlayer}) {
    return (
        <div className="benchContainer">
            {
                players.map(player => {
                    return (

                       <Player key={player.id}  player={player} className="stackPlayer" openModalPlayer={openModalPlayer}/>
                    )
                })
            }
        </div>
    );
}