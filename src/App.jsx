import './App.css';
import ClickCounter from './HOC/ClickCounter';
import HoverCounter from './HOC/HoverCounter';

function App() {
  return (
    <div className="App">
      <h1>higher Order Component</h1>
      <HoverCounter />
      <ClickCounter />
    </div>
  );
}

export default App;
