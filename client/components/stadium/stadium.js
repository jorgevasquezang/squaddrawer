import "./stadium.scss";
import React, {Component} from "react";
import Player from "../player/player";
import SideBar from "../sidebar/Sidebar";
export default class Stadium extends Component {

    constructor(props) {
        super(props);
        this.state = {formation: this.props.defaultFormation};
        this.updateFormation = this.updateFormation.bind(this);
    }

    render() {
        return (
                <div className="row">
                    <div className="flexbox">
                        <div className="stadium-container">
                            <div className={"stadium center squad-"+ this.state.formation}>
                                <LoadMainSquad squad={this.props.players} openModalPlayer={this.props.openModalPlayer}/>
                            </div>
                        </div>
                    </div>
                    <SideBar defaultFormation={this.state.formation}  updateFormation={this.updateFormation} />
                </div>
           );
    }

    updateFormation(newFormation){
        this.setState({formation: newFormation});
    }

}

function LoadMainSquad({squad, openModalPlayer}) {
    return (
        <div>{
            squad.map(player => {
                return (
                    <Player player={player} key={player.id} id={'p' + player.id} openModalPlayer={openModalPlayer}/>
                )
            })
        }
        </div>

    );
}