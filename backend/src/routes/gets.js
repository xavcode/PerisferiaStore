const { Router } = require('express');
const { createRecordProduct } = require('../controllers/productControllers');
const { getAllProducts } = require('../controllers/productControllers');
const { addProductById } = require('../controllers/addProductById');
const { get_Products_By_Name } = require('../controllers/addProductByName');
const { get_user } = require('../controllers/getUser');
const router_get = Router();

router_get.get('/', (req, res) => {
   const ah = createRecordProduct()
    res.status(200).json(ah)
});
router_get.get('/store', getAllProducts);
router_get.get('/store/name', get_Products_By_Name);
router_get.get('/store/:id', addProductById);
router_get.get('/usuarios', get_user)



module.exports = router_get
