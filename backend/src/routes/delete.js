const { Router } = require('express');
const { delete_favorite } = require('../controllers/Favorites/deleteFavorites');
const { delete_Product } = require('../controllers/Product/deleteProducts');
const { delete_Product_onCarrito } = require('../controllers/Carrito/deleteProCar');
const { delete_store_review } = require('../controllers/StoreReview/deleteRev');
const { deleteFavId } = require('../controllers/FavoritoProduct');
const router_delete = Router();

router_delete.delete('/user/favorites', delete_favorite);
router_delete.delete('/store/:id', delete_Product);
router_delete.delete('/store', delete_Product_onCarrito);
router_delete.delete('/reviews/:id', delete_store_review)

router_delete.delete("/fav/:id", deleteFavId);//nuevo
module.exports = router_delete 