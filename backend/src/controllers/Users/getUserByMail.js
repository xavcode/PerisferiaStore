const { Users } = require('../../db');

const getUserByMail = async (req, res) => {
  try {
    const { userMail } = req.params;
    const user = await Users.findOne({
      where: {
        mail: userMail
      }
    });
    res.status(200).json(user);
    
  } catch (error) {
    throw new Error('Usuario no encontrado', error);
  }
};

module.exports = {
  getUserByMail
};