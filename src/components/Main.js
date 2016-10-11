import React, { Component } from 'react';
import '../App.css';
import Header from './Header';
import Gallery from './Gallery';
class Main extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Gallery />
      </div>
    );
  }
}

export default Main;
