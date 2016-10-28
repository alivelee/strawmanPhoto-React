import React, { Component } from 'react';
import { Link } from 'react-router';
class Category extends Component {
  constructor(props){
    super(props);
  }
    render(){
    return (
      <div className="category">
        <figcaption>
          <div className="info">
            <h2>{this.props.title}</h2>
            <img src={this.props.cover} />
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
