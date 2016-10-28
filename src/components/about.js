import React from 'react';
import '../styles/about.css';
import a1 from '../images/a1.png';
import a3 from '../images/a3.png';
import a4 from '../images/a4.png';
const About = () => (
  <div>
    <header className="section">
      <h1>About us</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
    </header>
    <section className="section master">
      <img src={a1} alt="" />
      <article>
        <p>I am a amateur Photographer as well as a Front-end Developer.</p>
      </article>
      <span>
        <i className="fa fa-twitter fa-2x" aria-hidden="true"><a href="https://twitter.com/AD_SPE"></a></i>
        <i className="fa fa-envelope fa-2x" aria-hidden="true"></i>
        <i className="fa fa-qq fa-2x" aria-hidden="true"></i>
        <i className="fa fa-weixin fa-2x" aria-hidden="true"></i>
      </span>
    </section>
    <section className="section follower"><img src={a3} alt="" />
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
      <span>
        <i className="fa fa-envelope fa-2x" aria-hidden="true"></i>
        <i className="fa fa-qq fa-2x" aria-hidden="true"></i>
        <i className="fa fa-weixin fa-2x" aria-hidden="true"></i>
      </span>
    </section>
    <section className="section mates"><img src={a4} alt="" />
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
      <span>
        <i className="fa fa-envelope fa-2x" aria-hidden="true"></i>
        <i className="fa fa-qq fa-2x" aria-hidden="true"></i>
        <i className="fa fa-weixin fa-2x" aria-hidden="true"></i>
      </span>
    </section>
  </div>
);
export default About;
