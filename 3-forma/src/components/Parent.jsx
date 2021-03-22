import '../css/main.css';
import { Component } from "react";
import ClassicForm from './ClassicForm';
import Button from './Button';
import List from './List';

class Parent extends Component {

    constructor () {
        super();
        this.state = {
            text: '',
            textArray: '',
            errorMsg: ''
        }
    }

    // Gaunam duomenis iš TEXTAREA
    getDataFromChild = (childValue) => {
        this.setState({text: childValue});
    }
    
    // Pridedam duomenis į textArray ir resetinam text
    saveValue = () => {
        if (this.state.text !== '') {
            this.setState({ textArray: [...this.state.textArray, this.state.text] });
            this.setState({ text: '', errorMsg: ''});
        } else {
            this.setState({errorMsg: '⚠ Please type something'})
        }
    }


    render () {
        return (
            <div className="block">

                <div className="block-text">
                    <div className="input-value">
                        <span>Input Value: </span>
                        {this.state.text}
                    </div>
                    <div className="box-header">Input Values List</div>
                    <List array={this.state.textArray}/>
                </div>
                <div className="block-form">
                    <span className="error">{this.state.errorMsg}</span>
                    <div className="box-header">Confirm Form</div>
                    <ClassicForm dataFromChild={this.getDataFromChild} value={this.state.text}/>
                    <Button action={this.saveValue} />
                </div>

            </div>
        )
    }
}

export default Parent;