import React, { Component } from 'react'
import './sidebar.css'
import logo from '../img/logo.png'
import Item from '../Item/Item.js'
export default class sidebar extends Component {
    render() {
        return (
            <div className='sidebar-container'>
                <div className='logo-wrapper'> 
                <img src={logo} alt='logo' className='logo' />
                <p className='logo-text'> iffee </p>
                <p className='menu'>Menu</p>


                 </div>

            </div>
        )
    }
}
