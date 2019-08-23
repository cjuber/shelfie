import React, { Component } from 'react'
import Form from './components/form/Form'
import Dashboard from './components/dashboard/Dashboard'
import Header from './components/header/Header'
import axios from 'axios'

export default class App extends Component {

  constructor(){
    super()
    this.state = {
      list: []

    }
  }


  componentDidMount(){
    this.getList()
    
  }
  getList = () => {
    
    
    axios.get('http://localhost:8080/api/inventory').then(response => {
      
      this.setState({
        list: response.data
        
      })
    })
  }


    
  render() {
    return (
      <div>
        <Header/>
        <Dashboard list={this.state.list} getList={this.getList}/>
        <Form getList={this.getList} createProduct={this.createProduct}/>
        
      </div>
    )
  }
}
