//require("./style.css");
import React, { Component } from "react";
import ReactDOM from "react-dom";
import Stadium from "./components/stadium"


class App extends Component {

    render() {
        return (
            <div>Squad Drawer
                <Stadium/>
            </div>
        )
    }

}
ReactDOM.render(<App />, document.getElementById("root"));
