import React from 'react'
import './App.css';
import img1 from './Assets/img1.jpg';
import Nav from './Nav';
import Footer from './Footer';
import { Link } from 'react-router-dom';



function Home() {
  return (
    <div>
<Nav/>
        <div class="disp">
        <div class="name">
       <p class="para">Hi,</p>
       <p class="para">I'm <b class="bold">Mojith</b></p>
       <p class="para">Mern Stack Developer</p>
       <Link to={'/Contact'}>
       <button type="button" class="btn btn-outline-danger contact">CONTACT</button>
       </Link>
       </div>
<div class="photo">
    <img src={img1}/>
</div>
</div><br/><br/><br/><br/><br/><br/><br/>
<Footer/>
       </div>
  )
}

export default Home