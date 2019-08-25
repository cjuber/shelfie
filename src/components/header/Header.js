import React, { Component } from 'react'

import {Link} from 'react-router-dom'

import './header.css'

export default class Header extends Component {
    render() {
        return (
            <header>
                <div className="logo">

                <p>Header</p>
                </div>
               

                <div className="btnContainer">
               <Link exact to='/'><button className="dashBtn">Dashboard</button></Link> 
               <Link to='/add'> <button className="dashBtn">Add Inventory</button></Link> 
               </div>
            </header>
        )
    }
}
