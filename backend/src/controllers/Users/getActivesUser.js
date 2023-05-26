const { Users } = require('../../db');

const getActiveUser = async (req, res) => {
    try {
        const userAct = await Users.findAll({
            where: {
                is_active: true
            }
        })
        res.status(200).json(userAct)
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: error.message });
    }
}

module.exports = {
    getActiveUser
}