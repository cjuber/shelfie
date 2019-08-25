import React, { Component } from 'react'
import Product from'../product/Product'
import axios from 'axios'



export default class Dashboard extends Component {

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

   
    render() {
        
        const mappedList = this.state.list.map((list, index)=>{

        return(
            <Product key={index} list={list} deleteProduct={this.deleteProduct} setId={this.props.setId} getList={this.getList}/>
            )
          })


        return (
            <div>
            
                {mappedList}
               
            </div>
        )
    }
}
