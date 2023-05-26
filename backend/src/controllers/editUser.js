const { Users } = require('../db');

const edit_user = async (userId, campos) => {
    try {
       // Actualizar el campo específico del producto en la base de datos
    const result = await Users.update(campos,
        { where: { id: userId } }
    );

    if (result[0] === 0) {
      throw new Error('El usuario no existe');
    } else {
      return result[0]
    }
  } catch (error) {
    console.error('Error usuario inexistente', error);
    throw error
  }
};

const initialEdit_user = async (req, res) => {
    try {
        const { userId, campos } = req.body;
        const user_Edit = await edit_user(userId, campos);
        res.status(200).json(user_Edit)
    } catch (error) {
        res.satus(500).send({ error: error.message });
    }
};

module.exports = {
    initialEdit_user
}