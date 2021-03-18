// import { Component } from "react";
// import { getRandomInt } from "../functions";


const DiceBox = props => {

    return (
        <div className="dice-box">
            <p>{ props.number }</p>
        </div>    
    )

}

// class DiceBox extends Component {

//     // constructor() {
//     //     super ();
//     //     this.state = {
//     //         randomNumber: getRandomInt()
//     //     }
//     // }

//     // changeNumber = () => {
//     //     this.setState({ randomNumber: 3})
//     // }

//     render() {

//         return (
//             <div className="dice-box">
//                 <p>{ this.state.randomNumber }</p>
//             </div>    
//         )
//     }
// }

export default DiceBox;