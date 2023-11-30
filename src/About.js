import React from 'react'
import './App.css';
import img2 from './Assets/img2.jpg';
import Nav from './Nav';
import Footer from './Footer';

function About() {
  return (
    <div>
<Nav/>
<h2 class="about">About</h2>

<div class="now">
<div class="img2">
    <img class="im" src={img2}/>
</div>
<div class="aboutme">
Hard working software engineering student from Kerala in my
 third and final year. I'm also a EC engineeer<br/>
  and a future full stack developer. I’ve found my passion in<br/>
   web development. I love spending time coding and encountering.
    new challenges. I’m highly adaptable to new challenges and projects.
</div>
</div>
<Footer/>
    </div>
  )
}

export default About