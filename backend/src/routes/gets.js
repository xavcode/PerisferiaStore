const { Router } = require('express');
const { createRecordProduct } = require('../controllers/productControllers');
const { getAllProducts } = require('../controllers/productControllers');
const { addProductById } = require('../controllers/addProductById');
const { get_Products_By_Name } = require('../controllers/addProductByName');
const router_get = Router();

router_get.get('/', createRecordProduct);
router_get.get('/store', getAllProducts);
router_get.get('/store/:id', addProductById);
router_get.get('/name', get_Products_By_Name);



module.exports = router_get
