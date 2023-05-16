const { Router } = require('express');
const { add_NewProduct } = require('../controllers/createProd');
const { create_record_user } = require('../controllers/createUser');
const router_Post = Router();

router_Post.post('/', add_NewProduct);
router_Post.post('/user', create_record_user);

module.exports = router_Post;

/**
 * especificar los rangos (tenerlos mas explicitos)
 * aplicar ordenamiento
 * aplicar formulario
 * autentificaciones
 * notificaciones
 */