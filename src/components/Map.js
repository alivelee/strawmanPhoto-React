import React, {Component} from 'react';
class Map extends Component {
   constructor(props) {
     super(props);
     this.state = {
       id : props.id || 'allmap'
     }
   }
   componentDidMount () {
     this._map = new BMap.Map(this.id);
     this._map.centerAndZoom(new BMap.Point(121.406316,31.009703), 22);  // 初始化地图,设置中心点坐标和地图级别
     this._map.addControl(new BMap.MapTypeControl());   //添加地图类型控件
     this._map.setCurrentCity("上海");          // 设置地图显示的城市 此项是必须设置的
     this._map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
   }
}
export default Map;
