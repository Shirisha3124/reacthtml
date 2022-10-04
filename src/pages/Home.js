import React from 'react';
import Cart from './Cart';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import images from '../images/images.jpg';
import images2 from '../images/images2.jpg';
import images4 from '../images/image4.jpg';
import images5 from '../images/images5.jpg';
import images6 from '../images/images6.jpg';
import images9 from '../images/image9.jpg';
import images8 from '../images/image8.jpg';
class Home extends React.Component {
  render() {
    return (
      <div> <header>
      <h1>The Best Online Biryani Point</h1>
      <Router>
        <div>
      <nav>
        <ul>

          <li class="item"><a href="services.html">SERVICES</a></li>
          <li class="item"><a href="about us.html">ABOUT US</a></li>
          <li class="item"><a href="contactForm.html">CONTACT US</a></li>
          <li class="item"><Link to="/cart">CART</Link></li>
        </ul>
      </nav>
      <Routes>
          <Route exact path="/cart">
            <Cart />
          </Route>
        </Routes>
        </div>
      </Router>
    </header>
    <main>
      <div class="gridContainer">
        <h2>
          <div class="firstL">#1</div>
          <div class="secondL">HYDERABAD</div>
          <div class="thirdL">DUM BIRYANI</div>
          <div class="lastL">IN CANADA</div>
        </h2>
      </div>
  
      <aside>
        <div class="imgbox">
          <img src={images} width="400" height="400" />
        </div>
      </aside>
    </main>
  
  
    <section id="menu-services" >
      <h1><b>biryani dishes</b></h1>
    </section>
  
    <section id="Service-item">
      <div class="box">
        <img src={images} width="270" height="270" />
        <p id="item-name"><b>chicken biryani single box</b></p>
        <p id="item-price">Price: $9.99</p>
      </div>
      <div class="box">
        <img src={images2} width="270" height="270" />
        <p id="item-name"><b>chicken biryani full box</b></p>
        <p id="item-price">Price: $15.99</p>
      </div>
      <div class="box">
        <img src={images} width="270" height="270" />
        <p id="item-name"><b>mutton biryani single box</b></p>
        <p id="item-price">Price: $15.99</p>
      </div>
      <div class="box">
        <img src={images4} width="270" height="270" />
        <p id="item-name"><b>mutton biryani full box</b></p>
        <p id="item-price">Price: $17.99</p>
      </div>
      <div class="box">
        <img src={images5} width="270" height="270" />
        <p id="item-name"><b>veg biryani single box</b></p>
        <p id="item-price">Price: $14.99</p>
      </div>
      <div class="box">
        <img src={images6} width="270" height="270" />
        <p id="item-name"><b>veg biryani full box</b></p>
        <p id="item-price">Price: $9.99</p>
      </div>
      <div class="box">
        <img src={images9} width="270" height="270" />
        <p id="item-name"><b>beef biryani</b></p>
        <p id="item-price"><b>Price: $14.99</b></p>
      </div>
      <div class="box">
        <img src={images8} width="270" height="270" />
        <p id="item-name"><b>mint sauce/raita</b></p>
        <p id="item-price">Price: $0.79</p>
      </div>
    </section ></div >
        )
  }
}

export default Home;