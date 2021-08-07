import React from 'react';
import ReactDOM from 'react-dom';
import Body from './body/body'
import Navbar from './navbar/navbar'
import Sidebar from './sidebar/sidebar'
import Index from './index.css'


ReactDOM.render(
  <React.StrictMode>
  <div className='container'>
       <Sidebar />
    <div className='body-wrapper' >
       <Navbar />
       <Body />
    </div>

  </div>
  </React.StrictMode>,
  document.getElementById('root')
);

