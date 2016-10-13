import React, { Component } from 'react';
import '../App.css';
import Header from './Header';
import Gallery from './Gallery';
import Footer from './footer';
class Main extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Gallery />
        <Footer />
      </div>
    );
  }
}

export default Main;
