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
            // verificamos si el producto ya esta en el carrito
            const carritoExisting = await user.Carrito.getProducts({
                where: { id: productId }
            });
            if (carritoExisting.length > 0) {
                await user.Carrito.addProducts(product, {
                    through: {
                        cantidad: carritoExisting[0].CarritoProductos.cantidad + 1
                    }
                });
            } else {
                // si el producto no existe se lo agrega con la cantidad en 1
                await user.Carrito.addProducts(product, {
                    through: {
                        cantidad: 1
                    }
                });
            }
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
        
        