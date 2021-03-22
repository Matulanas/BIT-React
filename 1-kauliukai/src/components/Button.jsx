import { Component } from "react";


class Button extends Component {

    // constructor () {
    //     super();
    // }


    click = () => {
        this.props.action();
    }

    render() {
        return(
            <button className="myButton" onClick={this.click}>Ridenti kauliuką</button>
        )
    }
}

export default Button;