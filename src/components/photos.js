import React, { Component } from 'react';
import axios from 'axios';
import Header from './Header';
import Footer from './footer';
const appid = '?client_id=f21bbb808200a1b400bde2b8be473dd16b5d1a3849ed7cbbebdbb961c0d6c8b3';
class Photos extends Component {
  constructor(props){
    super(props);
    this.state = {
      photos:[],
      loading:true,
      error:null,
    }
  }
  componentDidMount(){
   const requestUrl = 'https://api.unsplash.com/collections/' + this.props.params.photoId + '/photos';
   console.log(requestUrl);
   var url = requestUrl + appid;
   axios.get(url).then( res => {
       const photos = res.data;
       this.setState({
         photos,
         loading:false,
         error:null
       });
   }).catch(err => {
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
  renderPhotos(){
    if (this.state.error) {
      return this.renderError();
    }
    return this.state.photos.map(item =>
      <div className="wrapper">
        <section>
          <p>Likes: {item.likes}</p>
          <p>Create at :{item.created_at}</p>
          <img src={item.urls.small} />
        </section>
      </div>
    )
  }
  render() {
    return (
      <div>{this.state.loading ?
          this.renderLoading()
          : this.renderPhotos()}
      </div>
    );
  }
}
export default Photos;
