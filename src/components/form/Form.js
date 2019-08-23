import React, { Component } from 'react'
import axios from 'axios'

export default class Form extends Component {
    constructor(){
        super()
        this.state={
            list:[],
            img: '',
            name: '',
            price: ''
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
            price: e
        })

        
    }

    cancelBtn = () => {

        this.setState({
            img: '',
            name: '',
            price: ''
        })
    }

    addItem = (event) => {   

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
    render() {
       
        return (
            <div>
                <input onChange={ (e) => this.updateImg(e.target.value)}></input>
                <input onChange={ (e) => this.updateName(e.target.value)}></input>
                <input onChange={ (e) => this.updatePrice(e.target.value)}></input>
                <button onClick={this.cancelBtn}>Cancel</button>
                <button onClick={this.addItem}>Add</button>
            </div>
        )
    }
}
