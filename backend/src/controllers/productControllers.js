const { Products } = require('../db.js');

//get all products from DB
const getAllProducts = async () => {
  try {
    const allProducts = await Products.findAll()
    const products = allProducts?.map((product) => product)
    return (products)
  } catch (error) {
    throw new Error(error.message)
  }
}

//----------------------------------------------------------------//

const getProductsByName = async (productSearch) => {
  try {
    const product = await Products.findAll({
      where: { name: { [Op.like]: `%${product}%` } },
    });
    return (product);
  } catch (error) {
    throw new Error({ message: 'Server Error' });
  }
};


//----------------------------------------------------------------//

// const getProductById = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const product = await Products.findByPk(id);
//     if (!product) {
//       return res.status(500).json({ message: 'Product not found' });
//     }
//     return res.status(200).json(product);
//   } catch (error) {
//     console.error(error);
//     return res.status(500).json({ message: 'Server Error' });
//   }
// };

//----------------------------------------------------------------//

// const createProduct = async (req, res) => {
//   try {
//     const { name, price, img, status, description, rating, category, brand } = req.body;
//     const newProduct = await Product.create({ name, price, img, status, description, rating, category, brand });
//     res.status(201).json(newProduct);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: 'Internal server error' });
//   }
// };

//----------------------------------------------------------------//

module.exports = {
  getAllProducts,
  // getProductById,
  getProductsByName,
};