import '../styles/main.css';
import { Component } from "react";
import InsideGameBox from './gamebox/InsideGameBox';
import InsideControllerBox from './controller/InsideControllerBox';


class Parent extends Component {

    constructor() {
        super();
        this.state = {
            rows: 11,
            value: 10,
            mushroomHorizontal: 0,
            mushroomVertical: 0,
            score: 0
        }
    }

    random = () => {
        const number = Math.floor(Math.random() * 230);
        return number;
    }

    // Gaunam horizontalias koordinates
    getHorizontalValue = (children) => {
        this.setState({mushroomHorizontal: children});
    }

    // Gaunam vertikales koordinates
    getVerticalValue = (children) => {
        this.setState({mushroomVertical: children});
    }

    // Tikrinam ar laimėjom
    // Resetinam pradinius parametrus
    win = () => {
        let score = this.state.score;
        if ( this.state.mushroomHorizontal > 260 && this.state.mushroomHorizontal < 330 && this.state.mushroomVertical > 240 && this.state.mushroomVertical < 290) {
            this.setState({
                mushroomHorizontal: this.random(), 
                mushroomVertical: this.random()
            });
            this.setState({ score: ++score });
        }
    }

    render() {
        return(
            <div className="parent">
                <h1>Slider Game</h1>
                <div className="parent-content">

                    {/* Game box */}
                    <InsideGameBox 
                        rows={this.state.rows} 
                        mushroomHorizontal={this.state.mushroomHorizontal}
                        mushroomVertical={this.state.mushroomVertical} 
                    />

                    {/* Score box */}
                    <div className="score">
                        <span>Score:</span>
                        <p>{this.state.score}</p>
                    </div>

                    {/* Conreoller box */}
                    <div className="controller-block">
                        <InsideControllerBox 
                            value={this.state.value} 
                            mushroomHorizontal={this.getHorizontalValue}
                            mushroomVertical={this.getVerticalValue} 
                            sliderVertical={this.state.mushroomVertical}
                            sliderHorizontal={this.state.mushroomHorizontal}
                            action={this.win} // Tikriname ar laimėjome
                        />
                    </div>

                </div>
            </div>
        )
    }
}

export default Parent;