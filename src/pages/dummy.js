import React from 'react'
import { db } from '../firebaseConfig'
import {useState} from 'react'
import { addDoc,collection } from 'firebase/firestore'

const ContactUs = () => {
    const [name,setName] = useState();
    const [email,setEmail] = useState();
    const [phone,setPhone] = useState();
    const [message,setMessage] = useState();

    const userCollectionRef = collection(db,"contactdata")
    const handleSubmit = () => {
        addDoc(userCollectionRef, {
            name: name,
            email: email,
            phone: phone,
            message: message
        }).then(()=>{
            if(!alert("Form Submitted Successfully!"))document.location = 'https://www.google.com/webhp?hl=en&sa=X&ved=0ahUKEwjWsuTfwMb6AhXDGjQIHSzyDFkQPAgI'

         }).catch((error)=>{
            alert(error.message)
         }) 
        
    }
    return (
        <div>
        <div className='outer-container'>
             <p style="text-align:center">contactForm</p>

<div class="design">
    <form onsubmit="sendEmail(); reset(); return false;">
        <div class="formdesign" id="name">
            <b>Name:</b> <input type="text" name="fname" 
            onChange={(event)=>{
               setName(event.target.value)
         }} />   
       
        </div>
        <div class="formdesign" id="emailid">
            <b>Email:</b> <input type="email" Email="femail"
            onChange={(event)=>{
                setEmail(event.target.value)
          }} /> 
        </div>
        <div class="formdesign" id="phone">
            <b>Phone no.:</b> <input type="phone" phone="fphoneno" 
           onChange={(event)=>{
            setPhone(event.target.value)
      }} /> 
        </div>
        <div class="formdesign" id="message">
            <b>Message:</b> <input type="text" Message="fmessage" 
            onChange={(event)=>{
                setMessage(event.target.value)
          }} />
        </div>
        <input class="button" onClick={handleSubmit} type="submit" value="submit" />
        
    </form>
</div> 
</div>
<div class="info">
        <h1>Connect with us:</h1>
        <p>8150 32St E, Saskatoon-5K54K3</p>
        <p>Phone No.:(306)-858-2665</p>
        <p>info@thebiryanipoint.ca</p>
    </div>
    </div>
    )
}

export default ContactUs;