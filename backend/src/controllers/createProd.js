const { Products } = require('../db');


const createProduct = (prod) => {
    try {
        const my_product = Products.create(prod)
        return my_product
    } catch (error) {
        return {
        error: error.message
    };
    }
}

const add_NewProduct = async (req, res) => {
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
        } = req.body;
        const new_product = await createProduct({ 
            id,
            name,
            price,
            img,
            status,
            description,
            rating,
            category,
        });
        res.status(200).send('<p>Registro creado con exito</p>')
    } catch (error) {
        res.status(404).send({ error: error.message });
    }
} 

module.exports = {
    add_NewProduct,
    createProduct
}