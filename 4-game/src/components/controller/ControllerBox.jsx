import { Component } from "react";

class ControllerBox extends Component {

    render() {
        return(
            <div className="controller-box">
                {this.props.children}
            </div>
        )
    }
}

export default ControllerBox;