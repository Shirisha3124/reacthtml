import React from 'react';
import styles from './Services.css';
class Services extends React.Component {
    render() {
        return(<div>
             <section className="services1" id="SERVICES">
    <h1><b>SERVICES</b></h1> 
  </section>
  {/* <div className="navbar2">
   <h2><b>Appetizers</b></h2>
  </div>
  <div className="navbar1">
  <h2><b>Desserts</b></h2>  
  </div>  */}


 <section id="Services">
  <div className="item">
  <h2><b>Appetizers</b></h2>
<ol>
<li>LAMB SEEKH KABABS--  <span>$31.99-$59.99</span> </li>
<p>6Pcs OR 12Pcs with Chutney</p>
<li>CHICKEN TANDOORI BOX--   <span>$25.99</span></li>
<p>6Pcs(3 Thighs & 3 Drumsticks with Chutney</p>
<li>CHICKEN SEEKH KABAB--   <span>$28.99 - $54.99</span></li>
<p>6Pcs OR 12Pcs with Chutney</p>
<li>CHICKEN 65--  <span> $12.99</span> </li>
<p>Chicken pieces marinated with flour,yogurt</p> 
<p>and tossed in spicy tempering sauce</p>
</ol>
</div>
<div className="item1">
<h2><b>Desserts</b></h2>
<ol>
<li>SHAHITUKDA--  <span>$3.99</span></li>
<li>GULABJAMUN--  <span>$3.99</span></li>
<p>4Pcs</p>
<li>DOUBLE KA MEETHA--  <span>$4.99</span></li>
<li>RASMALAI--  <span>$5.99</span></li>
<li>SHRIKHAND--  <span>$4.99</span> </li>
<li>KAJU KATLI--  <span>$6.99</span> </li>
<li>BALUSHAHI--  <span>$5.99</span> </li>
<li>JALEBI--  <span>$4.99</span> </li>
<li>MOTICHOOR LADDU-- <span>$5.99</span> </li>
</ol>
</div>
</section>   
        </div>)}
}
export default Services;
