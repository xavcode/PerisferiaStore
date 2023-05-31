const { Users } = require('../../db');

const getUserById = async (req, res) => {
  try {
    const { userId } = req.params;
    const user = await Users.findByPk(userId);
    res.status(200).json(user);
  } catch (error) {
    throw new Error('Usuario no encontrado', error);
  }
};

module.exports = {
  getUserById
};