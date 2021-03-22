import React, { Component } from 'react';
import Slider from 'react-rangeslider';
import 'react-rangeslider/lib/index.css';
 
class VolumeSlider extends Component {
  constructor() {
    super();
    this.state = {
      volumeLeft: 0,
      volumeRight: 0
    }
  }
 
  handleOnChangeLeft = (value) => {
    console.log('go', value);
    this.setState({
      volumeLeft: value
    })
  }
  handleOnChangeRight = (value) => {
    this.setState({
      volumeRight: value
    })
  }

  onChangeComplete = (value) => {
    console.log('end', value);
  }
 
  render() {
    return (
      <div className="box line">
          <div className="slider-box">
            <span>LEFT</span>
            <Slider
              value={this.state.volumeLeft}
              orientation="vertical"
              onChange={this.handleOnChangeLeft}
              onChangeComplete = {this.onChangeComplete}
              max={11}
              labels={{ 1: '1', 2: '2', 3: '3', 4: '4', 5: '5', 6: '6', 7: '7', 8:'8', 9: '9', 10: '10', 11: '11'}}
            />
          </div>
          <div className="slider-box">
            <span>RIGHT</span>
            <Slider
              value={this.state.volumeRight}
              orientation="vertical"
              onChange={this.handleOnChangeRight}
              max={11}
              labels={{ 1: '1', 2: '2', 3: '3', 4: '4', 5: '5', 6: '6', 7: '7', 8:'8', 9: '9', 10: '10', 11: '11'}}
            />
          </div>
      </div>
    )
  }
}

export default VolumeSlider;