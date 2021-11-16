import React, { Component } from 'react';

export default class Emoji extends Component {
    addEmoji = (text, emoji) => `${emoji} ${text} ${emoji}`
    render() {
        const text = 'i am from emoji jsx';
        return this.props.children({ addEmoji: this.addEmoji });
    }
}
