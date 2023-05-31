const { Users } = require('../../db');

const active_users = async (req, res) => {
    try {
        const { userId } = req.params;
        const user = await Users.findByPk(userId);
        user.is_active = true;
        await user.save(); 
        console.log('Campo actaulizado con exito');
        res.status(200).send('Estado actualizado');
    } catch (error) {
        console.error('Surgio un error inesperado');
        res.status(500).json(error);
    }
}

module.exports = {
    active_users
}