import "./StackPlayers.scss";
import "./player.scss";
import React, {Component} from "react";
import squad from "./squadOne.json";
import Player from "./Player";
export default class StackPlayers extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount(){
        console.log("Get json data "+ squad.players);
    }
    render() {
        return (
            <div className="stackPlayers">
                <h2>Substitutes</h2>
                    <BenchPlayers players={squad.players.bench}/>
            </div>
        )
    }

}

function BenchPlayers({players}) {
    return (
        <div>
            {
                players.map(player => {
                    return (

                       <Player player={player} key={player.id} className="stackPlayer"/>
                    )
                })
            }
        </div>
    );
}