import { Component } from 'react';

import MagicButton from './MagicButton';

import { Button } from '@material-ui/core';

import { Alert } from '@material-ui/lab';

class TwoButtonBox extends Component {

    constructor () {
      super ();
      this.state = {
        color1: 'red',
        color2: 'orange'
      }
    }

    changeColor1 = () => { // <-- keičia steitą
        if('red' === this.state.color1) {
            this.setState({color1 : 'orange'});
        } else {
            this.setState({color1 : 'red'});
        }
    }

    changeColor2 = () => { // <-- keičia steitą
        if('red' === this.state.color2) {
            this.setState({color2 : 'orange'});
        } else {
            this.setState({color2 : 'red'});
        }
    }
  


    render() {
      return(
        <div className="box" style={{borderColor: this.state.color}}>
          <MagicButton action={ this.changeColor1 } color={this.state.color2} bname={'ONE'} />
          <MagicButton action={ this.changeColor2 } color={this.state.color1} bname={'TEN'} />
          <Button>Material UI</Button>
          <Alert severity="warning">This is a warning alert — check it out!</Alert>
        </div>
      )
    }
  }

  export default TwoButtonBox;