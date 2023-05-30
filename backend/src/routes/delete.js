const { Router } = require('express');
const { delete_favorite } = require('../controllers/Favorites/deleteFavorites');
const { delete_Product } = require('../controllers/Product/deleteProducts');
const { delete_Product_onCarrito } = require('../controllers/Carrito/deleteProCar');
const { delete_User } = require("../controllers/Users/deleteUser")
const router_delete = Router();

router_delete.delete('/user/favorites', delete_favorite);
router_delete.delete('/store/:id', delete_Product);
router_delete.delete('/store', delete_Product_onCarrito);
router_delete.delete('/user/:id', delete_User);
module.exports = router_delete