import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import About from './Components/About';
import Footer from './Components/Footer';
import Contact from './Components/Contact'
import Products from './Components/Products';
import Login from './Components/Login';
import Error from './Components/Error';
import Signup from './Components/Signup';
import Home from './Components/Home';
import Cart from './Components/Cart';
import Product from './Components/Product';
import Estate from './Context/Estate';
import FilterState from './Context/FilterState';
import Cartstate from './Context/Cartstate';

function App() {
  return (
    <Estate>
      <FilterState>
        <Cartstate>
          <Router>
            <Navbar />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/contact' element={<Contact />} />
              <Route path='/products' element={<Products />} />
              <Route path='/login' element={<Login />} />
              <Route path='/signup' element={<Signup />} />
              <Route path='/product/:paramid' element={<Product />} />
              <Route path='/cart' element={<Cart />} />
              <Route path='*' element={<Error />} />
            </Routes>
            <Footer />
          </Router>
        </Cartstate>
      </FilterState>
    </Estate>
  );
}

export default App;
