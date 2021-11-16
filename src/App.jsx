import React from 'react';
import './App.css';
import Bracket from './composition/Bracket';
import Emoji from './composition/Emoji';
import Text from './composition/Text';

const App = () => {
  return (
    <div className="App">
      <h1>hello</h1>
      <Emoji>
        {({ addEmoji }) => {
          return (
            <Bracket>
              {({ addBracket }) => { return <Text addEmoji={addEmoji} addBracket={addBracket} />; }}
            </Bracket>
          ); 
        }}
      </Emoji>
        
    </div>
  );
};

export default App;
