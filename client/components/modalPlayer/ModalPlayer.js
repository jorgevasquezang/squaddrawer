import React, {Component} from "react";
import "./modalPlayer.scss";
import Player from "../player/player";
import squadPlayers from "../squadOne.json";

export default class ModalPlayer extends Component {


    constructor(props) {
        super(props);
        this.state = {isOpen: false, playerToChange: null};
        this.listPlayers = this.listPlayers.bind(this);
        this.playerToChange = this.playerToChange.bind(this);
        this.changePlayerState = this.changePlayerState.bind(this);
        this.changePlayer = this.changePlayer.bind(this);
    }


    listPlayers() {

        return (
            <select onChange={this.changePlayerState}>
                <option key="0">Seleccionar Jugador</option>
                {
                    this.props.squad.filter(player => player.shirt !== this.props.player.shirt).map(player => {
                        return (
                            <option key={player.id} value={player.shirt}>{player.name}</option>
                        )
                    })

                }
            </select>

        )
    };

    playerToChange() {
        if (!!this.state.playerToChange) {
            return (
                <Player player={this.state.playerToChange} className="relative right" onClick={null}/>
            )
        } else {
            return null;
        }
    }

    changePlayerState(event) {
        const player = this.props.squad.filter(player => player.shirt == event.nativeEvent.target.value);
        this.setState({playerToChange: player[0]})
    }

    changePlayer() {
        this.props.changePlayer(this.props.player, this.state.playerToChange);
        this.props.changePlayer(this.state.playerToChange, this.props.player);
    }

    render() {
        if (!this.props.show) {
            return null;
        }

        return (
            <div id="myModal" className="modal">

                <div className="modal-content">
                    <div className="modal-header">
                        <span className="close" onClick={this.props.onClose}>&times;</span>
                        <h2>Cambiar Jugador</h2>
                    </div>
                    <div className="modal-body">
                        <Player player={this.props.player} className="relative left" onClick={null}/>
                        <div className="actionsContainer">
                            <div className="selectPlayer">
                                {this.listPlayers()}
                            </div>
                            <div className="buttonPlayer">
                                <button onClick={this.changePlayer}>Change Player</button>
                            </div>
                        </div>
                        <div className="changePlayer left">
                            {this.playerToChange()}
                        </div>
                    </div>
                    <div className="modal-footer">
                    </div>
                </div>
            </div>
        )
    }


}


ModalPlayer.propTypes = {
    onClose: React.PropTypes.func.isRequired,
    show: React.PropTypes.bool.isRequired,
    children: React.PropTypes.node,
    player: React.PropTypes.object.isRequired
};