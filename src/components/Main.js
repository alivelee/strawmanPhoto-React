import React from 'react';
import Link from 'react-router/Link';
import classnames from 'classnames';
import '../styles/style.css';
class Main extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      active:false
    }
  }
  menuClick(e){
    e.preventDefault();
    this.setState({
      active:true
    });
  }
  removeClass(e){
    e.preventDefault();
    this.setState({
      active:false
    });
  }
  render(){
    var menuOverlayClass = 'menu-overlay';
    var menuClass = 'menu';
    if (this.state.active) {
      menuClass += ' open';
      menuOverlayClass += ' open';
    } else {
      menuOverlayClass = 'menu-overlay';
      menuClass = 'menu';
    }
    return (
      <section>
        <div className={menuClass}>
          <span className="circle"></span>
          <a href="" className="menu-link" onClick={this.menuClick.bind(this)}>
        <span className="menu-icon">
          <span className="menu-line line_one"></span>
          <span className="menu-line line_two"></span>
          <span className="menu-line line_three"></span>
        </span>
          </a>
        </div>
        <div className={menuOverlayClass}>
          <Link to="/about" >About</Link>
          <Link to="/contact" >Contact</Link>
        </div>
        <div id="main">
          <div className="session-left">
            <div className="content-left">
              <Link to="/devices">Devices</Link>
            </div>
          </div>
          <div className="session-right">
           <div className="content-right">
             <Link to="/gallery">Photos</Link>
           </div>
          </div>
        </div>
      </section>
    );
  }
}
export default Main;
