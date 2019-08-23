const getProducts = (req, res) => {
    const db = req.app.get('db')
        db.get_inventory().then((products) => {
        res.status(200).send(products)
    })
}



const createProduct = (req,res) => {
    const {name, price, img} = req.body
    const db = req.app.get('db')
    db.create_product(name,price,img).then(() =>{
        res.status(200).send('Product Created')
    })
    .catch((error) => {
        console.log(error)
  
      })
}

const deleteProduct = (req,res) => {
    const {id} = req.params
    const db = req.app.get('db')
    db.delete_product(id).then(()=>{
        res.status(200).send(`${id} Deleted`)
    })
}

const updateProduct = (req, res) => {
    const {id} = req.params
    const {name,price,img} = req.body
    const db = req.app.get('db')
    db.update_product(name, price, img, id).then(() =>{
        res.status(200).send(`Product ${id} updated`)
    })
}
    module.exports = {


        getProducts,
        createProduct,
        deleteProduct,
        updateProduct
    
    }