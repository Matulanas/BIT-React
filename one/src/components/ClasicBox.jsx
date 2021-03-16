import { Component } from 'react';
import BoxDigit from './BoxDigit';
import {normalStyle} from '../shared/styles';


class ClasicBox extends Component {

    constructor () {
      super ();
      this.state = {
        clock: new Date(),
        color: 'white'
      }
    //   console.log('CONSTRUCT')
      // this.doClick = this.doClick.bind(this); // <-- pririšam funkciją
    }
  
    componentDidMount() { // <-- setina
    //   console.log('MOUNT');
      this.timerID = setInterval(()=>this.tictac(), 1000); // <-- metodas tiktac kas 1000ms
    }
  
    componentWillUnmount() { // <-- unsetina 
    //   console.log('UNMOUNT');
      clearInterval(this.timerID);
    }
  
    tictac() {
    //   console.log('TIC-TAK');
      this.setState({ clock: new Date() });
    }
  
    // doClick() {
    //   console.log('Hello!', this);
    //   this.setState({color : 'red'});
    // }
  
    doClick = () => {
      console.log('Chick!', this);
      if(this.state.color === 'red') {
        this.setState({color : 'white'});
      } else {
        this.setState({color : 'red'});
      }
    }
    doClick3 = (color) => {
        this.setState({color : color});
    }
  
    render() {
    //   console.log('RENDER')
      return(
        <div className="box" style={{borderColor: this.state.color}}>
          <BoxDigit boxStyle={normalStyle} number={this.state.clock.toLocaleTimeString()} />
          <button className="myButton" onClick={() => this.doClick3('red')}>Make red</button>
          <button className="myButton" onClick={() => this.doClick3('yellow')}>Make yellow</button>
        </div>
      )
    }
  }

  export default ClasicBox;