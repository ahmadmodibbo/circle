import './App.css'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import MoreCoins from './Components/MoreCoins';
import Nav from './Components/Nav';
import Footer from './Components/Footer';

function App() {
  return <Router>
    <Nav/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="*" element={<Home/>}/>
    </Routes>
    <Footer/>
  </Router>;
}

export default App
