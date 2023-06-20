const { Router } = require('express');
const { create_record_user } = require('../controllers/Users/createUser');
const { addNewFavorite } = require('../controllers/Favorites/addFavorites');
const { creation_relation } = require('../controllers/Orders/addOrders');
const { create_Order, receive_Webhook } = require('../controllers/mercadoPago/Payment.js');
const { create_record_review } = require('../controllers/Review/addReview');
const { addProductCarrito } = require('../controllers/Carrito/addCarrito')
const {sendEmail} = require('../controllers/Nodemailer/NodeMailer.js')
const fs = require('fs')
const router_Post = Router();
const multer = require('multer');
const { create_store_review } = require('../controllers/StoreReview/createReview');
const { postFav } = require('../controllers/FavoritoProduct');
const { createProduct, add_NewProduct } = require('../controllers/Product/createProd');


const upload = multer({ dest: 'uploads/' });// Directorio donde se guardarán los archivos subidos

// Ruta POST para recibir el archivo adjunto
router_Post.post('/', upload.single('file'), add_NewProduct);
router_Post.post('/user', upload.single('file'), create_record_user);
router_Post.post('/user/favorites', addNewFavorite);
router_Post.post('/product/:id', create_record_review);
router_Post.post('/store', addProductCarrito);
router_Post.post('/store/:userId', create_store_review);
router_Post.post('/order', creation_relation);
 
router_Post.post('/send-email', sendEmail);
 

router_Post.post("/fav", postFav); //nueva
router_Post.post("/productCreate", createProduct); //nueva

// router_Post.post('/login', authController); 

//******************************************************************/
//ruta de la pasarela de pagos. 
//router_Post.post('/payment', create_Order);
router_Post.post('/payment', create_Order);
router_Post.post('/webhook', receive_Webhook);


module.exports = router_Post;

/**
 * especificar los rangos (tenerlos mas explicitos)
 * aplicar ordenamiento
 * aplicar formulario
 * autentificaciones
 * notificaciones
 */