import "./Sidebar.scss";
import React, {Component} from "react"
export default class SideBar extends Component{

    constructor(props){
        super(props)
    }

    render(){
        return (
            <div className="sidebar-container">
                <div>
                    <h3>Formaciones</h3>
                    <select>
                        <option defaultValue={0}>Selecciona una Formacion</option>
                        <option> 4-4-3</option>
                        <option> 4-4-4</option>
                    </select>
                </div>
            </div>
        )
    }

}