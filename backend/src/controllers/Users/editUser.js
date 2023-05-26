const { Users } = require('../../db');

const edit_user = async (userId, field, newValue) => {
    try {
       // Actualizar el campo específico del producto en la base de datos
    const updatedProduct = await Users.update(
        { [field]: newValue },
        { where: { id: userId } }
    );

    if (updatedProduct > 0) {
      return Users.findByPk(userId);
    } else {
      console.log('El producto no fue encontrado.', userId);
    }
  } catch (error) {
    console.error('Error al actualizar el campo del producto:', error);
  }
};

const initialEdit_user = async (req, res) => {
    try {
        const { userId, field, newValue } = req.body;
        const user_Edit = await edit_user(userId, field, newValue);
        res.status(200).json(user_Edit)
    } catch (error) {
        res.satus(500).send({ error: error.message });
    }
};

module.exports = {
    initialEdit_user
}