const { Users } = require('../../db');

const edit_user = async (userId, campos) => {
    try {
       // Actualizar el campo específico del producto en la base de datos
      const resulUser = await Users.findByPk(userId)
      const result = await resulUser.update(campos); // campos es un objetos
      return result;
  } catch (error) {
      console.error('Error al actualizar el campo del usuario:', error);
      throw error
  }
};

const initialEdit_user = async (req, res) => {
    try {
        const { userId } = req.params;
        const { campos } = req.body;
        const user_Edit = await edit_user(userId, campos);
        res.status(200).json(user_Edit)
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
};

module.exports = {
    initialEdit_user
}