import React from 'react';

const WithCounter = (Component) => {
  class NewComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0,
      };
    }

    handleCounter = () => {
      this.setState((prevState) => { return { count: prevState.count + 1 }; });
    };

    render() {
      const { count } = this.state;
      return <Component handleCounter={this.handleCounter} count={count} />;
    }
  }
  return NewComponent;
};

export default WithCounter;
