import React, { Component } from 'react';
import BoilingVerdict from './BoilingVerdict';
import { Convert, onCelsius, onFahrenheit } from './tempCalculator';
import TemperatureInput from './TemperatureInput';
export default class Calculator extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      temperature: '',
      scale: 'c',
    };
  }
     handleTemperatureChange = (e,scale) => {
    this.setState({ temperature: e.target.value,scale:scale });
  }
    
    render() {
        const { temperature, scale } = this.state;
        let celsius,fahrenheit;
        if (scale === 'c') {
            fahrenheit = Convert(temperature,onFahrenheit);
        } else {
            fahrenheit=temperature;
        }
        if(scale === 'f'){
            celsius = Convert(temperature, onCelsius);
        } else {
            celsius=temperature;
        }
        
         
       
    return (
        <div>
            <h1>Calculator</h1>
            <TemperatureInput scale="c" temperature={celsius}
                handleTemperatureChange={this.handleTemperatureChange} />
            <TemperatureInput scale="f" temperature={ fahrenheit} handleTemperatureChange={this. handleTemperatureChange} />
            <BoilingVerdict temperature={celsius} />
        </div>
    );
  }
}
