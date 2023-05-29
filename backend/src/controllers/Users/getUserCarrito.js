const { Products, Users, Carrito } = require('../../db');

const get_user_carrito_by_id = async (req, res) => {
    try {
        const { userId } = req.params;
        const user = await Users.findByPk( userId, {
            attributes: ['name'], // Obtener solo el nombre del usuario
            include: [
                {
                    model: Carrito,
                    include: [
                        {
                            model: Products,
                            attributes: ['id','name','price', 'img'] // Obtener solo el nombre del producto
                        }
                    ]
                }
            ]
        });
        const arrayUser = [user]
        // Limpiando la respuesta 
        const result = arrayUser.map(user => {
            if (user.Carrito !== null) {
                const carrito = {
                    products: user.Carrito.Products.map(product => ({
                        id: product.id,
                        name: product.name,
                        price: product.price,
                        img: product.img,
                    }))
                };
                return {
                    name: user.name,
                    Carrito: carrito
                };
            } else {
                return {
                    Carrito: 'No hay productos'
                }
            }
        })
        return res.status(200).json(result);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
}
module.exports = {
    get_user_carrito_by_id
}