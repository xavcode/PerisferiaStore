const { Products } = require("../../db");

// const edit_product = async (productId, campos) => {
const edit_product = async (product) => {
  try {
    // buscamos el producto
    // const product = await Products.findByPk(productId)
    console.log("->>>", product);
    const productFromDB = await Products.findByPk(product.id);

    // Actualizar el campo específico del producto en la base de datos
    // const updatedProduct = await product.update(campos);
    const updatedProduct = await productFromDB.update(product);
    return updatedProduct;
  } catch (error) {
    console.error("Error al actualizar el campo del producto:", error);
  }
};

const initialEdit = async (req, res) => {
  try {
    // const {
    //   productId,
    //   campos } = req.body;
    const { name, price, img, status, description, rating, category, id } = req.body;
    const productToUpdate = req.body;
    // const productEdit = await edit_product(productId, campos);
    // const productEdit = await edit_product(productToUpdate);
    const productEdit = await edit_product({ name, price, img, status, description, rating, category, id });
    res.status(200).json(productEdit);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

module.exports = {
  initialEdit,
};
