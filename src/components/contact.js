import React, { Component } from 'react';
import '../styles/map.css';
//import Map from '../components/Map';
class Contact extends Component {
  constructor(props) {
    super(props);
    this.id = 'allmap';
  }
  render() {
    return (
        <section>
          <div id="map__title">
            <h2><a href="../../public/contact.html">Our Location</a></h2>
          </div>
        </section>
    );
  }
}

export default Contact;
