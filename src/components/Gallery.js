import Unsplash from 'unsplash-js';
import React, { Component } from 'react';
import axios from 'axios';
import Category from './category';
const unsplash = new Unsplash({
  applicationId: 'f21bbb808200a1b400bde2b8be473dd16b5d1a3849ed7cbbebdbb961c0d6c8b3',
  secret: '923827b998585159ed92204193c3c713cac4c75ca51a5c3febe9a1bb515a2482',
  callbackUrl: 'http://localhost:3001/login/photo/callback'
});
const requestUrl = 'https://api.unsplash.com/collections/?';
const appid = 'client_id=f21bbb808200a1b400bde2b8be473dd16b5d1a3849ed7cbbebdbb961c0d6c8b3';
class Gallery extends Component {
  constructor(props){
    super(props);
    this.state = {
      collections:[],
      loading:true,
      error:null
    }
  }
  componentDidMount(){
    var url = requestUrl + appid;
    axios.get(url).then(res => {
      //console.log(res);
      const collections = res.data;
      this.setState({
        collections,
        loading:false,
        error:null
      });
    }).catch(err => {
      console.log(err);
      this.setState({
        loading:true,
        error:err
      });
    });
  }
  renderLoading() {
    return <div>Loading...</div>;
  }
  renderError() {
    return (
      <div>
        Uh oh: {this.state.error.message}
      </div>
    );
  }
  renderCategory(){
    if (this.state.error) {
      return this.renderError();
    }
    return this.state.collections.map(collection =>
      <Category
          key={collection.id}
          title={collection.title}
          cover={collection.cover_photo.urls.small}
          id={collection.id}
      />
    )
  }
  render() {
    return (
      <div>{this.state.loading ?
          this.renderLoading()
          : this.renderCategory()}
      </div>
    );
  }
}
export default Gallery;
