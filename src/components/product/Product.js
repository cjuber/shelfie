import React, { Component } from 'react'
import axios from 'axios'

import {Link} from 'react-router-dom'

import './product.css'

export default class Product extends Component {
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
        const {name, price, img, id} = this.props.list
        
        return (
            <div className="products">
            <div className="product-container">
                <div>
                <img src={img} height="100" alt={name} className="prodImg"></img>
                </div>
                <div>
                    <div className="titlePrice">
                <p className="title">{name}</p>
                <p className="price">${price}</p>
                </div>

                <Link exact to='/'><button className="prodBtn" onClick={ () => this.deleteProduct(id)}>Delete</button></Link>
                <Link to={`/edit/${this.props.list.id}`}><button  className="prodBtn2" >Edit</button> 
                </Link>
                </div>
            </div>
            </div>
        )
    }
}
