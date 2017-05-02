import "./Stadium.scss";
import React, {Component} from "react";
import Player from "./Player";
import squad from "./squadOne.json";
export default class Stadium extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.log(squad.players.forwards);
    }


    render() {
        return (<div className="stadium center">
                <LoadMainSquad squad={squad.players}/>
        </div>);
    }
}

function LoadMainSquad({squad}) {
    return (
        <div>{
            squad.map(player => {
                return (
                    <Player player={player} key={player.id} id={'p' + player.id}/>
                )
            })
        }
        </div>

    );
}