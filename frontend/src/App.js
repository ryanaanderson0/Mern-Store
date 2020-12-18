import './App.css';
import JumbotronContainer from './components/JumbotronContainer';
import Header from './components/Header.js';
import CardContainer from './components/CardContainer.js';
import Footer from './components/Footer.js';


function App() {
  return (
    <div className="App">
      <Header />
        <main className='py-3'>
            <JumbotronContainer />
            <CardContainer /> 
        </main>
      <Footer />
    </div>
  );
}

export default App;
