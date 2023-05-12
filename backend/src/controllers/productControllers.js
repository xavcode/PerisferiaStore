const { Product } = require('../models');

const getAllProducts = async (req, res) => {
    try {
    const products = await Product.findAll();
    res.status(200).json(products);
    } catch (error) {
    res.status(500).json({ message: error.message });
    } 
};


//----------------------------------------------------------------//

const getProductById = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findByPk(id);
        if (!product) {
        return res.status(404).json({ message: 'Product not found' });
        }
        return res.status(200).json(product);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Server Error' });
    }
    };


//----------------------------------------------------------------//

    const getProductsByName = async (req, res) => {
        try {
        const { name } = req.params;
        const products = await Product.findAll({
            where: { name: { [Op.like]: `%${name}%` } },
        });
        return res.status(200).json(products);
        } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Server Error' });
        }
    };

    
//----------------------------------------------------------------//

const createProduct = async (req, res) => {
    try {
        const { name, price, img, status, description, rating, category, brand } = req.body;
        const newProduct = await Product.create({ name, price, img, status, description, rating, category, brand });
        res.status(201).json(newProduct);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal server error' });
    }
};

//----------------------------------------------------------------//

module.exports = {
    getAllProducts,
    getProductById,
    getProductsByName,
    createProduct
};