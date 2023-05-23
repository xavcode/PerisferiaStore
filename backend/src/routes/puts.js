const { Router } = require('express');
const fs = require('fs');
const router_put = Router();
const multer = require('multer');
const { initialEdit } = require('../controllers/editProduct');
const upload = multer({ dest: 'uploads/' })

router_put.put('/product', initialEdit)

module.exports = router_put;