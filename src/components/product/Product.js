import React, { Component } from 'react'

export default class Product extends Component {
    render() {
        const {name, price, img, id} = this.props.list
        
        return (
            <div>
                
                <img src={img} height="100" alt={name}></img>
                <p>{name}</p>
                <p>{price}</p>
                <button onClick={ () => this.props.deleteProduct(this.props.list.id)}>Delete</button>
                <button onClick={ () => this.props.setId(this.props.list)}>Edit</button>
            </div>
        )
    }
}
