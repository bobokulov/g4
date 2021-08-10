import React, { Component } from 'react';
import 'react-dom';
import Body from './body/body'
import Navbar from './navbar/navbar'
import Sidebar from './sidebar/sidebar'
import './index.css'; 


export default class index extends Component {
  render() {
    return (
  
  <div className='container'>
       <Sidebar />
    <div className='body-wrapper' >
       <Navbar />
       <Body />
    </div>

  </div>
  )
}
}
