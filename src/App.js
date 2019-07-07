import React from 'react';
import './App.css';
import Footer from './components/home/Footer';
import Header from './components/home/Header';
import Carousel from './components/home/Carousel';

function App() {
  return (
    <div className="App">
      <div className="header"><Header/></div>
      <div className="body"><Carousel /></div>
      <div className="footer"><Footer /></div>
    </div>
  );
}

export default App;
