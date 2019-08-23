import React, { Component } from 'react'
import Product from'../product/Product'
import axios from 'axios'

export default class Dashboard extends Component {

    deleteProduct = (id) => {
        
        axios.delete(`http://localhost:8080/api/inventory/${id}`)
        .then(response => {
            this.setState({
              list: response.data
            })
            this.props.getList()
          })
    }
    render() {
        
        const mappedList = this.props.list.map((list, index)=>{

        return(
            <Product key={index} list={list} deleteProduct={this.deleteProduct} setId={this.props.setId}/>
            )
          })


        return (
            <div>
                Dashboard
                {mappedList}
               
            </div>
        )
    }
}
