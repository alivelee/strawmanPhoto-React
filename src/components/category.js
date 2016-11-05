import React, { Component } from 'react';
import { Link } from 'react-router';
import '../styles/category.css';
class Category extends Component {
  constructor(props){
    super(props);
  }
    render(){
    return (
      <div className="category">
        <img src={this.props.cover} className="category-img"/>
        <figcaption className="category-figuration">
          <div className="info">
            <h2>{this.props.title}</h2>
            <i className="fa fa-search-plus" aria-hidden="true"><Link to={{
              pathname:'photo/'+this.props.id,
              query: {
                id : this.props.id,
              }
            }}>To</Link></i>
          </div>
        </figcaption>
    </div>
    );
  }
}
export default Category;
