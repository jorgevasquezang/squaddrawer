import "./StackPlayers.scss";
import React, {Component} from "react";
import squad from "./squadOne.json";
const ASSET_URL = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/215059/';
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
                    <SubstitutePlayers players={squad.players}/>
            </div>
        )
    }

}

function SubstitutePlayers({players}) {
    return (
        <div>
            {
                players.map(player => {
                    return (

                        <div className="playerProfile" key={player.name}>
                            <div className="playerCard">
                                <img src={ASSET_URL+ player.asset} className="playerCard-picture"/>
                            </div>
                            <div className="wrapperDesc">
                                <div className="playerName">{player.name}</div>
                                <div className="playerAge">{player.dob}</div>
                                <div className="playerPosition">{player.pos}</div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
}