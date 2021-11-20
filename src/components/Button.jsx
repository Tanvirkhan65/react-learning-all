/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

export default class Button extends Component {
  shouldComponentUpdate(nextProps) {
    return this.props.locale !== nextProps.locale;
  }
    
  render() {
    const { locale, handleClick } = this.props;
    console.log('Button render');
    return (
      <div>
        <div>
          <button type="button" onClick={() => handleClick(locale)}>
            click me
          </button>
        </div>
      </div>
    );
  }
}
