import React, { Component } from 'react';
import ReactDom from 'react-dom';
import './App.css';
import Index from './index.js';

export default class App extends Component {
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
        return (
        <div>
        <table border='1' style={{ borderCollapse: 'collapse'}}>
            <tr>
                <td>ID</td>
                <td>Name</td>
                <td>Status</td>
                <td>Action</td>
            </tr>
            {this.state.data.map((value) => {
                return(
            <tr>
                <td>1</td>
                <td>Jumanazar</td>
                <td>Low</td>
                <td>
                    <button>Delete</button>
                </td>
            </tr>
                );
            })}
           
        </table>
        </div>
        )
    };
};
