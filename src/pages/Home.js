import React from 'react';
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
      <div> 
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
  
  
    </div >
        )
  }
}

export default Home;