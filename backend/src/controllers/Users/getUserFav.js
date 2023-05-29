const { Products, Users } = require('../../db');

const get_user_favorites = async (req, res) => {
    try {
        const user = await Users.findAll({
            include: {
                model: Products,
                attributes: ['id', 'name', 'img'],
                through: {
                    attributes: [],
                }
            },
        });
        const response = user.map(user => {
            if (user.Products.length > 0) {
                const allUser = user.Products.map(prod => ({ id: prod.id, name: prod.name, img: prod.img }));
                return {
                    Name: user.name,
                    Favoritos: allUser
                }
            } else {
                return {
                    Name: user.name,
                    Favoritos: 'Sin favoritos por el momento'
                }
            };
        });
        return res.status(200).json(response);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
}
module.exports = {
    get_user_favorites
}