const { Router } = require('express');
const { createProduct, add_NewProduct } = require('../controllers/createProd');
const { create_record_user } = require('../controllers/createUser');
const { addNewFavorite } = require('../controllers/addFavorites');
const { creation_relation } = require('../controllers/addOrders');
const fs = require('fs')
const router_Post = Router();
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });// Directorio donde se guardarán los archivos subidos

// Ruta POST para recibir el archivo adjunto
router_Post.post('/', upload.single('file'), add_NewProduct);


router_Post.post('/user', create_record_user);
router_Post.post('/user/favorites', addNewFavorite);
router_Post.post('/order', creation_relation);
// router_Post.post('/login', authController);


module.exports = router_Post;

/**
 * especificar los rangos (tenerlos mas explicitos)
 * aplicar ordenamiento
 * aplicar formulario
 * autentificaciones
 * notificaciones
 */