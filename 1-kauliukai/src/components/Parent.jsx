import { Component } from "react";

import DiceBox from './DiceBox';
import Button from './Button';
import { getRandomInt } from '../functions';

class Parent extends Component {

    constructor () {
        super();
        this.state = {
            number: getRandomInt()
        }
    }


    click = () => {
        this.setState({ number: getRandomInt() });
    }

    render () {
        return (
            <div className="box">
                <DiceBox number={this.state.number} />
                <Button action={this.click}/>
            </div>

        )
    }
}

export default Parent;