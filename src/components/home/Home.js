import React from 'react';
import './Home.css';
import Footer from './Footer';
import Header from './Header';
import Carousel from './Carousel';

function Home() {
  return (
    <div className="home">
      <div className="header"><Header/></div>
      <div className="body"><Carousel /></div>
      <div className="footer"><Footer /></div>
    </div>
  );
}

export default Home;
