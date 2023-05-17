const { Products, Users } = require('../db');

const add_favorite = (producto) => {
    const newRecord = Favorite.create(producto);
    return newRecord;
};

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

const assddNewFavorite = async (req, res) => {
    try {
        const {
            userId,
            productId } = req.body;
        const prod = await Favorite.create({
            userId,
            productId,
        })
        // const user = await Users.findAll({
        //     where: { id: userId },
        //     include: 
        // })
        prod.addUsers(user)
        return res.status(200).send('exito');
    } catch (error) {
        return res.status(404).json({ error: error.message })
    }
}
module.exports = {
    addNewFavorite,
    assddNewFavorite
}

/***
 * 
 */