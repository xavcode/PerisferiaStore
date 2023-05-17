const { Router } = require("express");
const { Products } = require("../db");
const { getAllProducts, getProductsByName } = require("../controllers/productControllers");

//? create an instance of router.. with this we can make like: routerProducts.get or routerProducts.post, etc
const routeProducts = Router()


//**********************--GET PRODUCT--************************************/

routeProducts.get('/', async (req, res) => {
  try {
    const products = await getAllProducts()
    res.status(200).json(products)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})
//****************************************************************************/


//********************--GET PRODUCT BY NAME--********************************/

routeProducts.get('/', async (req, res) => {
  try {
    const { product } = req.query
    if (!product) {
      const allProducts = await getAllProducts()
      res.status(200).json(allProducts)
    } else if (product) {
      const productSearched = await getProductsByName(product)
      res.status(200).json(productSearched)
    }
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})


//****************************************************************************/


//**********************--CREATE PRODUCT--************************************/
routeProducts.post('/', async (req, res) => {
  try {
    const {
      id,
      name,
      price,
      img,
      status,
      description,
      rating,
      category,
      brand
    } = req.body;
    console.log(req.body)
    const newProduct = await Products.create({
      id,
      name,
      price,
      img,
      status,
      description,
      rating,
      category,
      brand
    })
    return res.status(200).send(newProduct)
  } catch (error) {
    return res.status(404).send(error.message);
  }
})

//****************************************************************************/



module.exports = routeProducts