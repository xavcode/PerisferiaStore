const { Order, Products, Users } = require('../../db')

const create_order = async (order) => {
    const newOrder = await Orders.create();
    return newOrder;
}

const creation_relation = async (req, res) => {
    try {
        const { quantity, totalPrice, producId, UserId} = req.body;
        const newOrder = await Order.create({
            quantity, totalPrice
        });
        const user = await Users.findByPk(UserId)
        await newOrder.setUser(user);
        
        const prod = await Products.findAll({
            where: {
                id: producId
            },
        });
        await newOrder.addProducts(prod)
        res.status(200).send('<h2>Order registrada con exito</h2>')
    } catch(error) {
        res.status(404).json({
            error: error.message
        });
    };
}; 

module.exports = {
    creation_relation
}