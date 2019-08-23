import React, { Component } from 'react'

export default class Product extends Component {
    render() {
        const {name, price, img} = this.props.list
        return (
            <div>
                
                <img src={img} height="100" alt={name}></img>
                <p>{name}</p>
                <p>{price}</p>
                <button onClick={ () => this.props.deleteProduct(this.props.list.id)}>Delete</button>
                <button>Edit</button>
            </div>
        )
    }
}
