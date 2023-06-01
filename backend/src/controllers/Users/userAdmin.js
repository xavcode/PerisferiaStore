const { Users } = require('../../db');

const userAdmin = async (req, res) => {
    try {
        const { userId } = req.params;
        const user = await Users.findByPk(userId);
        await user.update({
            is_admin: true
        })
        res.status(200).send('admin generado con exito');
    } catch (error) {
        console.error(error)
    }
};
module.exports = {
    userAdmin
}