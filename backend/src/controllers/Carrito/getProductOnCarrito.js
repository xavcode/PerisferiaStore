const { Products, Users, Carrito } = require('../../db');

const get_user_carrito = async (req, res) => {
    try {
        const { userId } = req.params;
        const user =  await Users.findByPk(userId, {
            attributes: ['name'], // Obtener solo el nombre del usuario
            include: [
                {
                    model: Carrito,
                    attributes: ['cantidad'],
                    include: [
                        {
                            model: Products,
                            attributes: ['name','price'] // Obtener solo el nombre del producto
                        }
                    ]
                }
            ]
        });
        const arrayUser = [user];
        
        // Limpiando la respuesta 
        const result = arrayUser.map(user => {
            const carrito = {
                id: user.Carrito.id,
                products: user.Carrito.Products.map(product => ({ name: product.name, price: product.price }))
            };
            return {
                name: user.name,
                Carrito: carrito
            };
        })
        // console.log(user[0].Carrito)
        return res.status(200).json(result);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
}
module.exports = {
    get_user_carrito
}