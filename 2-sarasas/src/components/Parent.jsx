import { Component } from "react";
import List from './List';
import { menu } from '../shared/menu';
import Button from "./Button";


class Parent extends Component {

    constructor () {
        super();
        this.state = {
            color: 'yellow',
            array: menu
        }
    }

    sort = () => {
        let list = this.state.array;
        list.sort((a, b) => a.item.localeCompare(b.item))
        this.setState({array: list})
    }

    unsort = () => {
        let list = this.state.array;
        list.sort((a, b) => b.item.localeCompare(a.item))
        this.setState({array: list})
    }

    default = () => {
        let list = this.state.array;
        list.sort(function (a, b) { 
            return a.id - b.id  ||  a.item.localeCompare(b.item)
        });
        this.setState({array: list})
    }

    render () {
        return (
            <div className="box">
                <List array={this.state.array} color={this.state.color} />
                <div className="buttons-box">
                    <Button action={this.sort} name="ABC" />
                    <Button action={this.unsort} name="CBA" />
                    <Button action={this.default} name="DEFAULT" />
                </div>
            </div>
        )
    }
}

export default Parent;