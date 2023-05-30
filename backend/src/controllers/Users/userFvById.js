const { Users, Products } = require('../../db');

const getUserById_favorites = async (req, res) => {
    try {
        const { userId } = req.params;
        const user = await Users.findByPk(userId, {
            include: {
                model: Products,
                attributes: [ 'id', 'name', 'price', 'img'],
                through: {
                    attributes: [],
                }
            },
        });
        const userData = [user];
        const response = userData.map(user => {
            const mapeo = user.Products.map(prod => ({ id: prod.id, name: prod.name, price: prod.price, img: prod.img }))
            return {
                name: user.name,
                Favoritos: mapeo
            };
        });
        res.status(200).json(response);
    } catch (error) {
        throw new Error('ususario no encontrado', error)
    }
}

module.exports = {
    getUserById_favorites
}