import GameBox from "./GameBox";
import mushroom from '../../images/mushroom.png';
import basket from '../../images/basket.png';

const InsideGameBox = (props) => {

    return(
        <GameBox rows={props.rows}>
            <div className="item" style={{left: props.mushroomHorizontal, top: props.mushroomVertical}}>
                <img src={mushroom} alt="mushroom"/>
            </div>
            <div className="basket">
                <img src={basket} alt="basket"/>
            </div>
        </GameBox>
    )
}

export default InsideGameBox; 