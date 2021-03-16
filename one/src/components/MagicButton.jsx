import { Component } from 'react';


class MagixButton extends Component {

    constructor () {
      super ();
    //   this.state = {
    //     color: 'red'
    //   }
    }
  
    // changeColor = () => { // <-- keičia steitą
    //     if('red' === this.state.color) {
    //         this.setState({color : 'orange'});
    //     } else {
    //         this.setState({color : 'red'});
    //     }
    // }

    changeColor = () => {
        this.props.action();
    }
  
    render() {
      return(
        <button className="myButton" style={{backgroundColor: this.props.color}} onClick={this.changeColor}>
            {this.props.bname}
        </button>
      )
    }
  }

  export default MagixButton;