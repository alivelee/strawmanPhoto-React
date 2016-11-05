import React from 'react';
class Header extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
      <header>{this.props.header}</header>
    );
  }
}
Header.propTypes = {
  header: React.PropTypes.string
}
export default Header;
