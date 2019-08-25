import React, { Component } from 'react'
import Form from './components/form/Form'
import Dashboard from './components/dashboard/Dashboard'
import Header from './components/header/Header'
import axios from 'axios'

import router from './routes/main.router'

export default class App extends Component {

  
  


    
  render() {
    return (
      <div>
        <Header/>
         {router}

        {/* <Dashboard list={this.state.list} getList={this.getList} setId={this.setId}/>
        <Form getList={this.getList} createProduct={this.createProduct} id={this.state.id} list={this.state.list} product={this.state.product}/> */}
        
      </div>
    )
  }
}
