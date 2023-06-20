const { Router } = require('express');
const { getAllProducts, createRecordProduct } = require('../controllers/Product/productControllers');
const { addProductById } = require('../controllers/Product/addProductById');
const { get_Products_By_Name } = require('../controllers/Product/addProductByName');
const { get_user } = require('../controllers/Users/getUser');
const { get_order } = require('../controllers/Orders/getOrder');
const { getActiveUser } = require('../controllers/Users/getActivesUser');
const { get_user_carrito } = require('../controllers/Carrito/getProductOnCarrito');
const { create_Order, } = require('../controllers/mercadoPago/Payment.js');
const { getUserById } = require('../controllers/Users/getUserById');
const { get_user_carrito_by_id } = require('../controllers/Users/getUserCarrito');
const { get_user_favorites } = require('../controllers/Users/getUserFav');
const { getUserById_favorites } = require('../controllers/Users/userFvById');
const { get_store_review, delete_store_review } = require('../controllers/StoreReview/getAllReview');
const { getUserByMail } = require('../controllers/Users/getUserByMail');
const { getFav } = require('../controllers/FavoritoProduct');


const router_get = Router();

router_get.get('/', createRecordProduct);
router_get.get('/store', getAllProducts);
router_get.get('/store/name', get_Products_By_Name);
router_get.get('/store/:id', addProductById);
router_get.get('/reviews', get_store_review);
router_get.delete('/reviews/:id', delete_store_review);


router_get.get('/users', get_user);
router_get.get('/users/favoritos', get_user_favorites);
router_get.get('/users/favoritos/:userId', getUserById_favorites);
router_get.get('/admin/user/:userMail', getUserByMail);
router_get.get('/admin/users/:userId', getUserById)
router_get.get('/user/carrito', get_user_carrito);
router_get.get('/user/carrito/:userId', get_user_carrito_by_id);
router_get.get('/userAct', getActiveUser);
router_get.get('/orders', get_order);
router_get.get('/success', create_Order);
router_get.get('/failure', create_Order);
router_get.get('/pending', create_Order);

router_get.get("/fav", getFav);//nueva

module.exports = router_get
