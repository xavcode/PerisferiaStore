const { Router } = require('express');
const { add_NewProduct } = require('../controllers/createProd');
const router_Post = Router();

router_Post.post('/', add_NewProduct)

module.exports = router_Post;