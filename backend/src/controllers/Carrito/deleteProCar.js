const { Carrito, Products } = require('../../db');

const delete_Product_onCarrito = async (req, res) => {
    try {
        const { producId, carritoId } = req.body;
        const carrito = await Carrito.findByPk(carritoId);
        await carrito.removeProducts(producId);
        res.status(200).send('eliminado exitoso');
    } catch (error) {
        res.status(404).json({ error: error.message });
    };
};

module.exports = {
    delete_Product_onCarrito
}
