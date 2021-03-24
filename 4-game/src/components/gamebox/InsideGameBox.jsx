import { Component } from "react";
import GameBox from "./GameBox";
import mushroom from '../../images/mushroom.png';
import basket from '../../images/basket.png';

class InsideGameBox extends Component {

    render() {
        return(
            <GameBox rows={this.props.rows}>
                <div className="item" style={{left: this.props.mushroomHorizontal, top: this.props.mushroomVertical}}>
                    <img src={mushroom} alt="mushroom"/>
                </div>
                <div className="basket">
                    <img src={basket} alt="basket"/>
                </div>
            </GameBox>
        )
    }
}

export default InsideGameBox; 