const { Router } = require('express');
const { delete_favorite } = require('../controllers/deleteFavorites');
const { delete_Product } = require('../controllers/deleteProducts');
const router_delete = Router();

router_delete.delete('/user/favorites', delete_favorite)
router_delete.delete('/store/:id', delete_Product);
module.exports = router_delete