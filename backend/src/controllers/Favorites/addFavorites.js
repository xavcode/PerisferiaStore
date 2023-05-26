const { Products, Users } = require('../../db');

const addNewFavorite = async (req, res) => {
    try {
        const {
            usuarioId,
            productoId } = req.body;
        const user = await Users.findByPk(usuarioId);
        console.log(usuarioId)
        const producto = await Products.findByPk(productoId);
        user.addProducts(producto);
        return res.status(200).send('registrado con exito');
    } catch (error) {
        return res.status(404).json({ error: error.message });
    };
};
        

module.exports = {
    addNewFavorite,
}

/***
 * 
 */