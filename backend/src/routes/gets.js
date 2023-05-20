const { Router } = require('express');
const { getAllProducts, createRecordProduct } = require('../controllers/productControllers');
const { addProductById } = require('../controllers/addProductById');
const { get_Products_By_Name } = require('../controllers/addProductByName');
const { createProduct } = require('../controllers/createProd');
const { get_user } = require('../controllers/getUser');
const { get_order } = require('../controllers/getOrder');

const router_get = Router();

router_get.get('/', createRecordProduct);
router_get.get('/store', getAllProducts);
router_get.get('/store/name', get_Products_By_Name);
router_get.get('/store/:id', addProductById);
router_get.get('/users', get_user)
router_get.get('/orders', get_order);


module.exports = router_get
