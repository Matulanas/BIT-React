import { Component } from 'react';


class BigBox extends Component {

    constructor () {
      super ();
      this.state = {
        color: 'red'
      }
    }
  

    
    render() {
      return(
        <div className="box" style={{borderColor: this.state.color}}>
          {this.props.children}
        </div>
      )
    }
  }

  export default BigBox;