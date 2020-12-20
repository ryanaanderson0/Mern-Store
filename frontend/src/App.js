import './App.css';
import MastHead from './components/MastHead';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import HomePage from './pages/HomePage.js';
import AboutPage from './pages/AboutPage.js';



function App() {
  return (
    <div className="App">
      <Header/>
        <main className='py-3'>
            <MastHead />
            <HomePage />
            <AboutPage />
    
        </main>
      <Footer />
    </div>
  );
}

export default App;
