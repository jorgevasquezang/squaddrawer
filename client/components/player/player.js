import "./player.scss"
import React, {Component} from "react";
const ASSET_URL = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/215059/';
export default class Player extends Component {

    constructor(props) {
        super(props);
        this.changePlayer = this.changePlayer.bind(this);
        this.state = {changePlayer: "changePlayer-hidden"}
    }

    render() {
        const {player} = this.props;
        return (
            <div className={this.props.className ? 'playerProfile ' + this.props.className : 'playerProfile'}
                 id={this.props.id} onClick={this.changePlayer}>
                <div className="playerCard">
                    <img className="playerCard-picture"/>
                </div>
                <div className="playerName">{player.name}</div>
                {/*<div className="playerAge">{player.dob}</div>*/}
                <div className="playerPosition">{player.pos}</div>
                <div id="changePlayerPopup" className={this.state.changePlayer}>
                    Change this player
                </div>
            </div>
        )
    }

    changePlayer() {
        this.setState({changePlayer: 'changePlayer'})
    }

}