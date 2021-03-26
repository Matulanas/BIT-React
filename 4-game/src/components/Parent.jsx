import '../styles/main.css';
import { useState } from "react";
import InsideGameBox from './gamebox/InsideGameBox';
import InsideControllerBox from './controller/InsideControllerBox';


const Parent = () => {

    const rows = 11;

    const [value, setValue] = useState({ mushroomHorizontal: 0, mushroomVertical: 0});
    const [scores, setScore] = useState({ score: 0});

    const random = () => {
        const number = Math.floor(Math.random() * 230);
        return number;
    }

    // Gaunam horizontalias koordinates
    const getHorizontalValue = (children) => {
        setValue({...value, mushroomHorizontal: children});
    }

    // Gaunam vertikales koordinates
    const getVerticalValue = (children) => {
        setValue({...value, mushroomVertical: children});
    }

    // Tikrinam ar laimėjom
    // Resetinam pradinius parametrus
    const win = () => {
        let score = scores.score;
        if ( value.mushroomHorizontal > 260 && value.mushroomHorizontal < 330 && value.mushroomVertical > 240 && value.mushroomVertical < 290) {
            setValue({mushroomVertical: random(), mushroomHorizontal: random()});
            setScore({ score: score + 1 })
        }
    }

    return(
        <div className="parent">
            <h1>Slider Game</h1>
            <div className="parent-content">

                {/* Game box */}
                <InsideGameBox 
                    rows={rows} 
                    mushroomHorizontal={value.mushroomHorizontal}
                    mushroomVertical={value.mushroomVertical} 
                />

                {/* Score box */}
                <div className="score">
                    <span>Score:</span>
                    <p>{scores.score}</p>
                </div>

                {/* Conreoller box */}
                <div className="controller-block">
                    <InsideControllerBox 
                        value={value} 
                        mushroomHorizontal={getHorizontalValue}
                        mushroomVertical={getVerticalValue} 
                        sliderVertical={value.mushroomVertical} // Slaideris
                        sliderHorizontal={value.mushroomHorizontal} // Slaideris
                        action={win} // Tikriname ar laimėjome
                    />
                </div>

            </div>
        </div>
    )
}

export default Parent;