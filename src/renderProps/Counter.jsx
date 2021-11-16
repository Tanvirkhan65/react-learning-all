import { Component } from 'react'

export default class Counter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            count: 0,
        }
    }
    
    incrementCount = () => {
        this.setState((prevState) => ({
            count: prevState.count + 1
        }))
    }
     
    render() {
        const { count } = this.state
        const {children} = this.props
        return children(count, this.incrementCount);
    }
}
