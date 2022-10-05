import React from 'react';

import Home from "./pages/Home";
import Cart from './pages/Cart';
import ContactUs from './pages/ContactUs';
import Services from './pages/Services';
import AboutUs from './pages/AboutUs';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import './App.css';

function App() {
  return (<div>
      <header>

      <Router>
        <div>
      <nav>
        <ul>
        <li class="item"><Link to="/">HOME</Link></li>
          <li class="item"><a href="/services">SERVICES</a></li>
          <li class="item"><a href="/aboutus">ABOUT US</a></li>
          <li class="item"><Link to="/contactus">CONTACT US</Link></li>
          <li class="item"><Link to="/cart">CART</Link></li>
        </ul>
      </nav>
      <Routes>
      <Route exact path="/"
          element={<Home />}>
          </Route>
          <Route exact path="/cart"
          element={<Cart />}>
          </Route>
          <Route exact path="/contactus"
          element={<ContactUs />}>
          </Route>
          <Route exact path="/services"
          element={<Services />}>
          </Route>
          <Route exact path="/aboutus"
          element={<AboutUs />}>
          </Route>
        </Routes>
        </div>
      </Router>
    </header>
    </div>);
  
}

export default App;

