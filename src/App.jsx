import React, { Component } from 'react';
import ReactDom from 'react-dom';
import './App.css';
import Index from './index';

expect default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: [
                { id: 1, name: 'Jumanazar', status: 'low' },
                { id: 2, name: 'Gulbashakar', status: 'Medium'},
                { id: 3, name: 'Jack', status: 'High' },
                { id: 4, name: 'Joe', status: 'Low'},
            ],
            
        };
    }
    render(){
        return 
        <div><table>hallo</table></div>
    }
}
