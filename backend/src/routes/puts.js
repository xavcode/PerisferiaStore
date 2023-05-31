const { Router } = require('express');
const fs = require('fs');
const router_put = Router();
const multer = require('multer');
const { initialEdit } = require('../controllers/Product/editProduct');
const { initialEdit_user } = require('../controllers/Users/editUser');
const { decline_users } = require('../controllers/Users/DeclineUser');
const { active_users } = require('../controllers/Users/activeUser');
const upload = multer({ dest: 'uploads/' })

router_put.put('/product', initialEdit); // editar product
// router_put.put('/product/:productId', initialEdit); // editar product
router_put.put('/admin/user/:userId', initialEdit_user); // editar usuario
router_put.put('/admin/user/decline/:userId', decline_users);
router_put.put('/admin/user/active/:userId', active_users);

module.exports = router_put;   