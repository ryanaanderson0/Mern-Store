import './App.css';
import JumbotronContainer from './components/JumbotronContainer';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import HomePage from './pages/HomePage.js';
import './App.css';


function App() {
  return (
    <div className="App">
      <Header/>
        <main className='py-3'>
            <JumbotronContainer />
            <HomePage />
        </main>
      <Footer />
    </div>
  );
}

export default App;
