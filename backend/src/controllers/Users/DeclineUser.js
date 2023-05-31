const { Users } = require('../../db');

const decline_users = async (req, res) => {
    try {
        const { userId } = req.params;
        const user = await Users.findByPk(userId);
        user.is_active = false;
        await user.save();
        console.log('Campo actaulizado con exito');
        res.status(200).send('Estado actualizado');
    } catch (error) {
        console.error('Surgio un error inesperado');
        res.status(500).json(error);
    }
} 

module.exports = {
    decline_users
}