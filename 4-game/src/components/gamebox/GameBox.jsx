import { Component } from "react";
import { v4 as uuidv4 } from 'uuid';

class GameBox extends Component {

    constructor(props) {
        super();
        this.state= {
            rows: props.rows // Dėl išsidėstymo turi būti: rows % 2 !== 0
        }
        this.hequeredBox = this.renderChequeredBox();
        this.renderNumbers = this.renderNumbers();
    }

    // Renderinam languotą lentą
    renderChequeredBox = () => {
        const size = this.state.rows * this.state.rows;
        let boxArray = [];
        for (let i = 0; i < size; i++) {
            boxArray.push(<div className="grid-square" key={uuidv4()}></div>);
        }
        return boxArray;
    }

    // Renderinam numerius viršuje ir šone
    renderNumbers = () => {
        let boxNumbers = [];
        for (let i = 0; i < this.state.rows; i++) {
            boxNumbers.push(<div className="box-number" key={uuidv4()}>{i + 1}</div>);
        }
        return boxNumbers;
    }

    render() {
        return(
            <div className="box">
                <div className="box-children" style={{width: this.state.rows * 30}}>
                    {/* Atvaizduojam TOP numerius */}
                    <div className="top-numbers">
                        {this.renderNumbers}
                    </div>

                    {/* Atvaizduojam languotą lentą */}
                    {this.hequeredBox}

                    {/* Atvaizduojam LEFT numerius */}
                    <div className="left-numbers">
                        {this.renderNumbers}
                    </div>
                    
                    {/* Vaikas */}
                    {this.props.children}
                    
                </div>
            </div>
        )
    }
}

export default GameBox;