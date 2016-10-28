import React, { Component } from 'react';
import '../styles/map.css';
class Contact extends Component {
  constructor(props) {
    super(props);
    this.id = 'allmap';
  }
  componentDidMount(){
    // this.map = new BMap.Map(this.id);
    // this.map.centerAndZoom(new BMap.Point(121.406316,31.009703), 22);
    // this.map.addControl(new BMap.MapTypeControl());   //添加地图类型控件
    // this.map.setCurrentCity("上海");          // 设置地图显示的城市 此项是必须设置的
    this.map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
  }
  render() {
    return (
        <section>
          <div id="map__title">
            <h2>Our Location</h2>
          </div>
          <div id={this.id}></div>
        </section>
    );
  }
}

export default Contact;
