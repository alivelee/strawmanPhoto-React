import React, { Component } from 'react';
import Firebase from './firebase';
import Header from './Header';
import DevicesList from './DevicesList';
class Devices extends Component {
  constructor(props){
    super(props);
    this.state = {
      items:[]
    }
  }
  componentWillMount(){
    Firebase.syncState('Devices', {
        context: this,
        state: 'items',
        asArray: true
      });
    }
  componentWillUnmount() {
    Firebase.removeBinding(this.ref)
  }
  render(){
    return (
      <div>
        <Header header="Choose you Devices"/>
        <DevicesList items={this.state.items} />
      </div>
    )
  }

}
export default Devices;
