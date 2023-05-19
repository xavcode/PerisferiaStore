const { Products, Users } = require('../db');

const get_user = async (req, res) => {
    try {
        const user = await Users.findAll({
            attributes: [ 'id', 'name', 'username'],
            include: {
                model: Products,
                attributes: ['name', 'description'],
                through: {
                    attributes: [],
                }
            }
        });
        return res.status(200).json(user);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
}
module.exports = {
    get_user
}