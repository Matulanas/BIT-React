import { Component } from 'react';
import Li from './Li';
import { digits } from '../shared/ul';
import { v4 as uuidv4 } from 'uuid';

class UlBox extends Component {

    constructor () {
      super ();
      this.state = {
        color: 'yellow'
      }
    }
  

  
    render() {
      return(
        <ul className="box" style={{borderColor: this.state.color}}>
            {
                digits.map(digit => <Li key={uuidv4()} li={digit.d} />)
            }
            {/* {
                letters.map(letter => <Li key={uuidv4()} color={'black'} li={letter.d} />)
            } */}
        </ul>
      )
    }
  }

  export default UlBox;