import "./Stadium.scss";
import React, {Component} from "react";
import Player from "./Player";
import squad from "./squadTwo.json";
export default class Stadium extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.log(squad.players.forwards);
    }


    render() {
        return (<div className="stadium">
            <div className="forwards">
                <LoadMainSquad squad={squad.players.forwards}/>
            </div>
            <div className="midfielders">
                <LoadMainSquad squad={squad.players.midfielders}/>
            </div>
            <div className="defenders">
                <LoadMainSquad squad={squad.players.defenders}/>
            </div>
            <div className="goalkeeper">
                <Player player={squad.players.goalkeeper}/>
            </div>
        </div>);
    }
}

function LoadMainSquad({squad}) {
    return (
        <div>{
            squad.map(player => {
                return (
                    <Player player={player} key={player.name}/>
                )
            })
        }
        </div>

    );
}