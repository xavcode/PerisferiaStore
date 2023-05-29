const { Router } = require('express');
const { getAllProducts, createRecordProduct } = require('../controllers/Product/productControllers');
const { addProductById } = require('../controllers/Product/addProductById');
const { get_Products_By_Name } = require('../controllers/Product/addProductByName');
const { get_user } = require('../controllers/Users/getUser');
const { get_order } = require('../controllers/Orders/getOrder');
const { getActiveUser } = require('../controllers/Users/getActivesUser');
const { get_user_carrito } = require('../controllers/Carrito/getProductOnCarrito');
const { create_Order,} = require('../controllers/mercadoPago/Payment.js');
const router_get = Router();

router_get.get('/', createRecordProduct);
router_get.get('/store', getAllProducts);
router_get.get('/store/name', get_Products_By_Name);
router_get.get('/store/:id', addProductById);
router_get.get('/users', get_user);
router_get.get('/user/carrito', get_user_carrito);
router_get.get('/userAct', getActiveUser);
router_get.get('/orders', get_order);
router_get.get('/success', create_Order)
router_get.get('/failure', create_Order)
router_get.get('/pending', create_Order)


module.exports = router_get
