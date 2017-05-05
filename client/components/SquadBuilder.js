import "./stadium/stadium.scss"
import React, { Component } from "react";
import Stadium from "./stadium/stadium";
import StackPlayers from "./stackPlayers/StackPlayers";

export default class SquadBuilder extends Component {

    constructor(props){
        super(props);
    }

    render() {
        return (
            <div>
                <h1 className="center">Alianza Lima 2017</h1>
                    <div className="container">
                    <Stadium defaultFormation="433"/>
                    <StackPlayers/>
                </div>
            </div>
        )
    }

}
