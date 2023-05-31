const { Order, Products, Users } = require('../../db');

const get_order = async (req, res) => {
    try {
        const elemento = await Order.findAll({
            // include: {
            //     model: Products,
            //     attributes: ['name'],
            //     through: {
            //     attributes: { exclude: ['orderId', 'createdAt', 'updatedAt'] } // Excluye los atributos orderId, createdAt y updatedAt de order_product
            // },
            // },
            attributes: {
                exclude: ['createdAt', 'updatedAt'] // Excluye las fechas createdAt y updatedAt
            },
            include: [
            {
                model: Users,
                attributes: ['name', 'address']
            },
            {
                model: Products,
                attributes: ['name'],
                through: {
                 attributes: { exclude: ['orderId', 'createdAt', 'updatedAt'] } // Excluye los atributos orderId, createdAt y updatedAt de order_product
            },
            }
            ]
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
/**
 * include: {
    model: Products,
    attributes: ['name'],
    through: null
  },
  attributes: {
    exclude: ['createdAt', 'updatedAt']
  },
  include: {
    model: User,
    attributes: ['name']
  }
 */