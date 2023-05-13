const { Products } = require('../db');


const createProduct = async (req, res) => {
    try {
        const {
            id,
            name,
            price,
            img,
            status,
            description,
            rating,
            category,
            brand
        } = req.body;
        console.log(req.body)
        const newProduct = await Products.create({
            id,
            name,
            price,
            img,
            status,
            description,
            rating,
            category,
            brand 
        })
            return res.status(200).send(newProduct)
    } catch (error) {
       return res.status(404).send(error.message);
    }
}

const add_NewProduct = async (req, res) => {
    try {
        const new_product = await createProduct();
        console.log(new_product)
       return res.status(200).send('<h1>Ya esta creado</h1>');
    } catch (error) {
       return res.status(404).send({ error: error.message });
    }
} 

module.exports = {
    add_NewProduct,
    createProduct
}