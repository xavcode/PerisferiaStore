const { Router } = require('express');
const { createRecordProduct } = require('../controllers/productControllers');
const { getAllProducts } = require('../controllers/productControllers');
const router_get = Router();

router_get.get('/', createRecordProduct)
router_get.get('/store', getAllProducts)

module.exports = router_get
