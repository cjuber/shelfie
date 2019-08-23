import React, { Component } from 'react'
import Form from './components/form/Form'
import Dashboard from './components/dashboard/Dashboard'
import Header from './components/header/Header'
import axios from 'axios'

export default class App extends Component {

  constructor(){
    super()
    this.state = {
      product:{},
      list: [],
      id: '',
      img: '',
      name: '',
      price: ''
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
setId = (val) => {
  

this.setState({
  
  product: val,
  
  
})


}

    
  render() {
    return (
      <div>
        <Header/>
        <Dashboard list={this.state.list} getList={this.getList} setId={this.setId}/>
        <Form getList={this.getList} createProduct={this.createProduct} id={this.state.id} list={this.state.list} product={this.state.product}/>
        
      </div>
    )
  }
}
