/**
 * Created by jvasquez on 5/1/2017.
 */
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
                <Stadium defaultFormation="433"/>
                <StackPlayers/>
            </div>
        )
    }

}
