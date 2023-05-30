const { Products, Users, Carrito } = require('../../db');

const addProductCarrito = async (req, res) => {
    try {
        const {
            userId,
            productId } = req.body;
            const product = await Products.findByPk(productId);
            const user = await Users.findByPk(userId, {
            include: [Carrito]
        });
        if (user && user.Carrito) {
            await user.Carrito.addProducts(product);
        } else {
            const newCarrito = await Carrito.create(userId)
            await user.setCarrito(newCarrito);
            await newCarrito.addProducts(product)
        }
        return res.status(200).send('registrado con exito');
    } catch (error) {
        return res.status(404).json({ error: error.message });
    };
};

module.exports = {
    addProductCarrito,
}
        
        