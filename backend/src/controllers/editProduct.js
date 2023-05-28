const { Products } = require('../db');

const edit_product = async (productId, field, newValue) => {
    try {
       // Actualizar el campo específico del producto en la base de datos
    const updatedProduct = await Products.update(
        { [field]: newValue },
        { where: { id: productId } }
    );

    if (updatedProduct > 0) {
      return Products.findByPk(productId);
    } else {
      console.log('El producto no fue encontrado.', productId);
    }
  } catch (error) {
    console.error('Error al actualizar el campo del producto:', error);
  }
};

const initialEdit = async (req, res) => {
    try {
        const { productId,  field, newValue } = req.body;
        const productEdit = await edit_product(productId, field, newValue);
        res.status(200).json(productEdit)
    } catch (error) {
        res.satus(500).send({ error: error.message });
    }
};

module.exports = {
    initialEdit
}