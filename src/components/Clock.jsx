import React, { Component } from 'react'
import Button from './Button'
export default class Clock extends Component {
    state = {
        date: new Date(),
        locale: 'bn-BD'
    }
    tick = () => {
        this.setState({
            date: new Date()
        })
    }
    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        )
    }
    componentWillUnmount() {
        clearInterval(this.timerID)
    }
    handleClick = (locale) => {
        this.setState({
            locale
        })
    }
     
    render() {
        console.log('clock render');
        const { date, locale } = this.state
        let button;
        if (locale === 'bn-BD') {
            button = <Button locale='en-US' handleClick={this.handleClick}>Change to English</Button>
        } else {
            button = <Button locale='bn-BD' handleClick={this.handleClick}>Change to Bangla</Button>
        }
        return (
			<div>
                <div>{date.toLocaleTimeString(locale)}</div>
                <div>{ button }</div>
			</div>
		);
    }
}
