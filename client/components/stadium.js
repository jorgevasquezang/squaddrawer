import "./Stadium.scss";
import React, {Component} from "react";
import Player from "./Player";
import squad from "./squadOne.json";
import SideBar from "./Sidebar"
export default class Stadium extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="flexbox">
                        <div className="stadium-container">
                            <div className="stadium center">
                                <LoadMainSquad squad={squad.players.main}/>
                            </div>
                        </div>
                    </div>
                    <SideBar/>
                </div>
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