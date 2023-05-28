const { Products } = require('../../db');

const edit_product = async (productId, campos) => {
  try {
    // buscamos el producto
    const product = await Products.findByPk(productId)
    
    // Actualizar el campo específico del producto en la base de datos
    const updatedProduct = await product.update(campos);
    return updatedProduct;
  } catch (error) {
    console.error('Error al actualizar el campo del producto:', error);
  }
};

const initialEdit = async (req, res) => {
  try {
    const { productId } = req.params;
      const { campos } = req.body;
        const productEdit = await edit_product(productId, campos);
        res.status(200).json(productEdit)
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
};

module.exports = {
    initialEdit
}