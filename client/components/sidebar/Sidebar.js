import "./Sidebar.scss";
import React, {Component} from "react"
export default class SideBar extends Component {

    constructor(props) {
        super(props)
        this.changeFormation = this.changeFormation.bind(this);
    }

    componentWillMount(){
        this.state = {formation: this.props.defaultFormation};
    }

    render() {
        return (
            <div className="sidebar-container">
                <div>
                    <h3>Formaciones</h3>
                    <select onChange={this.changeFormation}>
                        <option value="433">4-3-3</option>
                        <option value="442">4-4-2</option>

                    </select>
                    <div className="formation-container">
                        <div className={'f'+this.state.formation}></div>
                    </div>
                </div>
            </div>
        )
    }

    changeFormation(event) {
        console.log('changing state old state'+this.state.formation);
        var formationValue = event.nativeEvent.target.value;
        this.setState({formation: formationValue});
        this.props.updateFormation(formationValue);
    }

}