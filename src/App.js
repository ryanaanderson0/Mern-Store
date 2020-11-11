import './App.css';
import JumbotronContainer from './components/JumbotronContainer';
import NavContainer from './components/NavContainer.js';
import CardContainer from './components/CardContainer.js';

function App() {
  return (
    <div className="App">
      <h1>MERN Store</h1>
      <NavContainer />
      <JumbotronContainer />
      <CardContainer />
    </div>
  );
}

export default App;
