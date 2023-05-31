const { Order, Products } = require('../../db');

const new_order = (order) => {
    const orderCreate =  Order.create(order);
    return orderCreate;
}
 
const create_register_order = async (req, res) => {
    try {
        const { quantity, totalPrice, producto } = req.body;
        const newOrder = await new_order({ quantity, totalPrice });
        const prod = await Products.findByPk(producto);
        newOrder.addProducts(prod)
        res.status(200).send('<h2>agregado con exito</h2>');
    } catch (error) {
        res.status(404).json({ error: error.message });
    };
};

module.exports = {
    create_register_order
}