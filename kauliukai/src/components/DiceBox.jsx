import { Component } from "react";
// import { getRandomInt } from "../functions";


class DiceBox extends Component {

    constructor() {
        super ();
        this.state = {
            randomNumber: 1
        }
    }

    changeNumber = () => {
        this.setState({ randomNumber: 3})
    }

    render() {

        return (
            <div className="dice-box">
                <p>{ this.state.randomNumber }</p>
            </div>    
        )
    }
}

export default DiceBox;