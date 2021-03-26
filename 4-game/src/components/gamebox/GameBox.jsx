import { v4 as uuidv4 } from 'uuid';

const GameBox = (props) => {

    // Renderinam languotą lentą
    const renderChequeredBox = () => {
        const size = props.rows * props.rows;
        let boxArray = [];
        for (let i = 0; i < size; i++) {
            boxArray.push(<div className="grid-square" key={uuidv4()}></div>);
        }
        return boxArray;
    }

    // Renderinam numerius viršuje ir šone
    const renderNumbers = () => {
        let boxNumbers = [];
        for (let i = 0; i < props.rows; i++) {
            boxNumbers.push(<div className="box-number" key={uuidv4()}>{i + 1}</div>);
        }
        return boxNumbers;
    }

    return(
        <div className="box">
            <div className="box-children" style={{width: props.rows * 30}}>
                {/* Atvaizduojam TOP numerius */}
                <div className="top-numbers">
                    {renderNumbers()}
                </div>

                {/* Atvaizduojam languotą lentą */}
                {renderChequeredBox()}

                {/* Atvaizduojam LEFT numerius */}
                <div className="left-numbers">
                    {renderNumbers()}
                </div>
                
                {/* Vaikas */}
                {props.children}
                
            </div>
        </div>
    )
}

export default GameBox;