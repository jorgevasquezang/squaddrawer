import "./stadium/stadium.scss"
import React, {Component} from "react";
import Stadium from "./stadium/stadium";
import StackPlayers from "./stackPlayers/StackPlayers";
import ModalPlayer from "./modalPlayer/ModalPlayer";
import squad from "./squadOne.json";

export default class SquadBuilder extends Component {

    constructor(props) {
        super(props);
        this.toggleModal = this.toggleModal.bind(this);
        this.openModalPlayer = this.openModalPlayer.bind(this);
        this.changePlayer = this.changePlayer.bind(this);
        this.copy = this.copy.bind(this);
        this.state = {isOpen: false, player: {}};
    }

    toggleModal() {
        this.setState({isOpen: false});
    }

    openModalPlayer(player) {
        this.setState({isOpen: true});
        this.setState({player});
    }

    changePlayer(oldPlayer, newPlayer) {
        // const newPlayer = squad.players.filt
        const oldIndex = squad.players
            .findIndex(player => player == oldPlayer);

        const newIndex = squad.players
            .findIndex(player => player == oldPlayer);


       squad.players[oldIndex] = this.copy(Object.assign({}, newPlayer), oldPlayer);
        console.log(squad.players[oldIndex]);

        squad.players[newIndex] = this.copy(Object.assign({}, oldPlayer), newPlayer);
        console.log(squad.players[newIndex]);
        this.toggleModal();

    }

    copy(obj, player) {
        var copy = Object.create(Object.getPrototypeOf(obj));
        var propNames = Object.getOwnPropertyNames(obj);
        propNames.forEach(function (name) {

            if (name == "id") {

                var props = {
                    writable: true,
                    configurable: true,
                    value: player.id
                };
                Object.defineProperty(copy, name, props);
            } else if (name == "main") {
                var props = {
                    writable: true,
                    configurable: true,
                    value: player.main
                };
                Object.defineProperty(copy, name, props);
            } else {
                var desc = Object.getOwnPropertyDescriptor(obj, name);
                Object.defineProperty(copy, name, desc);
            }
        });
        return copy;
    }


    render() {
        return (
            <div>
                <h1 className="center">Alianza Lima 2017</h1>
                <div className="container">
                    <Stadium defaultFormation="433" openModalPlayer={this.openModalPlayer}
                             players={squad.players.filter(player => player.main)}/>
                    <StackPlayers openModalPlayer={this.openModalPlayer}
                                  players={squad.players.filter(player => !player.main)}/>
                </div>
                <ModalPlayer changePlayer={this.changePlayer} show={this.state.isOpen} onClose={this.toggleModal}
                             player={this.state.player} squad={squad.players}/>
            </div>
        )
    }

}
