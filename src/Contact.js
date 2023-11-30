import React from 'react'
import './App.css';
import Nav from './Nav';
import Footer from './Footer';


function Contact() {
  return (
    <div>
<Nav/>
<h2 class="cont">Contact</h2>
<div class="bord">
        <input class="inp" type="text" placeholder="Full Name"/><br/><br/><br/>
        <input class="inp" type="email" placeholder='Email'/><br/><br/><br/>
        <textarea class="area" placeholder='Your text here'/><br/><br/>
        <button type="button" class="btn btn-outline-danger sub">SUBMIT</button>
        </div>
        <Footer/>
    </div>
  )
}

export default Contact