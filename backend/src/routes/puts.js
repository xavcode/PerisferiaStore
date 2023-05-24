const { Router } = require('express');
const fs = require('fs');
const router_put = Router();
const multer = require('multer');
const { initialEdit } = require('../controllers/editProduct');
const { initialEdit_user } = require('../controllers/editUser');
const upload = multer({ dest: 'uploads/' })

router_put.put('/product', initialEdit);
router_put.put('/user', initialEdit_user);

module.exports = router_put;