import './App.css';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import HomePage from './pages/HomePage.js';
import ShopPage from './pages/ShopPage.js';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import ProductPage from './pages/ProductPage'
import CartPage from './pages/CartPage'



function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
          <main>
            
              {/* <MastHead /> */}
              <Route path='/' component={HomePage} exact />
              <Route path='/product/:id' component={ProductPage} />
              <Route path='/cart/:id?' component={CartPage} />
              <Route path='/shop' component={ShopPage} exact />
              {/* <AboutPage /> */}
      
          </main>
        <Footer />
      </div>
  </Router>

   );
}

export default App;
