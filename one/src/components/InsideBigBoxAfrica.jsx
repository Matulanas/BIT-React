import { Component } from 'react';
import InsideBigBox from './InsideBigBox';


class InsideBigBoxAfrica extends Component {

    constructor () {
      super ();
      this.state = {
        color: 'red'
      }
    }
  
    
    
    render() {
      return(
        <InsideBigBox
            title={'Hello from Africa!'}
            text={'Africa is the world\'s second-largest and second-most populous continent, after Asia in both cases.'}
        />
      )
    }
  }

  export default InsideBigBoxAfrica;