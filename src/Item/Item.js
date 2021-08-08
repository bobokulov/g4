import React, { Component } from 'react'
import './Item.css'
import home from '../img/home.jpg'

export default class Item extends Component {
    render() {
        return (
            <div className='item'>
                <img src={this.props.home} alt='img' className='item-img' />
                 <p className='item-text'>{this.props.title} </p>
            </div>
        );
    }
}
