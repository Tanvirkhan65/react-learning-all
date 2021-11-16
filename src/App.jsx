import React, { Component } from 'react';
import './App.css';
import Section from './components/Section';
import themeContext from './context/themeContext';

export default class App extends Component {
  state = {
    count:0
  }
  incrementCount = () => {
    this.setState(prevCount => {
      return {
        count: prevCount.count + 1
      }
    });
  }
  render() {
    const { count } = this.state;
    return (
        <div className="App">
            <h1>context api</h1>
            <themeContext.Provider value={{count:count,incrementCount:this.incrementCount}}>
                <Section />
            </themeContext.Provider>  
        </div>
    );
  }
}
