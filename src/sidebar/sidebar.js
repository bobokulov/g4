import React, { Component } from 'react'
import './sidebar.css'
import logo from '../img/logo.png'
import Item from '../Item/Item'
import home from '../img/home.jpg'

export default class sidebar extends Component {
    render() {
        return (
         <div className='sidebar-container'>
              <div className='logo-wrapper'> 
              <img src={logo} alt='logo' className='logo' />
              <p className='logo-text'>iffee</p>
              </div>
              <p className='menu'>Menu</p>
              <Item img={home} title='home' />
              <Item title='Garage' />
              <Item title='servis menu' />
              <Item title='Recerc'/>
              <Item title='Calculator'/>
              <Item title='settings'/>
                

                 

            </div>
        )
    }
}
