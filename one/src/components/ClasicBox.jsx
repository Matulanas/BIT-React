import { Component } from 'react';
import BoxDigit from './BoxDigit';
import ColorButton from './ColorButton';

import {normalStyle} from '../shared/styles';
import ColorHolder from './ColorHolder';


class ClasicBox extends Component {

    constructor () {
      super ();
      this.state = {
        clock: new Date(),
        color: 'white'
      }
    }
  
    componentDidMount() {
      this.timerID = setInterval(()=>this.tictac(), 1000); // <-- metodas tiktac kas 1000ms
    }
  
    componentWillUnmount() { // <-- unsetina 
      clearInterval(this.timerID);
    }
  
    tictac() {
      this.setState({ clock: new Date() });
    }
  
    doClick3 = (color) => { // <-- keičia steitą
        this.setState({color : color});
    }
  
    render() {
    //   console.log('RENDER')
      return(
        <div className="box" style={{borderColor: this.state.color}}>
          <BoxDigit boxStyle={normalStyle} number={this.state.clock.toLocaleTimeString()} />
          <button className="myButton" onClick={() => this.doClick3('red')}>{this.props.button1Title}</button>
          <ColorButton actionMethod={this.doClick3} title={this.props.button2Title} />
          <ColorHolder showColor={this.state.clock.getSeconds()%2} />
        </div>
      )
    }
  }

  export default ClasicBox;