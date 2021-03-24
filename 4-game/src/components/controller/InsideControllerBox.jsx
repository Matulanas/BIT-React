import { Component } from "react";
import ControllerBox from "./ControllerBox";
import Slider from 'react-rangeslider';
import 'react-rangeslider/lib/index.css';

class InsideControllerBox extends Component {

    
    onChangeHorizontal = (value) => {
      this.props.mushroomHorizontal(value);
    }

    onChangeVertical = (value) => {
      this.props.mushroomVertical(value);
    }


    render() {
      const labels = {
        0: '1',
        30: '2',
        60: '3',
        90: '4',
        120: '5',
        150: '6',
        180: '7',
        210: '8',
        240: '9',
        270: '10',
        300: '11',
      }
        return (
          <ControllerBox>
            <div>
              <span className="slidet-title">Horizontal</span>
              
              <Slider
                value={this.props.sliderHorizontal}
                labels={labels}
                max={300}
                orientation="vertical"
                onChange={this.onChangeHorizontal}
                onChangeComplete={this.props.action}
              />

            </div>
            <div>
              <span className="slidet-title">Vertical</span>
              
              <Slider
                value={this.props.sliderVertical}
                max={300}
                labels={labels}
                orientation="vertical"
                onChange={this.onChangeVertical}
                onChangeComplete={this.props.action} // Tikriname ar laimėjom ar ne
              />

            </div>
          </ControllerBox>
        )
    }
}

export default InsideControllerBox;