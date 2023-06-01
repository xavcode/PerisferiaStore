const { Products, Review } = require('../../db');

const addProductById = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Products.findByPk(id, {
            include: {
                model: Review,
                attributes: ['userId', 'comment', 'rating', 'image', 'createdAt']
            }
        });
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        return res.status(200).json(product);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Server Error' });
    }
};

module.exports = {
    addProductById
}