import logo from './logo.svg';
import './App.css';
import Nav from './Nav';
import Footer from './Footer';
import Home from './Home';
import About from './About';
import Skills from './Skills';
import Contact from './Contact';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div>
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/About" element={<About/>}/>
    <Route path="/Skills" element={<Skills/>}/>
    <Route path="/Contact" element={<Contact/>}/>
   </Routes>
   </BrowserRouter>
    </div>
  );
}

export default App;
