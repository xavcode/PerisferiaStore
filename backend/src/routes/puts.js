const { Router } = require('express');
const fs = require('fs');
const router_put = Router();
const multer = require('multer');
const { initialEdit } = require('../controllers/Product/editProduct');
const { initialEdit_user } = require('../controllers/Users/editUser');
const upload = multer({ dest: 'uploads/' })

router_put.put('/product', initialEdit); // editar product

router_put.put('/user', initialEdit_user); // editar usuario

module.exports = router_put;