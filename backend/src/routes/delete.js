const { Router } = require('express');
const { delete_favorite } = require('../controllers/deleteFavorites');
const router_delete = Router();

router_delete.delete('/user/favorites', delete_favorite)

module.exports = router_delete