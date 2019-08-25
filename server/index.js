require('dotenv').config()

const express = require('express')
const cors = require('cors')
const massive = require('massive')
const productCtrl = require('./controller')

const {
    CONNECTION_STRING
}  = process.env


const app = express()

app.use(express.json())
app.use(cors())

massive(CONNECTION_STRING).then(dbInstance => {

    app.set('db', dbInstance)
    console.log('Database Connected')
    })
app.get('/api/inventory', productCtrl.getProducts)  
app.get('/api/inventory/:id', productCtrl.getOne) 
app.post('/api/product', productCtrl.createProduct)
app.delete('/api/inventory/:id', productCtrl.deleteProduct)
app.put('/api/product/:id', productCtrl.updateProduct)


app.listen(8080, () => console.log('Server Running'))