import ControllerBox from "./ControllerBox";
import Slider from 'react-rangeslider';
import 'react-rangeslider/lib/index.css';


const InsideControllerBox = (props) => {

    const onChangeHorizontal = (value) => {
      props.mushroomHorizontal(value);
    }

    const onChangeVertical = (value) => {
      props.mushroomVertical(value);
    }

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
              value={props.sliderHorizontal}
              labels={labels}
              max={300}
              orientation="vertical"
              onChange={onChangeHorizontal}
              onChangeComplete={props.action}
            />

          </div>
          <div>
            <span className="slidet-title">Vertical</span>
            
            <Slider
              value={props.sliderVertical}
              max={300}
              labels={labels}
              orientation="vertical"
              onChange={onChangeVertical}
              onChangeComplete={props.action} // Tikriname ar laimėjom ar ne
            />

          </div>
        </ControllerBox>
      )
}

export default InsideControllerBox;