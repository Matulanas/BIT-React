import { Component } from 'react';
import InsideBigBox from './InsideBigBox';



class InsideBigBoxMars extends Component {

    constructor () {
      super ();
      this.state = {
        color: 'red'
      }
    }
  
    
    
    render() {
      return(
        <InsideBigBox
            title={'Hello from Mars!'}
            text={'Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System, being larger than only Mercury. In English, Mars carries the name of the Roman god of war and is often referred to as the "Red Planet".'}
        />
      )
    }
  }

  export default InsideBigBoxMars;