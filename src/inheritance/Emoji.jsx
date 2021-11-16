/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

export default class Emoji extends Component {
    addEmoji = (text, emoji) =>`${emoji} ${text} ${emoji}`;
  render(text2) {
    let text;
    if (text2) {
      text = text2;
    } else {
      text = 'i am from emoji jsx';
    }
    return (
      <div><h1>{ text }</h1></div>
    );
  }
}
