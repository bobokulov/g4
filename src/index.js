import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Body from'./body'
import Card from './card'
import Navbar from './navbar'
import Sidebord from './sidebord'


ReactDOM.render(
  <React.StrictMode>
  <div>
    <Sidebord />
    <div className='container'>
       <Navbar />
       <Card />
       <Body />
    </div>

  </div>
  </React.StrictMode>,
  document.getElementById('root')
);

