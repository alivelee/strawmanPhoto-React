import React from 'react';
import ReactDOM from 'react-dom';
import Main from './components/Main';
import Photo from './components/photos';
import Category from './components/category';
import NotFound from './components/NotFound';
import Devices from './components/Devices';
import { BrowserRouter , Match,Miss} from 'react-router';
import './styles/index.css';
import './styles/font-awesome/css/font-awesome.min.css';
const Root = () => {
  return (
    <BrowserRouter>
      <div>
        <Match exactly pattern="/" component={Main}/>
        <Match pattern="/photo/:photoId" component={Photo}/>
        <Match pattern="/devices" component={Devices} />
        <Miss component={NotFound}/>
      </div>
    </BrowserRouter>
  )
}
ReactDOM.render(
  <Root />,
  document.getElementById('root')
);
