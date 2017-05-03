/**
 * Created by jvasquez on 5/1/2017.
 */
import React, { Component } from "react";
import Stadium from "./Stadium";
import StackPlayers from "./StackPlayers";

export default class SquadBuilder extends Component {

    render() {
        return (
            <div>
                <h1 className="center">Alianza Lima 2017</h1>
                <Stadium/>
                <StackPlayers/>
            </div>
        )
    }

}
