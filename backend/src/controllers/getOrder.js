const { Order, Products, Users } = require('../db');

const get_order = async (req, res) => {
    try {
        const elemento = await Order.findAll({
            include: {
                model: Products,
                attributes: ['name'] 
            }
            });
        res.status(200).json(elemento);
    } catch (error) {
        res.status(404).json({
            error: error.message
        });
    };
};

module.exports = {
    get_order
}