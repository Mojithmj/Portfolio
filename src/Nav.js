import React from 'react'
import './App.css';
import video1 from './Assets/video1.mp4'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Footer from './Footer';
import Home from './Home';
import About from './About';
import Skills from './Skills';
import Contact from './Contact';
import { Link } from 'react-router-dom';

function Hai() {
  return (
    <div>

<div class="bg">

<Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">
        <svg xmlns="http://www.w3.org/2000/svg" onClick={jav} width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
  <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
</svg>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          </Nav>
          <div class="spaced">
         <Link class="deco" to={'/'}><h6 class="head">Home</h6></Link>
         <Link class="deco" to={'/About'}> <h6 class="head">About</h6></Link>
         <Link class="deco" to={'/Skills'}><h6 class="head">Skills</h6></Link>
         <Link class="deco"><h6 class="head" onClick={()=>alert("No Projects Available")}>Projects</h6></Link>
         <Link class="deco" to={'/Contact'}><h6 class="head">Contact</h6> </Link>  
         </div>      
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <h4 id="log"></h4>

<video src={video1} autoPlay loop muted/>

</div>
    </div>
  )
}

export default Hai
const jav=()=>
{
  document.getElementById("log").innerHTML="Access Denied";
}