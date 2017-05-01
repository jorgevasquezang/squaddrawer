import styles from "./stadium.scss";
import React, { Component } from "react";
import Player from "./player";
//import squadGame from "./squad.json"
export default class Stadium extends Component {

    constructor(props) {
        super(props);

        this._isHome = true;
        this._game = null;
    }

    swapSides() {
        this._isHome = !this._isHome;
    }
    get isHome() {
        return this._isHome;
    }

    get game() {
        return this._game;
    }

    componentDidMount() {
    }


    render() {
        return (<div className="stadium">
                    
                </div>);
    }

}

function PlayerList({players}) {
    return (
        <div className="team js-team">
            {
                players.map(player => {
                return (
                        <div key={player.name}>
                            <div className="js-player player" data-name={player.name} data-side={player.side} data-x={player.x} data-y={player.y}></div>
                            <div className="player__label"><span>{player.name}</span></div>
                            <div className="player__img"><img src={ASSET_URL + player.asset} /></div>
                            <div className="player__card"> </div>
                            <div className="player__placeholder"></div>
                        </div>
                    )
                })
            }
        </div>
    );
}