import React, { Component } from 'react'
import axios from 'axios'

export default class Form extends Component {
    constructor(){
        super()
        this.state={
            list:[],
            img: '',
            name: '',
            price: '',
            id:'',
            edit: false
        }
    }
    updateImg = (e) => {

        this.setState({
            img: e
        })

    }

    updateName= (e) => {

        this.setState({
            name: e
        })


    }

    updatePrice = (e) => {
        
        this.setState({
            price: e * 1
        })

        
    }

    cancelBtn = () => {

        this.setState({
            img: '',
            name: '',
            price: '',
            edit:false
        })
    }

    addItem = () => {   

        const body = {
         name: this.state.name,
         price: this.state.price,
         img: this.state.img
        
        }
            axios.post('http://localhost:8080/api/product', body).then(response =>{

                this.setState({
                list: response.data
                })
                this.props.getList()
                
                
            })
    
    this.cancelBtn()
        
        
    }
    

    componentDidUpdate(prevProps){
        let {name,price,img} = this.props.product
        
        if(prevProps.product.id !== this.props.product.id){
           
            this.setState({
                name,
                price, 
                img,
                edit: true
            })
            
        }
    }

    updateProduct = (id) => {
        const body = {
            name: this.state.name,
            price: this.state.price,
            img: this.state.img
            
        }
        
        axios.put(`http://localhost:8080/api/product/${id}`, body).then( response => {
        
            this.setState({
                list: response.data,
                edit: false
            })
        })
        
        this.props.getList()
        this.cancelBtn()

    }
    render() {
       
        return (
            <div>
                <img height="150" src={this.state.img}></img>
                <p>Image URL: </p>
                <input value={this.state.img} onChange={ (e) => this.updateImg(e.target.value)}></input>
                <p>Name: </p>
                <input value={this.state.name} onChange={ (e) => this.updateName(e.target.value)}></input>
                <p>Price: </p>
                <input value={this.state.price} onChange={ (e) => this.updatePrice(e.target.value)}></input>
                <button onClick={this.cancelBtn}>Cancel</button>

            {!this.state.edit ?
                (<button onClick={this.addItem}>Add to Inventory</button>)
                :
                (<button onClick={ () => this.updateProduct(this.props.product.id)}>Save Changes</button>)

            }
            </div>
        )
    }
}
