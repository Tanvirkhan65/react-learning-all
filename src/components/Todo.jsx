import React, { Component } from 'react';

export default class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            date: new Date(),
        };
    }

    componentDidMount() {
        const { count } = this.state;
        document.title = `clicked ${count} times`;
        setInterval(this.tick, 1000);
    }

    componentDidUpdate() {
        const { count } = this.state;
        document.title = `clicked ${count} times`;
    }

    componentWillUnmount() {
        clearInterval(this.tick);
    }

    tick = () => {
        this.setState({
            date: new Date(),
        });
    };

    addClick = () => {
        this.setState(({ count }) => ({ count: count + 1 }));
    };

    render() {
        const { count, date } = this.state;
        return (
            <div>
                <h1>{date.toLocaleTimeString('bn-BD')}</h1>
                <button onClick={this.addClick} type="button">
                    click
                    {' '}
                    {count}
                </button>
            </div>
        );
    }
}
