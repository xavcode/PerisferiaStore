const { Products, Users, Carrito } = require('../../db');

const get_user_carrito = async (req, res) => {
    try {
        const user = await Users.findAll({
            attributes: ['name'], // Obtener solo el nombre del usuario
            include: [
                {
                    model: Carrito,
                    include: [
                        {
                            model: Products,
                            attributes: ['id' ,'name'] // Obtener solo el nombre del producto
                        }
                    ]
                }
            ]
        });
        // Limpiando la respuesta 
        const result = user.map(user => {
            const carrito = {
                id: user.Carrito.id,
                products: user.Carrito.Products.map(product => ({id: product.id, name: product.name }))
            };
            return {
                name: user.name,
                Carrito: carrito
            };
        })
        return res.status(200).json(result);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
}
module.exports = {
    get_user_carrito
}