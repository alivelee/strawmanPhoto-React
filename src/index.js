import React from 'react';
import ReactDOM from 'react-dom';
import Main from './components/Main';
import Photo from './components/photos';
import Category from './components/category';
import NotFound from './components/NotFound';
import { BrowserRouter , Match,Miss} from 'react-router';
import './styles/index.css';
import './styles/font-awesome/css/font-awesome.min.css';
const Root = () => {
  return (
    <BrowserRouter>
      <div>
        <Match exactly pattern="/" component={Main}/>
        <Match pattern="/photo/:photoId" component={Photo}/>
        <Miss component={NotFound}/>
      </div>
    </BrowserRouter>
  )
}
ReactDOM.render(
  <Root />,
  document.getElementById('root')
);
