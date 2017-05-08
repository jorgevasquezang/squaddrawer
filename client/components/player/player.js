import "./player.scss"
import React, {Component} from "react";

const ASSET_URL = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/215059/';
export default class Player extends Component {

    constructor(props) {
        super(props);
        this.loadModal = this.loadModal.bind(this);
    }

    loadModal() {
        if (!!this.props.openModalPlayer) {
            this.props.openModalPlayer(this.props.player);
        }

    }

    render() {
        const {player} = this.props;
        return (
            <div className={this.props.className ? 'playerProfile ' + this.props.className : 'playerProfile absolute'}
                 id={this.props.id} onClick={this.loadModal}>
                <div className="playerCard">
                    <div className="playerCard-picture"/>
                </div>
                <div className="playerName">{player.name}</div>
                {/*<div className="playerAge">{player.dob}</div>*/}
                <div className="playerPosition">{player.pos}</div>
            </div>
        )
    }

}