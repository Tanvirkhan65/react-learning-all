/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import themeContext from '../context/themeContext';

export default class HoverCounter extends React.Component {
  componentDidMount() {
    console.log(this.context);
  }

  render() {
    const { count, incrementCount } = this.context;
    
    return (
        <div>
            <h1 onMouseOver={incrementCount}>
                hover
                {' '}
                {count }
                {' '}
                times
            </h1>
        </div>
    );
  }
}

HoverCounter.contextType = themeContext;
