const { Product } = require('../models');

const getAllProducts = async (req, res) => {
    try {
    const products = await Product.findAll();
    res.status(200).json(products);
    } catch (error) {
    res.status(500).json({ message: error.message });
    } 
};

module.exports = { getAllProducts };

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

module.exports = { getProductById };

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

    module.exports = { getProductsByName };
    
//----------------------------------------------------------------//